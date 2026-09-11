import {
  localeDirection,
  type Locale,
} from "./config";

export function getDirection(
  locale: Locale
): "rtl" | "ltr" {
  return localeDirection[locale];
}

export function isRtl(
  locale: Locale
): boolean {
  return localeDirection[locale] === "rtl";
}

export function isLtr(
  locale: Locale
): boolean {
  return localeDirection[locale] === "ltr";
}
