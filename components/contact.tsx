import type { Dictionary } from "@/lib/dictionaries/en";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";
import { CopyEmail } from "./copy-email";
import { SectionHeading } from "./section-heading";

export function Contact({ locale, t }: { locale: Locale; t: Dictionary["contact"] }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-b border-line">
      <div className="mx-auto max-w-6xl border-x border-line">
        <SectionHeading id="contact-title" index={t.index} label={t.label} title={t.title} sub={t.sub} />
        <div className="grid gap-px bg-line lg:grid-cols-[1fr_1.5fr]">
          <div className="bg-canvas p-6 sm:p-8">
            <div data-reveal="scroll">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{t.emailLabel}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block break-all text-xl font-semibold tracking-tight transition-colors hover:text-accent sm:text-2xl"
              >
                {site.email}
              </a>
              <div className="mt-4">
                <CopyEmail email={site.email} copy={t.copy} copied={t.copied} />
              </div>
            </div>
          </div>
          <div className="relative bg-surface p-6 sm:p-8">
            <div data-reveal="scroll">
              <ContactForm locale={locale} t={t.form} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
