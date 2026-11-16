import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['fa', 'en', 'ru', 'fr', 'zh', 'de', 'es', 'it', 'ar', 'tr'];

export default getRequestConfig(async ({ requestLocale }) => {
  // منتظر ماندن برای دریافت زبان درخواست‌شده طبق استاندارد جدید next-intl
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    locale = 'fa'; // زبان پیش‌فرض در صورت عدم وجود
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});