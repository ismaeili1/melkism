import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// ۱. لیست دقیق ۱۰ زبان پشتیبانی‌شده در پلتفرم MELKISM
export const locales = ['fa', 'en', 'de', 'fr', 'es', 'it', 'tr', 'zh', 'ar', 'ru'] as const;
export type AppLocale = (typeof locales)[number];
export const defaultLocale: AppLocale = 'fa';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = requested && locales.includes(requested as AppLocale) ? (requested as AppLocale) : undefined;

  // تایید اینکه زبان درخواست شده جزو لیست مجاز هست یا خیر
  if (!locale) {
    notFound();
  }

  return {
    locale,

    // بارگذاری پویای فایل‌های JSON ترجمه از ریشه پروژه (Root)
    messages: (await import(`../../messages/${locale}.json`)).default,

    // ۲. تنظیم منطقه زمانی (Timezone) پیش‌فرض برای هماهنگی تاریخ‌ها و زمان‌ها
    timeZone: 'Asia/Tehran',

    // ۳. تنظیمات پایه برای فرمت‌دهی (پیش‌فرض‌ها جهت استفاده در useFormatter)
    now: new Date(),
  };
});