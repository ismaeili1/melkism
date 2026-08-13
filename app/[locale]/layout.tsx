import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  isLocale,
  locales,
  localeDirection,
  type Locale,
} from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: {
    default: "MELKISM",
    template: "%s | MELKISM",
  },
  description:
    "MELKISM — Media, Knowledge and Intelligence for Real Estate and the Built Environment.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;

  return (
    <html
      lang={typedLocale}
      dir={localeDirection[typedLocale]}
    >
      <body>{children}</body>
    </html>
  );
}
