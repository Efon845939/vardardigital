import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookie, locales, type Locale } from "@/lib/i18n";

function fromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return ranked.find((r) => locales.includes(r.lang as Locale))?.lang as Locale ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isLocale(pathname.split("/")[1])) return;

  const saved = request.cookies.get(localeCookie)?.value;
  const locale = isLocale(saved) ? saved : fromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and any path with a file extension (icons, images, sitemap.xml, robots.txt).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
