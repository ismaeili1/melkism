"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function UserDashboardPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6`} dir={dir}>
      
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-1">
            سطح دسترسی: کاربر عادی و متقاضی (USER)
          </span>
          <h1 className="text-2xl font-black text-slate-950">داشبورد اختصاصی کاربر سامانه</h1>
          <p className="text-xs text-slate-500 mt-1">مدیریت آگهی‌های شخصی، درخواست‌های کارشناسی و پیگیری معاملات.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">🏠</div>
          <h3 className="text-sm font-bold text-slate-900">آگهی‌های من</h3>
          <p className="text-xs text-slate-500 leading-relaxed">ثبت ملک جدید، ویرایش یا حذف آگهی‌های ثبت‌شده.</p>
          <Link href={`/${locale}/user/properties`} className="inline-block bg-blue-50 text-blue-700 text-[11px] font-bold px-4 py-2 rounded-xl transition hover:bg-blue-100">
            مدیریت املاک من ←
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">💬</div>
          <h3 className="text-sm font-bold text-slate-900">پیام‌ها و نظرات</h3>
          <p className="text-xs text-slate-500 leading-relaxed">پیگیری کامنت‌ها، پرسش‌ها و پاسخ کارشناسان.</p>
          <Link href={`/${locale}/user/messages`} className="inline-block bg-blue-50 text-blue-700 text-[11px] font-bold px-4 py-2 rounded-xl transition hover:bg-blue-100">
            صندوق پیام‌ها ←
          </Link>
        </div>
      </div>

    </div>
  );
}