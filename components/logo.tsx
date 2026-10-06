import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={`/${locale}`}
      className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-[15px] font-semibold tracking-tight text-ink"
    >
      <svg viewBox="0 0 32 32" className="size-6" aria-hidden="true">
        <rect width="32" height="32" rx="2" fill="#111111" />
        <path d="M8 9h4.3L16 20.2 19.7 9H24l-6 15h-4z" fill="#ffffff" />
      </svg>
      {site.name}
    </Link>
  );
}
