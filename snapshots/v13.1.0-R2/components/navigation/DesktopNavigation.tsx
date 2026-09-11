import Link from "next/link";

import type {
  SupportedLocale,
} from "./navigation.config";

import {
  navigationItems,
} from "./navigation.config";

import {
  localizedPath,
} from "@/lib/i18n/translation.utils";

type Props = {
  locale: SupportedLocale;
};

const primaryNavLabels: Record<
  SupportedLocale,
  string
> = {
  fa: "ناوبری اصلی",
  en: "Primary navigation",
  ar: "التنقل الرئيسي",
  tr: "Ana gezinme",
};

export function DesktopNavigation({
  locale,
}: Props) {
  return (
    <nav
      aria-label={primaryNavLabels[locale]}
      data-locale={locale}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      {navigationItems.map((item) => (
        <Link
          key={item.key}
          href={localizedPath(
            locale,
            item.href
          )}
        >
          {item.labels[locale]}
        </Link>
      ))}
    </nav>
  );
}

