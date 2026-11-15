export const locales = ['fa', 'ar', 'en', 'de', 'fr', 'es', 'tr', 'ru', 'zh', 'it'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fa';

export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return ['fa', 'ar'].includes(locale) ? 'rtl' : 'ltr';
}

export const languageNames: Record<Locale, { name: string; native: string; flag: string }> = {
  fa: { name: 'Persian', native: 'فارسی', flag: '🇮🇷' },
  ar: { name: 'Arabic', native: 'العربية', flag: '🇸🇦' },
  en: { name: 'English', native: 'English', flag: '🇺🇸' },
  de: { name: 'German', native: 'Deutsch', flag: '🇩🇪' },
  fr: { name: 'French', native: 'Français', flag: '🇫🇷' },
  es: { name: 'Spanish', native: 'Español', flag: '🇪🇸' },
  tr: { name: 'Turkish', native: 'Türkçe', flag: '🇹🇷' },
  ru: { name: 'Russian', native: 'Русский', flag: '🇷🇺' },
  zh: { name: 'Chinese', native: '中文', flag: '🇨🇳' },
  it: { name: 'Italian', native: 'Italiano', flag: '🇮🇹' },
};