import type { Dictionary } from "@/lib/dictionaries/en";
import { ButtonLink } from "./button";
import { ShaderField } from "./shader-field";

const stack = ["Next.js", "React", "TypeScript", "React Native", "FastAPI", "Firebase", "MongoDB"];

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line">
      <ShaderField />
      <div className="relative mx-auto max-w-6xl border-x border-line px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:pt-28">
        <p
          data-reveal="hero"
          className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-muted"
        >
          <span aria-hidden="true" className="size-1.5 bg-accent" />
          {t.eyebrow}
        </p>
        <h1
          id="hero-title"
          className="mt-6 max-w-3xl text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl"
        >
          {t.title.map((line) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <span data-reveal="line" className="block">
                {line}
              </span>
            </span>
          ))}
        </h1>
        <p data-reveal="hero" className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
          {t.sub}
        </p>
        <div data-reveal="hero" className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="#contact" arrow>
            {t.primary}
          </ButtonLink>
          <ButtonLink href="#work" variant="outline">
            {t.secondary}
          </ButtonLink>
        </div>
      </div>
      <div className="relative border-t border-line bg-canvas/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 border-x border-line px-4 py-3.5 font-mono text-xs text-muted sm:px-6">
          <span className="uppercase tracking-[0.14em] text-ink">{t.stackLabel}</span>
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
