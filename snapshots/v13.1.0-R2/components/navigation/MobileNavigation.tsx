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

const menuLabels: Record<
  SupportedLocale,
  string
> = {
  fa: "منو",
  en: "Menu",
  ar: "القائمة",
  tr: "Menü",
};

export function MobileNavigation({
  locale,
}: Props) {
  return (
    <nav
      aria-label={primaryNavLabels[locale]}
      data-locale={locale}
    >
      <details>
        <summary>
          {menuLabels[locale]}
        </summary>

        <ul
          style={{
            listStyle: "none",
            display: "grid",
            gap: "0.5rem",
            marginTop: "0.75rem",
          }}
        >
          {navigationItems.map((item) => (
            <li key={item.key}>
              <Link
                href={localizedPath(
                  locale,
                  item.href
                )}
                style={{
                  display: "inline-flex",
                  minHeight: "40px",
                  alignItems: "center",
                }}
              >
                {item.labels[locale]}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}

