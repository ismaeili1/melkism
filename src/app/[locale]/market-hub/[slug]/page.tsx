'use client';

import { useTranslations } from 'next-intl';
import Link from "next/link";

interface MarketHubDetailPageProps {
  params: { slug: string; locale: string };
}

export default function MarketHubDetailPage({ params }: MarketHubDetailPageProps) {
  const slug = params.slug;
  const locale = params.locale || "fa";

  // بانک اطلاعات نمونه گزارشات هاب بازار و هوش تحلیل املاک
  const marketDatabase: Record<string, any> = {
    "tehran-districts-roi-1405": {
      title: "گزارش جامع تحلیل بازدهی سرمایه‌گذاری (ROI) در مناطق ۲۲ گانه تهران",
      category: "هوش بازار و سرمایه‌گذاری",
      author: "تیم تحلیل داده‌های ملکیسم",
      date: "۱۴۰۵/۰۷/۱۵",
      version: "نسخه نهایی - پاییز ۱۴۰۵",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      summary: "بررسی شاخص‌های رشد قیمت، میزان نقدشوندگی و بازدهی اجاره در مناطق مختلف کلان‌شهر تهران.",
      content: "یافته‌های این گزارش نشان می‌دهد که در پاییز ۱۴۰۵، مناطق حاشیه‌ای با رشد تقاضای مصرفی و مناطق لوکس شمالی با ثبات نسبی قیمت همراه بوده‌اند. مدل‌های پیش‌بینی هوش مصنوعی ملکیسم روند صعودی ملایمی را برای املاک تجاری متراژ متوسط پیش‌بینی می‌کنند..."
    }
  };

  const report = marketDatabase[slug] || {
    title: `گزارش تخصصی هوش بازار: ${slug}`,
    category: "تحلیل و هوش املاک",
    author: "سیستم هوش مصنوعی و تحلیل داده ملکیسم",
    date: "امروز",
    version: "نسخه پویای سیستم",
    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    summary: "گزارش هوشمند استخراج‌شده از مخزن داده‌های تحلیلی پلتفرم ملکیسم.",
    content: "این گزارش به صورت زنده از پایگاه داده هاب بازار فراخوانی شده است. مشروح داده‌های آماری، نمودارهای مقایسه‌ای و تحلیل‌های مهندسی به زودی در این بخش بارگذاری خواهد شد."
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 dir-rtl font-sans space-y-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div>
          <Link href={`/${locale}/admin/market-hub`} className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100">
            ← بازگشت به مدیریت هاب بازار
          </Link>
        </div>

        <div className="space-y-3">
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full inline-block">
            {report.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            {report.title}
          </h1>
          <div className="text-xs text-slate-400 flex flex-wrap items-center gap-3 pt-1">
            <span>📊 تهیه‌کننده: <strong className="text-slate-700">{report.author}</strong></span>
            <span>•</span>
            <span>📅 تاریخ انتشار: <strong className="text-slate-700 font-mono">{report.date}</strong></span>
            <span>•</span>
            <span>🔖 نسخه: <strong className="text-indigo-600 font-mono">{report.version}</strong></span>
          </div>
        </div>

        {report.imageUrl && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 max-h-[400px]">
            <img src={report.imageUrl} alt={report.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 text-sm leading-relaxed text-slate-700">
          <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl font-medium text-slate-900">
            <strong>چکیده گزارش:</strong> {report.summary}
          </div>
          <h3 className="font-bold text-slate-900 text-base pt-2">مشروح تحلیل‌های بازار:</h3>
          <p>{report.content}</p>
          <div className="pt-4 flex items-center gap-3">
            <button onClick={() => alert("گزارش تحلیلی با موفقیت دانلود شد.")} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm transition">
              📥 دانلود نسخه کامل گزارش (PDF)
            </button>
            <button onClick={() => alert("لینک اشتراک‌گذاری کپی شد.")} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-3 rounded-xl transition">
              🔗 اشتراک‌گذاری گزارش
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}