"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries/en";
import type { Locale } from "@/lib/i18n";
import { ButtonLink } from "./button";
import { LocaleSwitcher } from "./locale-switcher";
import { Logo } from "./logo";

export function SiteHeader({ locale, t, base = "" }: { locale: Locale; t: Dictionary["nav"]; base?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `${base}#work`, label: t.work },
    { href: `${base}#services`, label: t.services },
    { href: `${base}#contact`, label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        {t.skip}
      </a>
      <div
        aria-hidden="true"
        className={`absolute inset-0 border-b border-line bg-canvas/85 backdrop-blur-md transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Logo locale={locale} />
        <nav aria-label={t.primary} className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 sm:gap-5">
          <LocaleSwitcher locale={locale} label={t.language} />
          <span className="hidden sm:block">
            <ButtonLink href={`${base}#contact`} className="h-9 px-3.5 text-[13px]">
              {t.cta}
            </ButtonLink>
          </span>
        </div>
      </div>
    </header>
  );
}
