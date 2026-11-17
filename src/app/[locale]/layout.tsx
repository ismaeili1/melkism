import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "@/app/globals.css";
import SiteHeader from "@/components/navigation/SiteHeader";
import SiteFooter from "@/components/navigation/SiteFooter";
import { getDirection, Locale, locales } from "@/i18n/config";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const vazirmatn = Vazirmatn({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "ملکیسم | رسانه و هوش بازار املاک",
  description: "پلتفرم جامع تحلیل بازار، قوانین ملکی و دانشنامه تخصصی ساختمان",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const direction = getDirection(locale as Locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body
        className={`${vazirmatn.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}