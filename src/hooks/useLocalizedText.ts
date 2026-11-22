'use client';

import { useFormatter, useTranslations } from 'next-intl';

export function useLocalizedText(namespace: string) {
  const t = useTranslations(namespace);
  const format = useFormatter();

  const num = (value: number | string) => {
    const parsed = typeof value === 'string' ? Number(value) : value;
    return Number.isFinite(parsed) ? format.number(parsed) : String(value);
  };

  const date = (
    value: string | Date,
    options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
  ) => {
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return String(value);
    return format.dateTime(d, options);
  };

  return { t, num, date };
}