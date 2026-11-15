'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, languageNames, Locale } from '@/i18n/config';
import { useState } from 'react';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: Locale) => {
    // جایگزینی زبان فعلی در مسیر URL با زبان جدید
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPathname = segments.join('/');
    
    setIsOpen(false);
    router.push(newPathname);
  };

  const currentLangInfo = languageNames[currentLocale] || languageNames.fa;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 text-xs font-bold px-3 py-2 rounded-xl shadow-sm transition"
      >
        <span>{currentLangInfo.flag}</span>
        <span>{currentLangInfo.native}</span>
        <span className="text-[10px] text-slate-400">▼</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden py-1">
          {locales.map((loc) => {
            const lang = languageNames[loc];
            const isSelected = loc === currentLocale;
            return (
              <button
                key={loc}
                onClick={() => handleLanguageChange(loc)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-medium text-right transition ${
                  isSelected ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span>{lang.flag}</span>
                  <span>{lang.native}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono uppercase">{loc}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}