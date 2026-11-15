"use client";

import Link from "next/link";

export default function AgencyDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            سطح دسترسی: دفتر املاک مرکزی (AGENCY)
          </span>
          <h1 className="text-2xl font-black text-slate-950">پنل مدیریت آژانس و مشاوران زیرمجموعه</h1>
          <p className="text-xs text-slate-500 mt-1">مدیریت آگهی‌های دفتر، تخصیص پرونده‌ها به مشاوران و حسابداری کمیسیون‌ها.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">👥</div>
          <h3 className="text-sm font-bold text-slate-900">مدیریت مشاوران دفتر</h3>
          <p className="text-xs text-slate-500 leading-relaxed">افزودن، غیرفعال‌سازی و نظارت بر عملکرد مشاوران آژانس.</p>
          <Link href="/fa/agency/agents" className="inline-block bg-indigo-50 text-indigo-700 text-[11px] font-bold px-4 py-2 rounded-xl">مدیریت تیم مشاوران ←</Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">🏡</div>
          <h3 className="text-sm font-bold text-slate-900">آگهی‌های املاک دفتر</h3>
          <p className="text-xs text-slate-500 leading-relaxed">ثبت و مدیریت فایل‌های کلان ملکی آژانس.</p>
          <Link href="/fa/user/properties" className="inline-block bg-indigo-50 text-indigo-700 text-[11px] font-bold px-4 py-2 rounded-xl">مدیریت آگهی‌ها ←</Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">💰</div>
          <h3 className="text-sm font-bold text-slate-900">مالی و کمیسیون همکار (Co-Brokerage)</h3>
          <p className="text-xs text-slate-500 leading-relaxed">تسهیم درآمدهای معاملاتی و گزارش‌های حسابداری.</p>
          <Link href="/fa/agency/financial" className="inline-block bg-indigo-50 text-indigo-700 text-[11px] font-bold px-4 py-2 rounded-xl">گزارش‌های مالی ←</Link>
        </div>
      </div>

    </div>
  );
}