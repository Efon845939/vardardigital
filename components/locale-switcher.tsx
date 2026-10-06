"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeCookie, locales, type Locale } from "@/lib/i18n";

export function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav aria-label={label} className="flex items-center font-mono text-xs">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="px-1.5 text-line-strong" aria-hidden="true">/</span>}
          <Link
            href={`/${l}${rest ? `/${rest}` : ""}`}
            hrefLang={l}
            aria-current={l === locale ? "true" : undefined}
            onClick={() => {
              document.cookie = `${localeCookie}=${l}; path=/; max-age=31536000; samesite=lax`;
            }}
            className={`uppercase transition-colors ${
              l === locale ? "text-ink" : "text-muted hover:text-ink"
            }`}
          >
            {l}
          </Link>
        </span>
      ))}
    </nav>
  );
}
