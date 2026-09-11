import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/navigation/SiteHeader";

import {
  isLocale,
  locales,
  localeDirection,
  type Locale,
} from "@/lib/i18n/config";

import {
  getDictionary,
} from "@/lib/i18n/translation.engine";

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{
      locale: string;
    }>;
  }
): Promise<Metadata> {
  const { locale } =
    await params;

  if (!isLocale(locale)) {
    return {
      title: "MELKISM",
    };
  }

  const dictionary =
    getDictionary(
      locale as Locale
    );

  return {
    title: {
      default:
        dictionary["site.name"],
      template:
        `%s | ${dictionary["site.name"]}`,
    },
    description:
      dictionary["site.description"],
    alternates: {
      languages: {
        fa: "/fa",
        en: "/en",
        ar: "/ar",
        tr: "/tr",
      },
    },
  };
}

export function generateStaticParams() {
  return locales.map(
    (locale) => ({
      locale,
    })
  );
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
  const { locale } =
    await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const typedLocale =
    locale as Locale;

  return (
    <div
      lang={typedLocale}
      dir={localeDirection[typedLocale]}
      data-locale={typedLocale}
    >
      <SiteHeader
        locale={typedLocale}
      />

      <main>
        {children}
      </main>
    </div>
  );
}
