"use client";

import { useState } from "react";
import Link from "next/link";

import {
  navigationItems,
  type SupportedLocale,
} from "./navigation.config";

type MobileNavigationProps = {
  locale: SupportedLocale;
};

export function MobileNavigation({
  locale,
}: MobileNavigationProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        style={{
          minWidth: "40px",
          minHeight: "40px",
          border: "1px solid var(--melkism-color-border)",
          borderRadius: "var(--melkism-radius-md)",
          background: "var(--melkism-color-background)",
          cursor: "pointer",
        }}
      >
        {open ? "×" : "☰"}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Mobile navigation"
          style={{
            position: "absolute",
            insetInline: 0,
            top: "72px",
            background: "var(--melkism-color-background)",
            borderBottom:
              "1px solid var(--melkism-color-border)",
            boxShadow: "var(--melkism-shadow-lg)",
            padding: "var(--melkism-space-6)",
          }}
        >
          <nav aria-label="Mobile navigation">
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gap: "var(--melkism-space-2)",
              }}
            >
              {navigationItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      padding:
                        "var(--melkism-space-3) var(--melkism-space-2)",
                      fontWeight: 600,
                    }}
                  >
                    {item.labels[locale]}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: "var(--melkism-space-6)",
                paddingTop: "var(--melkism-space-6)",
                borderTop:
                  "1px solid var(--melkism-color-border)",
                display: "grid",
                gap: "var(--melkism-space-3)",
              }}
            >
              <Link href={`/${locale}/search`}>
                Search
              </Link>

              <Link href={`/${locale}/about`}>
                About MELKISM
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
