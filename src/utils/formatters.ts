// src/utils/formatters.ts

/**
 * فرمت‌کننده اعداد و مبالغ متناسب با زبان فعال (Locale)
 */
export function formatNumber(value: number | string, locale: string = 'fa'): string {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return String(value);

  // تعیین لوکال مناسب برای اعداد (برای زبان‌های فارسی/عربی از fa یا ar و برای بقیه از en استفاده می‌کنیم)
  const numberLocale = ['fa', 'ar'].includes(locale) ? 'fa-IR' : 'en-US';

  return new Intl.NumberFormat(numberLocale).format(num);
}

/**
 * فرمت‌کننده قیمت به همراه واحد پول
 */
export function formatCurrency(amount: number | string, locale: string = 'fa'): string {
  const formatted = formatNumber(amount, locale);
  const currencyLabel = locale === 'fa' ? 'تومان' : locale === 'ar' ? 'تومان' : 'Tomans';
  return `${formatted} ${currencyLabel}`;
}

/**
 * فرمت‌کننده تاریخ بر اساس زبان و تقویم محلی
 */
export function formatDate(dateInput: string | Date, locale: string = 'fa'): string {
  try {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    if (isNaN(date.getTime())) return String(dateInput);

    const calendarType = locale === 'fa' ? 'persian' : 'gregory';
    const lang = locale === 'fa' ? 'fa-IR' : 'en-US';

    return new Intl.DateTimeFormat(lang, {
      calendar: calendarType,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  } catch (err) {
    return String(dateInput);
  }
}