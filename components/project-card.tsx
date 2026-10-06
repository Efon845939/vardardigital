import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries/en";
import type { Locale } from "@/lib/i18n";
import { showLiveLinks, type Project } from "@/lib/projects";

const sizes = {
  lg: "(min-width: 1024px) 760px, 100vw",
  sm: "(min-width: 1024px) 370px, (min-width: 768px) 50vw, 100vw",
  wide: "(min-width: 1024px) 570px, 100vw",
};

function CalendarPlaceholder({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-canvas">
      <div aria-hidden="true" className="grid grid-cols-7 gap-1">
        {Array.from({ length: 28 }, (_, i) => (
          <span
            key={i}
            className={`size-3.5 rounded-[1px] border ${
              i === 17 ? "border-accent bg-accent" : i % 7 > 4 ? "border-line bg-line/60" : "border-line bg-surface"
            }`}
          />
        ))}
      </div>
      <p className="text-xl font-semibold tracking-tight">{title}</p>
    </div>
  );
}

export function ProjectCard({ project, locale, t }: { project: Project; locale: Locale; t: Dictionary["work"] }) {
  const title = project.title[locale];
  const wide = project.size === "wide";

  const body = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-sharp opacity-0 shadow-[0_18px_40px_-20px_rgba(17,17,17,0.28)] transition-opacity duration-[240ms] ease-out-expo group-hover:opacity-100"
      />
      <div className={`overflow-hidden border-line ${wide ? "border-b lg:border-b-0 lg:border-r" : "border-b"}`}>
        <div className="flex h-8 items-center gap-3 border-b border-line bg-canvas px-3">
          <span aria-hidden="true" className="flex gap-1">
            <span className="size-1.5 rounded-[1px] bg-line-strong" />
            <span className="size-1.5 rounded-[1px] bg-line-strong" />
            <span className="size-1.5 rounded-[1px] bg-line-strong" />
          </span>
          <span className="truncate font-mono text-[11px] text-muted">{project.domain}</span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-canvas">
          {project.image ? (
            <Image
              src={project.image}
              alt={t.screenshotAlt.replace("{title}", title)}
              fill
              sizes={sizes[project.size]}
              className="object-cover object-top transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]"
            />
          ) : (
            <CalendarPlaceholder title={title} />
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          <span>{project.category[locale]}</span>
          {showLiveLinks && (
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 shrink-0 text-ink transition-transform duration-[240ms] ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          )}
        </div>
        <h3 className={`font-semibold tracking-tight ${project.size === "sm" ? "text-lg" : "text-xl sm:text-2xl"}`}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{project.description[locale]}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags[locale].map((tag) => (
            <li key={tag} className="rounded-sharp border border-line px-2 py-1 font-mono text-[11px] text-ink">
              {tag}
            </li>
          ))}
        </ul>
        {showLiveLinks && (
          <span className="sr-only">
            {t.visit}, {t.newTab}
          </span>
        )}
      </div>
    </>
  );

  const className = `group relative flex h-full flex-col rounded-sharp border border-line bg-surface transition-[border-color,transform] duration-[240ms] ease-out-expo ${
    wide ? "lg:grid lg:grid-cols-2" : ""
  } ${showLiveLinks ? "hover:-translate-y-0.5 hover:border-ink" : ""}`;

  return showLiveLinks ? (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <article className={className}>{body}</article>
  );
}
