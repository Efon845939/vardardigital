"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const vertex = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;

// Slow simplex-noise flow in cobalt / pale blue on #FAFAFA, masked so the text side stays clean.
const fragment = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;

vec3 permute(vec3 x){return mod(((x*34.0)+1.0)*x,289.0);}
float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));
  vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz;
  x12.xy-=i1;
  i=mod(i,289.0);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m=m*m;m=m*m;
  vec3 x=2.0*fract(p*C.www)-1.0;
  vec3 h=abs(x)-0.5;
  vec3 ox=floor(x+0.5);
  vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g;
  g.x=a0.x*x0.x+h.x*x0.y;
  g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}

void main(){
  vec2 uv=gl_FragCoord.xy/u_res;
  vec2 st=uv*vec2(u_res.x/u_res.y,1.0);
  float t=u_time*0.05;
  float n=snoise(st*1.1+vec2(t,-t*0.6))*0.65+snoise(st*2.4-vec2(t*0.7,t))*0.35;
  float field=smoothstep(-0.25,0.85,n);

  vec3 base=vec3(0.98);
  vec3 pale=vec3(0.855,0.894,1.0);
  vec3 cobalt=vec3(0.122,0.31,0.82);
  vec3 col=mix(base,pale,field);
  col=mix(col,cobalt,smoothstep(0.7,1.0,field)*0.28);

  float mask=smoothstep(0.42,1.0,uv.x)*smoothstep(0.0,0.35,uv.y);
  col=mix(base,col,mask);

  float grain=(fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-0.5)*0.02;
  gl_FragColor=vec4(col+grain,1.0);
}`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
}

export function ShaderField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    // Hidden on phones (CSS): skip creating a WebGL context at all.
    if (!canvas || !canvas.offsetWidth) return;
    const gl = canvas.getContext("webgl", { antialias: false, powerPreference: "low-power" });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, vertex);
    const fs = compile(gl, gl.FRAGMENT_SHADER, fragment);
    if (!vs || !fs) return;
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    // One oversized triangle covers the viewport.
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");

    const draw = (seconds: number) => {
      gl.uniform1f(uTime, seconds);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let elapsed = 8;

    const resize = () => {
      // Soft gradient: half-resolution rendering is invisible and saves fill rate.
      const scale = Math.min(window.devicePixelRatio, 2) * 0.5;
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * scale));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      draw(elapsed);
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const observer = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });
    observer.observe(canvas);
    resize();
    canvas.dataset.ready = "1";

    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(canvas);

    const tick = (_time: number, deltaMs: number) => {
      if (!visible || document.hidden) return;
      elapsed += deltaMs / 1000;
      draw(elapsed);
    };
    if (!reduce) gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      observer.disconnect();
      io.disconnect();
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 hidden h-full w-full opacity-0 sm:block transition-opacity duration-[1200ms] data-[ready=1]:opacity-100"
    />
  );
}
