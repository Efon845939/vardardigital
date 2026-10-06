import { en } from "./dictionaries/en";
import { tr } from "./dictionaries/tr";

export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeCookie = "NEXT_LOCALE";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

const dictionaries = { en, tr };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
