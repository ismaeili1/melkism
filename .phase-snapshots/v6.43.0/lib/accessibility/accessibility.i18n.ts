/**
 * MELKISM v6.34.0
 * Accessibility wording contracts.
 */

export const accessibilityLabels = {
  fa: {
    skipToContent:
      "رفتن به محتوای اصلی",
    mainNavigation:
      "ناوبری اصلی",
    languageSelection:
      "انتخاب زبان",
    openMenu:
      "باز کردن منو",
    closeMenu:
      "بستن منو",
  },

  en: {
    skipToContent:
      "Skip to main content",
    mainNavigation:
      "Main navigation",
    languageSelection:
      "Language selection",
    openMenu:
      "Open menu",
    closeMenu:
      "Close menu",
  },

  ar: {
    skipToContent:
      "الانتقال إلى المحتوى الرئيسي",
    mainNavigation:
      "التنقل الرئيسي",
    languageSelection:
      "اختيار اللغة",
    openMenu:
      "فتح القائمة",
    closeMenu:
      "إغلاق القائمة",
  },

  tr: {
    skipToContent:
      "Ana içeriğe geç",
    mainNavigation:
      "Ana navigasyon",
    languageSelection:
      "Dil seçimi",
    openMenu:
      "Menüyü aç",
    closeMenu:
      "Menüyü kapat",
  },
} as const;

export type AccessibilityLocale =
  keyof typeof accessibilityLabels;
