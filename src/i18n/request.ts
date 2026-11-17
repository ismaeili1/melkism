import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// ۱. لیست دقیق ۱۰ زبان پشتیبانی‌شده در پلتفرم MELKISM
export const locales = ['fa', 'en', 'de', 'fr', 'es', 'it', 'tr', 'zh', 'ar', 'ru'] as const;
export const defaultLocale = 'fa';

export default getRequestConfig(async ({ locale }) => {
  // تایید اینکه زبان درخواست شده جزو لیست مجاز هست یا خیر
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return {
    // بارگذاری پویای فایل‌های JSON ترجمه از ریشه پروژه (Root)
    messages: (await import(`../../messages/${locale}.json`)).default,
    
    // ۲. تنظیم منطقه زمانی (Timezone) پیش‌فرض برای هماهنگی تاریخ‌ها و زمان‌ها
    timeZone: 'Asia/Tehran',
    
    // ۳. تنظیمات پایه برای فرمت‌دهی (پیش‌فرض‌ها جهت استفاده در useFormatter)
    now: new Date()
  };
});