"use client";

import Link from "next/link";

export default function ManagerDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      {/* هدر پنل مدیریت محتوا */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-1">
            سطح دسترسی: مدیر سیستم و محتوا (MANAGER)
          </span>
          <h1 className="text-2xl font-black text-slate-900">
            پنل فرماندهی و مدیریت محتوا
          </h1>
          <p className="text-xs text-slate-500 mt-1">مدیریت، تولید، بررسی و تأیید اخبار، کتابخانه، هوش بازار، قوانین و نظارت بر کامنت‌ها.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/fa/admin/dashboard" className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            بازگشت به نمای ارشد
          </Link>
        </div>
      </div>

      {/* بخش ابزارهای مدیریت محتوا و تاییدیه ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* ۱. اخبار و مقالات */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">📰</div>
          <h3 className="text-sm font-bold text-slate-900">مدیریت و تأیید اخبار</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            تولید، ویرایش، و تأیید نهایی انتشار اخبار و گزارش‌های مسکن.
          </p>
          <div className="flex gap-2 pt-2">
            <Link href="/fa/admin/news" className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[11px] font-bold px-3 py-2 rounded-xl transition">
              مدیریت اخبار
            </Link>
            <Link href="/fa/admin/news/create" className="bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold px-3 py-2 rounded-xl transition">
              + تولید خبر جدید
            </Link>
          </div>
        </div>

        {/* ۲. کتابخانه تخصصی */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">📚</div>
          <h3 className="text-sm font-bold text-slate-900">اسناد و کتابخانه تخصصی</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            آپلود، تحلیل و تأیید اسناد، نقشه‌ها و رفرنس‌های مهندسی معماری.
          </p>
          <div className="flex gap-2 pt-2">
            <Link href="/fa/admin/library" className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[11px] font-bold px-3 py-2 rounded-xl transition">
              مدیریت اسناد
            </Link>
            <Link href="/fa/admin/library/create" className="bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold px-3 py-2 rounded-xl transition">
              + تولید سند جدید
            </Link>
          </div>
        </div>

        {/* ۳. هوش بازار */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">📊</div>
          <h3 className="text-sm font-bold text-slate-900">هوش بازار و تحلیل قیمت</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            تنظیم شاخص‌های قیمتی، نمودارهای تحلیل بازار و تایید گزارشات.
          </p>
          <div className="flex gap-2 pt-2">
            <Link href="/fa/admin/market-hub" className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[11px] font-bold px-3 py-2 rounded-xl transition">
              مدیریت گزارش‌ها
            </Link>
            <Link href="/fa/admin/market-hub/create" className="bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold px-3 py-2 rounded-xl transition">
              + تولید تحلیل بازار
            </Link>
          </div>
        </div>

        {/* ۴. قوانین و مقررات */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">⚖️</div>
          <h3 className="text-sm font-bold text-slate-900">قوانین و مقررات ملکی</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            استخراج، تحلیل حقوقی و تأیید بخشنامه‌ها و مقررات ساخت‌وساز.
          </p>
          <div className="flex gap-2 pt-2">
            <Link href="/fa/admin/rules" className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[11px] font-bold px-3 py-2 rounded-xl transition">
              مدیریت قوانین
            </Link>
            <Link href="/fa/admin/rules/create" className="bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold px-3 py-2 rounded-xl transition">
              + استخراج جدید
            </Link>
          </div>
        </div>

        {/* ۵. مدیریت کامنت‌ها و نظرات کاربران */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">💬</div>
          <h3 className="text-sm font-bold text-slate-900">مدیریت و نظارت بر کامنت‌ها</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            بررسی، تأیید، پاسخ‌دهی، محدودسازی یا حذف نظرات کاربران.
          </p>
          <div className="flex gap-2 pt-2">
            <Link href="/fa/admin/comments" className="bg-amber-50 hover:bg-amber-100 text-amber-800 text-[11px] font-bold px-3 py-2 rounded-xl transition w-full text-center block">
              مدیریت صندوق کامنت‌ها و نظرات ↗
            </Link>
          </div>
        </div>

        {/* ۶. تأیید آگهی‌ها و پروفایل‌ها */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="text-2xl">🏡</div>
          <h3 className="text-sm font-bold text-slate-900">تأیید آگهی‌ها و پروفایل‌ها</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            بررسی اولیه و تأیید مشخصات آگهی‌های ملکی و پروفایل دفاتر.
          </p>
          <div className="flex gap-2 pt-2">
            <Link href="/fa/admin/marketplace" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-2 rounded-xl transition w-full text-center block">
              بازبینی و تایید آگهی‌ها ↗
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}