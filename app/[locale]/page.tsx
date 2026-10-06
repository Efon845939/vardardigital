import { notFound } from "next/navigation";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MotionProvider } from "@/components/motion-provider";
import { Services } from "@/components/services";
import { SiteHeader } from "@/components/site-header";
import { Work } from "@/components/work";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <MotionProvider />
      <SiteHeader locale={locale} t={t.nav} />
      <main id="main">
        <Hero t={t.hero} />
        <Work locale={locale} t={t.work} />
        <Services t={t.services} />
        <Contact locale={locale} t={t.contact} />
      </main>
      <Footer locale={locale} t={t.footer} />
    </>
  );
}
