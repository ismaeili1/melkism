import Link from "next/link";

import type { SupportedLocale } from "./navigation.config";

const locales: Array<{
  code: SupportedLocale;
  label: string;
}> = [
  { code: "fa", label: "فارسی" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "tr", label: "Türkçe" },
];

type LanguageSwitcherProps = {
  locale: SupportedLocale;
};

export function LanguageSwitcher({
  locale,
}: LanguageSwitcherProps) {
  return (
    <details>
      <summary
        style={{
          cursor: "pointer",
          listStyle: "none",
          minHeight: "40px",
          display: "inline-flex",
          alignItems: "center",
          paddingInline: "var(--melkism-space-3)",
          border: "1px solid var(--melkism-color-border)",
          borderRadius: "var(--melkism-radius-md)",
          fontSize: "var(--melkism-font-size-sm)",
          fontWeight: 600,
        }}
      >
        {locales.find((item) => item.code === locale)?.label ?? locale}
      </summary>

      <div
        style={{
          position: "absolute",
          marginTop: "var(--melkism-space-2)",
          padding: "var(--melkism-space-2)",
          background: "var(--melkism-color-background)",
          border: "1px solid var(--melkism-color-border)",
          borderRadius: "var(--melkism-radius-md)",
          boxShadow: "var(--melkism-shadow-md)",
          display: "grid",
          gap: "var(--melkism-space-1)",
        }}
      >
        {locales.map((item) => (
          <Link
            key={item.code}
            href={`/${item.code}`}
            style={{
              display: "block",
              padding: "var(--melkism-space-2) var(--melkism-space-3)",
              borderRadius: "var(--melkism-radius-sm)",
              whiteSpace: "nowrap",
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
