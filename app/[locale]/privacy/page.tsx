import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary, isLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: getDictionary(locale).privacy.title,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { en: "/en/privacy", tr: "/tr/privacy" },
    },
  };
}

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const legal = Object.values(site.legal).filter(Boolean);

  return (
    <>
      <SiteHeader locale={locale} t={t.nav} base={`/${locale}`} />
      <main id="main" className="border-y border-line">
        <article className="mx-auto max-w-6xl border-x border-line px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{t.privacy.updated}</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{t.privacy.title}</h1>
            {legal.length > 0 && <p className="mt-4 text-sm text-muted">{legal.join(" · ")}</p>}
            <div className="mt-12 space-y-10">
              {t.privacy.sections.map((section) => {
                const [before, after] = section.body.split("{email}");
                return (
                  <section key={section.heading}>
                    <h2 className="text-lg font-semibold tracking-tight">{section.heading}</h2>
                    <p className="mt-2 leading-relaxed text-muted">
                      {before}
                      {after !== undefined && (
                        <>
                          <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-2">
                            {site.email}
                          </a>
                          {after}
                        </>
                      )}
                    </p>
                  </section>
                );
              })}
            </div>
            <Link
              href={`/${locale}`}
              className="mt-14 inline-block font-mono text-xs uppercase tracking-[0.14em] text-ink underline underline-offset-4"
            >
              {t.privacy.back}
            </Link>
          </div>
        </article>
      </main>
      <Footer locale={locale} t={t.footer} />
    </>
  );
}
