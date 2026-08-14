import Link from "next/link";
import {
  navigationItems,
  type SupportedLocale,
} from "./navigation.config";

type DesktopNavigationProps = {
  locale: SupportedLocale;
};

export function DesktopNavigation({
  locale,
}: DesktopNavigationProps) {
  return (
    <nav aria-label="Primary navigation">
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--melkism-space-5)",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {navigationItems.map((item) => (
          <li key={item.key}>
            <Link
              href={`/${locale}${item.href}`}
              style={{
                color: "var(--melkism-color-foreground)",
                fontSize: "var(--melkism-font-size-sm)",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              {item.labels[locale]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
