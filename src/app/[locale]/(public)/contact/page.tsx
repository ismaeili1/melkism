'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const params = useParams();
  const locale = (params?.locale as string) || 'fa';
  const dir = ['fa', 'ar'].includes(locale) ? 'rtl' : 'ltr';

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`min-h-screen bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8 ${dir === 'rtl' ? 'dir-rtl' : 'dir-ltr'} font-sans`} dir={dir}>
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* هدر تماس */}
        <div className={`border-b border-slate-100 pb-6 space-y-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <span className="text-[11px] font-bold tracking-wide uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block">
            {t('badge')}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t('title')}
          </h1>
          <p className="text-xs text-slate-500">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* فرم ارسال پیام */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-bold text-slate-900">{t('formTitle')}</h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs space-y-1">
                <div className="font-bold">{t('successTitle')}</div>
                <p>{t('successDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">{t('nameLabel')}</label>
                    <input type="text" required placeholder={t('namePlaceholder')} className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:outline-none focus:border-blue-600" />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">{t('phoneLabel')}</label>
                    <input type="tel" required placeholder={t('phonePlaceholder')} className={`w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:outline-none focus:border-blue-600 font-mono ${dir === 'rtl' ? 'text-right' : 'text-left'}`} />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">{t('subjectLabel')}</label>
                  <select className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800">
                    <option>{t('opt1')}</option>
                    <option>{t('opt2')}</option>
                    <option>{t('opt3')}</option>
                    <option>{t('opt4')}</option>
                    <option>{t('opt5')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">{t('messageLabel')}</label>
                  <textarea rows={4} required placeholder={t('messagePlaceholder')} className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:outline-none focus:border-blue-600" />
                </div>

                <button type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition text-xs shadow-sm">
                  {t('submitButton')}
                </button>
              </form>
            )}
          </div>

          {/* اطلاعات تماس دفتر مرکزی */}
          <div className="lg:col-span-5 space-y-4 text-xs">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className={`font-bold text-sm text-slate-900 border-blue-600 ${dir === 'rtl' ? 'border-r-3 pr-2.5' : 'border-l-3 pl-2.5'}`}>
                {t('officeTitle')}
              </h3>

              <div className="space-y-3 text-slate-600">
                <div className="flex items-start gap-2.5">
                  <span className="text-slate-400">📍</span>
                  <div>
                    <span className="font-bold text-slate-800 block">{t('addressLabel')}</span>
                    <span>{t('addressText')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-slate-400">📞</span>
                  <div>
                    <span className={`font-bold text-slate-800 inline-block ${dir === 'rtl' ? 'ml-1' : 'mr-1'}`}>{t('phoneSupportLabel')}</span>
                    <span className="font-mono text-slate-900 dir-ltr inline-block">۰۲۱-۸۸۹۹۰۰۰۰</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-slate-400">✉️</span>
                  <div>
                    <span className={`font-bold text-slate-800 inline-block ${dir === 'rtl' ? 'ml-1' : 'mr-1'}`}>{t('emailLabel')}</span>
                    <span className="font-mono text-slate-900">support@melkism.ir</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-slate-400">🕒</span>
                  <div>
                    <span className="font-bold text-slate-800 block">{t('workingHoursLabel')}</span>
                    <span>{t('workingHoursText')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}