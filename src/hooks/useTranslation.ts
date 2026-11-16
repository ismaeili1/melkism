'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { dictionaries } from '@/i18n/dictionaries';

export function useTranslation() {
  const pathname = usePathname();
  const segments = pathname ? pathname.split('/') : [];
  const locale = dictionaries[segments[1]] ? segments[1] : 'fa';
  
  const t = dictionaries[locale] || dictionaries.fa;
  const dir = ['fa', 'ar'].includes(locale) ? 'rtl' : 'ltr';

  return { t, locale, dir };
}