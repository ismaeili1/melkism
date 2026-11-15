"use client";
import Link from "next/link";

export default function UserDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-1">
            پنل اختصاصی کاربر / سازنده / مشاور
          </span>
          <h1 className="text-2xl font-black text-slate-900">داشبورد مدیریت حساب کاربری</h1>
          <p className="text-xs text-slate-500 mt-1">مدیریت آگهی‌ها، پروژه‌ها، کیف پول و تراکنش‌های مالی.</p>
        </div>
        
        {/* دکمه برجسته دسترسی به صفحه مالی */}
        <Link 
          href="/fa/user/financial" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-3 rounded-xl transition shadow-sm flex items-center gap-2"
        >
          <span>💳 کیف پول و گزارش مالی من</span>
          <span className="bg-emerald-700 px-2 py-0.5 rounded text-[10px]">فعال</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2">
          <h3 className="font-bold text-slate-900">📦 مدیریت سفارش‌ها و آگهی‌ها</h3>
          <p className="text-xs text-slate-500">ثبت و پیگیری آگهی‌های عادی، ویژه و پروژه‌های ساختمانی.</p>
          <Link href="/fa/user/financial" className="text-xs text-indigo-600 font-bold block pt-2">مشاهده وضعیت مالی سفارش‌ها →</Link>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2">
          <h3 className="font-bold text-slate-900">💰 موجودی و رسیدهای پرداخت</h3>
          <p className="text-xs text-slate-500">بررسی تخفیف‌ها، جوایز، رسیدها و عودت وجه.</p>
          <Link href="/fa/user/financial" className="text-xs text-emerald-600 font-bold block pt-2">ورود به کیف پول →</Link>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2">
          <h3 className="font-bold text-slate-900">⚙️ تنظیمات پروفایل و مدارک</h3>
          <p className="text-xs text-slate-500">ویرایش مشخصات صنفی، پروانه کسب و اطلاعات بانکی.</p>
          <Link href="/fa/user/profile" className="text-xs text-slate-700 font-bold block pt-2">ویرایش اطلاعات →</Link>
        </div>
      </div>
    </div>
  );
}