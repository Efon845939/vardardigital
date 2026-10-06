import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/en";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Logo } from "./logo";

export function Footer({ locale, t }: { locale: Locale; t: Dictionary["footer"] }) {
  const legal = Object.values(site.legal).filter(Boolean);

  return (
    <footer>
      <div className="mx-auto grid max-w-6xl gap-8 border-x border-line px-4 py-12 sm:grid-cols-2 sm:px-6">
        <div>
          <Logo locale={locale} />
          <p className="mt-3 text-sm text-muted">{t.tagline}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
            {site.email}
          </a>
          <Link href={`/${locale}/privacy`} className="text-muted transition-colors hover:text-ink">
            {t.privacy}
          </Link>
          {legal.length > 0 && <p className="text-xs text-muted">{legal.join(" · ")}</p>}
          <p className="mt-2 font-mono text-xs text-muted">
            © 2026 {site.name}. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
