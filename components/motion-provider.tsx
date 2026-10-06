"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

declare global {
  interface Window {
    __revealTimer?: number;
  }
}

/**
 * Single owner of the animation loop: Lenis, ScrollTrigger and the hero shader
 * all run on gsap.ticker, so there is exactly one requestAnimationFrame.
 */
export function MotionProvider() {
  useEffect(() => {
    clearTimeout(window.__revealTimer);
    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set("[data-reveal]", { opacity: 1 });
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: false,
      anchors: { offset: -72 },
    });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-reveal='line']",
        { opacity: 0, yPercent: 100 },
        { opacity: 1, yPercent: 0, duration: 0.9, ease: "expo.out", stagger: 0.08 },
      );
      gsap.fromTo(
        "[data-reveal='hero']",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.06, delay: 0.15 },
      );
      ScrollTrigger.batch("[data-reveal='scroll']", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.06, overwrite: true },
          ),
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
