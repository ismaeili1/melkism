'use client';

import { useTranslations } from 'next-intl';
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
        
        {/* هدر تماس */}
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
          {/* فرم ارسال پیام */}
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

          {/* اطلاعات تماس دفتر مرکزی */}
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