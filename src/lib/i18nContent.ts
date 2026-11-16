export type Locale = 'fa' | 'en' | 'ru' | 'fr' | 'zh' | 'de' | 'es' | 'it' | 'ar' | 'tr';

/**
 * استخراج خودکار ترجمه محتوای دیتابیس بر اساس زبان فعال صفحه
 */
export function getLocalizedContent<T extends Record<string, any>>(
  translations: Record<string, T>,
  locale: string,
  defaultLocale: string = 'fa'
): T {
  if (translations && translations[locale]) {
    return translations[locale];
  }
  // بازگشت به زبان پیش‌فرض در صورت عدم وجود ترجمه اختصاصی
  if (translations && translations[defaultLocale]) {
    return translations[defaultLocale];
  }
  // بازگشت به اولین زبان موجود به عنوان آخرین راهکار
  const firstAvailableKey = Object.keys(translations)[0];
  return translations[firstAvailableKey] || ({} as T);
}