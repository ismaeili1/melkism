"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  localeLabels,
} from "@/lib/i18n/i18n.constants";

import {
  locales,
  type Locale,
} from "@/lib/i18n/config";

import {
  switchLocalePath,
} from "@/lib/i18n/translation.utils";

type LanguageSwitcherProps = {
  locale: Locale;
};

const languageNavLabels: Record<
  Locale,
  string
> = {
  fa: "زبان",
  en: "Language",
  ar: "اللغة",
  tr: "Dil",
};

export function LanguageSwitcher({
  locale,
}: LanguageSwitcherProps) {
  const pathname =
    usePathname() ?? `/${locale}`;

  return (
    <nav
      aria-label={languageNavLabels[locale]}
      data-locale={locale}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        flexWrap: "wrap",
      }}
    >
      {locales.map((targetLocale) => (
        <Link
          key={targetLocale}
          href={switchLocalePath(
            pathname,
            targetLocale
          )}
          hrefLang={targetLocale}
          aria-current={
            targetLocale === locale
              ? "page"
              : undefined
          }
          style={{
            textDecoration:
              targetLocale === locale
                ? "underline"
                : "none",
            fontWeight:
              targetLocale === locale
                ? 700
                : 400,
            minHeight: "40px",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          {localeLabels[targetLocale]}
        </Link>
      ))}
    </nav>
  );
}

