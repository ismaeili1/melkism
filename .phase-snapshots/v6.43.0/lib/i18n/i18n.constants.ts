import type { Locale } from "./config";

export const I18N_VERSION = "6.27.0";

export const LOCALE_COOKIE_NAME = "melkism_locale";

export const localeLabels: Record<
  Locale,
  string
> = {
  fa: "فارسی",
  en: "English",
  ar: "العربية",
  tr: "Türkçe",
};

export const localeNativeLabels: Record<
  Locale,
  string
> = {
  fa: "فارسی",
  en: "English",
  ar: "العربية",
  tr: "Türkçe",
};

export const localeShortLabels: Record<
  Locale,
  string
> = {
  fa: "FA",
  en: "EN",
  ar: "AR",
  tr: "TR",
};
