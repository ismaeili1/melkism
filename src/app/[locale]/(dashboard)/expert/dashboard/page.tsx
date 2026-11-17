"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function ExpertDashboardPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6`} dir={dir}>
      
      {/* هدر پنل کارشناس */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full inline-block mb-1">
            سطح دسترسی: مشاور و کارشناس تخصصی (EXPERT)
          </span>
          <h1 className="text-2xl font-black text-slate-950">پنل ارزیابی فنی و کارشناسی املاک</h1>
          <p className="text-xs text-slate-500 mt-1">بررسی نقشه‌های معماری، ارزیابی قیمت املاک و ثبت تأییدیه‌های تخصصی.</p>
        </div>
        <Link href={`/${locale}/user/dashboard`} className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap">
          {dir === 'rtl' ? '← نمای کاربری عمومی' : 'General User View →'}
        </Link>
      </div>

      {/* ویجت‌های تخصصی کارشناس */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="text-2xl">📐</div>
            <h3 className="text-sm font-bold text-slate-900">ارزیابی فنی و کارشناسی</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              بررسی پرونده‌های ارجاعی و ثبت رای کارشناسی مهندسی معماری.
            </p>
          </div>
          <Link href={`/${locale}/expert/evaluations`} className="inline-block bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-[11px] font-bold px-4 py-2 rounded-xl transition w-fit">
            {dir === 'rtl' ? 'مدیریت ارزیابی‌ها ←' : 'Manage Evaluations →'}
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="text-2xl">📚</div>
            <h3 className="text-sm font-bold text-slate-900">کتابخانه و رفرنس‌های تخصصی</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              دسترسی به استانداردها، مقررات ملی ساختمان و کتب مرجع معماری.
            </p>
          </div>
          <Link href={`/${locale}/library`} className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold px-4 py-2 rounded-xl transition w-fit">
            {dir === 'rtl' ? 'مشاهده اسناد مرجع ←' : 'View Reference Docs →'}
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="text-2xl">📊</div>
            <h3 className="text-sm font-bold text-slate-900">گزارش‌های تحلیل بازار</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              مشاهده شاخص‌های قیمتی منطقه و تحلیل روندهای سرمایه‌گذاری ملکی.
            </p>
          </div>
          <Link href={`/${locale}/market-intelligence`} className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold px-4 py-2 rounded-xl transition w-fit">
            {dir === 'rtl' ? 'هوش بازار ملکیسم ←' : 'Melkism Market Intelligence →'}
          </Link>
        </div>

      </div>

    </div>
  );
}