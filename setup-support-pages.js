const fs = require('fs');
const path = require('path');

const ABOUT_PAGE_CONTENT = `
'use client';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  const params = useParams();
  const locale = (params?.locale as string) || 'fa';
  const dir = ['fa', 'ar'].includes(locale) ? 'rtl' : 'ltr';

  return (
    <div className={\`min-h-screen bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8 \${dir === 'rtl' ? 'dir-rtl' : 'dir-ltr'} font-sans\`} dir={dir}>
      <div className="max-w-5xl mx-auto space-y-12">
        <div className={\`border-b border-slate-100 pb-8 space-y-3 \${dir === 'rtl' ? 'text-right' : 'text-left'}\`}>
          <span className="text-[11px] font-bold tracking-wide uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block">
            {t('badge')}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {t('title')}
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="text-blue-600 text-lg">🎯</span>
              <span>{t('missionTitle')}</span>
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t('missionText')}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="text-blue-600 text-lg">🚀</span>
              <span>{t('visionTitle')}</span>
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t('visionText')}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className={\`text-lg font-black text-slate-900 \${dir === 'rtl' ? 'border-r-3 pr-3' : 'border-l-3 pl-3'} border-blue-600\`}>
            {t('ecosystemTitle')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-blue-300 transition">
              <div className="text-rose-600 font-bold text-xs">{t('item1Title')}</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{t('item1Desc')}</p>
            </div>
            <div className="p-4 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-blue-300 transition">
              <div className="text-blue-700 font-bold text-xs">{t('item2Title')}</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{t('item2Desc')}</p>
            </div>
            <div className="p-4 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-blue-300 transition">
              <div className="text-emerald-700 font-bold text-xs">{t('item3Title')}</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{t('item3Desc')}</p>
            </div>
            <div className="p-4 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-blue-300 transition">
              <div className="text-indigo-700 font-bold text-xs">{t('item4Title')}</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{t('item4Desc')}</p>
            </div>
            <div className="p-4 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-blue-300 transition">
              <div className="text-amber-700 font-bold text-xs">{t('item5Title')}</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{t('item5Desc')}</p>
            </div>
            <div className="p-4 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-blue-300 transition">
              <div className="text-sky-700 font-bold text-xs">{t('item6Title')}</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{t('item6Desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

const CONTACT_PAGE_CONTENT = `
'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useState } from 'react';

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
    <div className={\`min-h-screen bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8 \${dir === 'rtl' ? 'dir-rtl' : 'dir-ltr'} font-sans\`} dir={dir}>
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="border-b border-slate-100 pb-6 space-y-2">
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
                    <input type="tel" required placeholder={t('phonePlaceholder')} className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:outline-none focus:border-blue-600 font-mono text-right" dir="ltr" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">{t('subjectLabel')}</label>
                  <select className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 outline-none">
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

          <div className="lg:col-span-5 space-y-4 text-xs">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className={\`font-bold text-sm text-slate-900 \${dir === 'rtl' ? 'border-r-3 pr-2.5' : 'border-l-3 pl-2.5'} border-blue-600\`}>
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
                    <span className={\`font-bold text-slate-800 inline-block \${dir === 'rtl' ? 'ml-1' : 'mr-1'}\`}>{t('phoneSupportLabel')}</span>
                    <span className="font-mono text-slate-900 dir-ltr inline-block">۰۲۱-۸۸۹۹۰۰۰۰</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-slate-400">✉️</span>
                  <div>
                    <span className={\`font-bold text-slate-800 inline-block \${dir === 'rtl' ? 'ml-1' : 'mr-1'}\`}>{t('emailLabel')}</span>
                    <span className="font-mono text-slate-900" dir="ltr">support@melkism.ir</span>
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
`;

const FAQ_PAGE_CONTENT = `
'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function FAQPage() {
  const t = useTranslations('FAQPage');
  const params = useParams();
  const locale = (params?.locale as string) || 'fa';
  const dir = ['fa', 'ar'].includes(locale) ? 'rtl' : 'ltr';

  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const faqList = [
    {
      category: t('cat1Name'),
      questions: [
        { q: t('cat1_q1'), a: t('cat1_a1') },
        { q: t('cat1_q2'), a: t('cat1_a2') },
      ]
    },
    {
      category: t('cat2Name'),
      questions: [
        { q: t('cat2_q1'), a: t('cat2_a1') },
        { q: t('cat2_q2'), a: t('cat2_a2') },
      ]
    },
    {
      category: t('cat3Name'),
      questions: [
        { q: t('cat3_q1'), a: t('cat3_a1') },
        { q: t('cat3_q2'), a: t('cat3_a2') },
      ]
    }
  ];

  return (
    <div className={\`min-h-screen bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8 \${dir === 'rtl' ? 'dir-rtl' : 'dir-ltr'} font-sans\`} dir={dir}>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className={\`border-b border-slate-100 pb-6 space-y-2 \${dir === 'rtl' ? 'text-right' : 'text-left'}\`}>
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

        <div className="space-y-8">
          {faqList.map((group, gIdx) => (
            <div key={gIdx} className="space-y-3">
              <h2 className="text-xs font-bold text-blue-700 bg-blue-50/60 border border-blue-100 px-3 py-1.5 rounded-lg inline-block">
                {group.category}
              </h2>

              <div className="space-y-2">
                {group.questions.map((item, qIdx) => {
                  const itemId = \`\${gIdx}-\${qIdx}\`;
                  const isOpen = openIndex === itemId;

                  return (
                    <div key={qIdx} className="bg-white border border-slate-200/80 rounded-xl overflow-hidden transition">
                      <button
                        onClick={() => toggle(itemId)}
                        className={\`w-full \${dir === 'rtl' ? 'text-right' : 'text-left'} p-4 text-xs font-bold text-slate-900 hover:bg-slate-50 transition flex items-center justify-between gap-2\`}
                      >
                        <span>{item.q}</span>
                        <span className="text-slate-400 text-sm font-normal">{isOpen ? '−' : '+'}</span>
                      </button>

                      {isOpen && (
                        <div className={\`p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 \${dir === 'rtl' ? 'text-right' : 'text-left'}\`}>
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`;

const pages = [
  { dir: 'about', file: 'page.tsx', content: ABOUT_PAGE_CONTENT },
  { dir: 'contact', file: 'page.tsx', content: CONTACT_PAGE_CONTENT },
  { dir: 'faq', file: 'page.tsx', content: FAQ_PAGE_CONTENT },
];

const basePath = path.join(__dirname, 'src', 'app', '[locale]', '(public)');

pages.forEach(({ dir, file, content }) => {
  const targetDir = path.join(basePath, dir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, file), content.trim(), 'utf8');
  console.log(`✅ صفحه ${dir} با پشتیبانی پویا از زبان‌ها در مسیر src/app/[locale]/(public)/${dir}/page.tsx به‌روزرسانی شد.`);
});