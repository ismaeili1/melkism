'use client';

import { useTranslations } from 'next-intl';
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
        
        {/* هدر سوالات */}
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

        {/* لیست سوالات آکاردئونی */}
        <div className="space-y-8">
          {faqList.map((group, gIdx) => (
            <div key={gIdx} className="space-y-3">
              <h2 className="text-xs font-bold text-blue-700 bg-blue-50/60 border border-blue-100 px-3 py-1.5 rounded-lg inline-block">
                {group.category}
              </h2>

              <div className="space-y-2">
                {group.questions.map((item, qIdx) => {
                  const itemId = `${gIdx}-${qIdx}`;
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