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

export function LanguageSwitcher({
  locale,
}: LanguageSwitcherProps) {
  const pathname =
    usePathname() ?? `/${locale}`;

  return (
    <nav
      aria-label="Language"
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
          }}
        >
          {localeLabels[targetLocale]}
        </Link>
      ))}
    </nav>
  );
}
