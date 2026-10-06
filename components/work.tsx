import type { Dictionary } from "@/lib/dictionaries/en";
import type { Locale } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

const spans = {
  lg: "md:col-span-2 lg:col-span-4",
  sm: "lg:col-span-2",
  wide: "md:col-span-2 lg:col-span-6",
};

export function Work({ locale, t }: { locale: Locale; t: Dictionary["work"] }) {
  return (
    <section id="work" aria-labelledby="work-title" className="border-b border-line">
      <div className="mx-auto max-w-6xl border-x border-line">
        <SectionHeading id="work-title" index={t.index} label={t.label} title={t.title} sub={t.sub} />
        <ul className="grid gap-4 p-4 sm:p-6 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((project) => (
            <li key={project.slug} data-reveal="scroll" className={spans[project.size]}>
              <ProjectCard project={project} locale={locale} t={t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
