import { ChartColumn, Layers, LayoutTemplate, Smartphone } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries/en";
import { SectionHeading } from "./section-heading";

const icons = [LayoutTemplate, Smartphone, ChartColumn, Layers];

export function Services({ t }: { t: Dictionary["services"] }) {
  return (
    <section id="services" aria-labelledby="services-title" className="border-b border-line">
      <div className="mx-auto max-w-6xl border-x border-line">
        <SectionHeading id="services-title" index={t.index} label={t.label} title={t.title} sub={t.sub} />
        <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title} className="flex flex-col bg-canvas p-6 sm:p-8">
                <div data-reveal="scroll" className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-sharp border border-line bg-surface">
                      <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                  <ul className="mt-6 space-y-2 border-t border-line pt-5 font-mono text-xs text-ink">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5">
                        <span aria-hidden="true" className="size-1 bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
