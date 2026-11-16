'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8 dir-rtl font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* هدر صفحه */}
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

        {/* ماموریت و چشم‌انداز */}
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

        {/* ارکان اصلی ملکیسم */}
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