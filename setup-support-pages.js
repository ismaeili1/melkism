const fs = require('fs');
const path = require('path');

const ABOUT_PAGE_CONTENT = `
'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8 dir-rtl font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="border-b border-slate-100 pb-8 space-y-3 text-right">
          <span className="text-[11px] font-bold tracking-wide uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block">
            • ABOUT MELKISM
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            رسانه و پلتفرم هوشمند صنعت املاک و ساخت‌وساز
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            ملکیسم مرجع جامع تحلیلی، حقوقی و تجاری صنعت مسکن است که با پیوند دادن تکنولوژی هوش مصنوعی، داده‌های مالی و دانش تخصصی معماری، شفافیت را به معاملات و تصمیم‌گیری‌های ملکی هدیه می‌دهد.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="text-blue-600 text-lg">🎯</span>
              <span>ماموریت ملکیسم</span>
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              ارتقای سطح دانش حقوقی و فنی فعالان بازار املاک، حذف واسطه‌گری‌های نادرست با ارزیابی شفاف داده‌محور، و ایجاد یک شبکه ارتباطی یکپارچه بین مالکان، سازندگان، معماران و مشاوران.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="text-blue-600 text-lg">🚀</span>
              <span>چشم‌انداز ۱۴۱۰</span>
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              تبدیل شدن به استاندارد مرجع داده‌های ملکی، هوش بازار و شبکه متخصصین صنعت ساخت‌وساز در ایران و منطقه، بر پایه شفافیت هوش مصنوعی و اصالت فنی.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-black text-slate-900 border-r-3 border-blue-600 pr-3">
            ارکان ۶ گانه اکوسیستم ملکیسم
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-blue-300 transition">
              <div className="text-rose-600 font-bold text-xs">📰 اخبار و رصد بازار</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">پایش لحظه‌ای تحولات مسکن، تورم ساخت و گزارش‌های ویژه اقتصادی.</p>
            </div>
            <div className="p-4 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-blue-300 transition">
              <div className="text-blue-700 font-bold text-xs">📚 گنجینه و دانشنامه</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">ارائه کتب تخصصی، استانداردهای ساختمانی و مقالات علمی مهندسی.</p>
            </div>
            <div className="p-4 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-blue-300 transition">
              <div className="text-emerald-700 font-bold text-xs">📊 سامانه هوش بازار</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">پیش‌بینی شاخص‌های قیمتی، بازدهی سرمایه‌گذاری و سنجش نقدشوندگی.</p>
            </div>
            <div className="p-4 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-blue-300 transition">
              <div className="text-indigo-700 font-bold text-xs">⚖️ مرجع حقوق و قوانین</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">تفسیر رویه‌های ثبتی، آیین‌نامه‌های شهرداری و مصوبات قانونی.</p>
            </div>
            <div className="p-4 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-blue-300 transition">
              <div className="text-amber-700 font-bold text-xs">👷‍♂️ بانک متخصصین</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">معرفی رزومه معماران، سازندگان، کارخانه‌ها و فعالان رسمی صنعت.</p>
            </div>
            <div className="p-4 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-blue-300 transition">
              <div className="text-sky-700 font-bold text-xs">💎 بازار معاملات MELKIST</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">بستر شفاف آگهی‌های خرید، فروش، رهن، اجاره و مشارکت در ساخت.</p>
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

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8 dir-rtl font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="border-b border-slate-100 pb-6 space-y-2">
          <span className="text-[11px] font-bold tracking-wide uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block">
            • SUPPORT & CONTACT
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            ارتباط با پشتیبانی و مرکز مشاوره ملکیسم
          </h1>
          <p className="text-xs text-slate-500">
            تیم کارشناسان و پشتیبانی ملکیسم آماده پاسخگویی به سوالات، گزارش‌ها و پیشنهادات شماست.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-bold text-slate-900">ارسال پیام مستقیم به کارشناسان</h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs space-y-1">
                <div className="font-bold">✓ پیام شما با موفقیت ثبت شد</div>
                <p>کارشناسان ما حداکثر ظرف ۲۴ ساعت کاری با شما تماس خواهند گرفت.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">نام و نام خانوادگی:</label>
                    <input type="text" required placeholder="مثلاً: مرتضی اسماعیلی" className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:outline-none focus:border-blue-600" />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">شماره تماس:</label>
                    <input type="tel" required placeholder="۰۹۱۲..." className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:outline-none focus:border-blue-600 font-mono text-right" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">موضوع درخواست:</label>
                  <select className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800">
                    <option>پشتیبانی فنی و اکانت</option>
                    <option>خرید اشتراک پنل متخصصین VIP</option>
                    <option>مشاوره امور حقوقی و ثبتی املاک</option>
                    <option>گزارش تخلف آگهی یا محتوا</option>
                    <option>همکاری تجاری و تبلیغات</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">متن پیام:</label>
                  <textarea rows={4} required placeholder="جزئیات پیام خود را بنویسید..." className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-slate-800 focus:outline-none focus:border-blue-600" />
                </div>

                <button type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition text-xs shadow-sm">
                  ارسال پیام به پشتیبانی
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-4 text-xs">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="font-bold text-sm text-slate-900 border-r-3 border-blue-600 pr-2.5">
                راه ارتباطی دفتر مرکزی
              </h3>

              <div className="space-y-3 text-slate-600">
                <div className="flex items-start gap-2.5">
                  <span className="text-slate-400">📍</span>
                  <div>
                    <span className="font-bold text-slate-800 block">نشانی:</span>
                    <span>تهران، سعادت‌آباد، خیابان فرهنگ، پلاک ۲۴، ساختمان ملکیسم</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-slate-400">📞</span>
                  <div>
                    <span className="font-bold text-slate-800 inline-block ml-1">تلفن مرکز پشتیبانی:</span>
                    <span className="font-mono text-slate-900 dir-ltr inline-block">۰۲۱-۸۸۹۹۰۰۰۰</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-slate-400">✉️</span>
                  <div>
                    <span className="font-bold text-slate-800 inline-block ml-1">پست الکترونیک:</span>
                    <span className="font-mono text-slate-900">support@melkism.ir</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-slate-400">🕒</span>
                  <div>
                    <span className="font-bold text-slate-800 block">ساعات کاری:</span>
                    <span>شنبه تا چهارشنبه: ۸:۳۰ الی ۱۷:۰۰ | پنجشنبه: ۸:۳۰ الی ۱۳:۰۰</span>
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

import { useState } from 'react';

const faqList = [
  {
    category: 'عمومی و حساب کاربری',
    questions: [
      { q: 'ملکیسم چیست و چه خدماتی ارائه می‌دهد؟', a: 'ملکیسم یک اکوسیستم هوشمند املاک شامل پایگاه اخبار تحلیلی، کتابخانه پژوهشی، مرجع قوانین ثبتی، هوش بازار، شبکه متخصصان ساختمان و بازار شفاف آگهی‌هاست.' },
      { q: 'آیا ثبت‌نام و استفاده از خدمات ملکیسم رایگان است؟', a: 'بله، استفاده از تمامی بخش‌های خبری، قوانین، بازار املاک و لیست عمومی متخصصان رایگان است. تنها ایجاد پروفایل‌های تخصصی VIP نیازمند خرید اشتراک است.' },
    ]
  },
  {
    category: 'متخصصان و پنل‌های اشتراک',
    questions: [
      { q: 'تفاوت لیست رایگان با پروفایل VIP متخصصان چیست؟', a: 'در لیست رایگان تنها نام، رسته شغلی و شماره تماس نمایش داده می‌شود. اما در پروفایل VIP امکان درج گالری نمونه‌کارها، آدرس، نشان تایید هویت، دریافت لایک و نظر کاربران فراهم است.' },
      { q: 'چگونه می‌توانم نشان تایید هویت (Verified Badge) دریافت کنم؟', a: 'پس از انتخاب پنل‌های طلایی یا سازمانی، احراز هویت مدارک نظام مهندسی، پروانه کسب یا ثبت شرکت توسط ادمین صورت گرفته و نشان مربوطه درج می‌شود.' },
    ]
  },
  {
    category: 'هوش مصنوعی و داده‌های بازار',
    questions: [
      { q: 'پیش‌بینی‌های هوش بازار بر چه اساسی انجام می‌شود؟', a: 'تحلیل‌های هوش مصنوعی ملکیسم بر اساس مدل‌های پردازش داده، تورم نقطه‌به‌نقطه ساخت، آمار رسمی معاملات ثبت‌شده و نرخ نقدشوندگی منطقه‌ای محاسبه می‌گردد.' },
      { q: 'آیا می‌توانم مقالات یا تحلیل‌های حقوقی سفارشی تولید کنم؟', a: 'بله، در پنل هوش مصنوعی صفحات اخبار، کتابخانه و قوانین می‌توانید با وارد کردن کلیدواژه دلخواه، تحلیل تولیدشده توسط AI را دریافت کنید.' },
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8 dir-rtl font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="border-b border-slate-100 pb-6 space-y-2 text-right">
          <span className="text-[11px] font-bold tracking-wide uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block">
            • FREQUENTLY ASKED QUESTIONS
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            سوالات متداول کاربران و پاسخ‌های شفاف
          </h1>
          <p className="text-xs text-slate-500">
            پاسخ به متداول‌ترین پرسش‌ها درباره خدمات، قوانین، هوش مصنوعی و اشتراک‌های ملکیسم.
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
                        className="w-full text-right p-4 text-xs font-bold text-slate-900 hover:bg-slate-50 transition flex items-center justify-between gap-2"
                      >
                        <span>{item.q}</span>
                        <span className="text-slate-400 text-sm font-normal">{isOpen ? '−' : '+'}</span>
                      </button>

                      {isOpen && (
                        <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
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
  console.log(`✅ صفحه ${dir} با موفقیت در مسیر src/app/[locale]/(public)/${dir}/page.tsx ایجاد شد.`);
});