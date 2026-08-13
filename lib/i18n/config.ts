export const locales = ["fa", "en", "ar", "tr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export const localeDirection: Record<Locale, "rtl" | "ltr"> = {
  fa: "rtl",
  en: "ltr",
  ar: "rtl",
  tr: "ltr",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
