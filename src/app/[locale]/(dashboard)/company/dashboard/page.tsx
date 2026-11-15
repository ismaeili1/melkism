"use client";

import Link from "next/link";

export default function CompanyDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full inline-block mb-1">
            سطح دسترسی: شرکت سازنده کلان (COMPANY)
          </span>
          <h1 className="text-2xl font-black text-slate-950">پنل مدیریت پروژه‌های ساختمانی و پیش‌فروش</h1>
          <p className="text-xs text-slate-500 mt-1">مدیریت پیشرفت فیزیکی پروژه‌ها، انتشار واحدهای پیش‌فروش و تسویه حساب امانی (Escrow).</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">🏗️</div>
          <h3 className="text-sm font-bold text-slate-900">پروژه‌های ساختمانی</h3>
          <p className="text-xs text-slate-500 leading-relaxed">ثبت و به‌روزرسانی درصد پیشرفت پروژه‌های کلان ساختمانی.</p>
          <Link href="/fa/company/projects" className="inline-block bg-violet-50 text-violet-700 text-[11px] font-bold px-4 py-2 rounded-xl">مدیریت پروژه‌ها ←</Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">⚖️</div>
          <h3 className="text-sm font-bold text-slate-900">حساب‌های امانی (Milestone Escrow)</h3>
          <p className="text-xs text-slate-500 leading-relaxed">درخواست آزادسازی مرحله‌ای وجوه پیش‌فروش بر اساس پیشرفت پروژه.</p>
          <Link href="/fa/company/escrow" className="inline-block bg-violet-50 text-violet-700 text-[11px] font-bold px-4 py-2 rounded-xl">مدیریت اسکرو ←</Link>
        </div>
      </div>

    </div>
  );
}