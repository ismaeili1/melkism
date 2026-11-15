"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SuperAdminMasterDashboard() {
  const [stats, setStats] = useState({
    usersCount: 0,
    propertiesCount: 0,
    pendingTransactions: 0,
    transactionsTotal: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAdminData() {
      try {
        const res = await fetch("/api/admin/stats");
        const json = await res.json();
        if (res.ok && json.success) {
          setStats(json.data);
        }
      } catch (err) {
        console.error("خطا در دریافت آمار ادمین:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAdminData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 text-xs font-medium">
        در حال بارگذاری پنل فرماندهی کلان ملکیسم...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      {/* هدر اصلی */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full inline-block mb-1">
            سطح دسترسی: مدیریت ارشد کلان (SUPER_ADMIN) - کنترل مرکزی پلتفرم
          </span>
          <h1 className="text-2xl font-black text-slate-900">داشبورد فرماندهی و مدیریت هسته ملکیسم</h1>
          <p className="text-xs text-slate-500 mt-1">مدیریت متمرکز کاربران، بخش‌های محتوایی، پایش مالی اتمیک و امنیت سیستم.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/fa/admin/security/permissions" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm">
            🔐 مدیریت پویای اختیارات (RBAC)
          </Link>
          <Link href="/fa/admin/security" className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm">
            🛡️ مانیتورینگ امنیت
          </Link>
          <Link href="/fa/admin/financial" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm">
            💰 مدیریت مالی و تراکنش‌ها
          </Link>
        </div>
        <div className="bg-indigo-900 text-white rounded-2xl p-5 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-indigo-800">
  <div>
    <span className="text-[10px] font-bold bg-indigo-800 text-indigo-200 px-2.5 py-1 rounded-md">میان‌بر مدیریت محتوا</span>
    <h3 className="text-base font-bold mt-1">دانلود فایل‌های خام اکسل و آپلود دسته‌ای داده‌ها</h3>
    <p className="text-xs text-indigo-200 mt-0.5">ورود و به‌روزرسانی ۱۰۰+ خبر، گزارش بازار، قانون یا ملک به صورت یکباره.</p>
  </div>
  <Link
    href="/fa/admin/import"
    className="bg-white hover:bg-indigo-50 text-indigo-900 text-xs font-black px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap"
  >
    📥 ورود به مرکز اکسل
  </Link>
</div>
      </div>


      {/* آمار کلان پلتفرم (KPIs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2">
          <span className="text-xs text-slate-400 font-medium">کل کاربران سامانه</span>
          <h3 className="text-2xl font-black text-slate-900">{stats.usersCount.toLocaleString('fa-IR')} نفر</h3>
          <span className="text-[10px] text-emerald-600 font-bold">● اتصال زنده به PostgreSQL</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2">
          <span className="text-xs text-slate-400 font-medium">محتوا و مقالات فعال</span>
          <h3 className="text-2xl font-black text-slate-900">{stats.propertiesCount.toLocaleString('fa-IR')} مورد</h3>
          <span className="text-[10px] text-blue-600 font-bold">بخش اخبار و کتابخانه</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2">
          <span className="text-xs text-slate-400 font-medium">گردش مالی موفق (تومان)</span>
          <h3 className="text-2xl font-black text-slate-900">{stats.transactionsTotal.toLocaleString('fa-IR')}</h3>
          <span className="text-[10px] text-emerald-600 font-bold">تراکنش‌های اتمیک تاییدشده</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2">
          <span className="text-xs text-slate-400 font-medium">تراکنش‌ها/درخواست‌های معلق</span>
          <h3 className="text-2xl font-black text-rose-600">
            {(stats.pendingTransactions || 0).toLocaleString('fa-IR')} مورد
          </h3>
          <span className="text-[10px] text-rose-500 font-bold">نیازمند بازبینی مالی</span>
        </div>
      </div>

      {/* بخش اول: مدیریت سطوح کاربران با لینک‌های اختصاصی */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold text-slate-900">👥 مدیریت و نظارت اختصاصی بر سطوح ۶ گانه کاربران</h3>
          <Link href="/fa/admin/users" className="text-xs text-indigo-600 font-bold hover:underline">مشاهده لیست کامل کل کاربران →</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          <Link href="/fa/admin/users?role=MANAGER" className="bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 p-3 rounded-xl text-center space-y-1 transition block">
            <span className="block font-bold text-slate-900">MANAGER</span>
            <span className="text-[10px] text-slate-500 block">مدیر محتوا و هوش مصنوعی</span>
          </Link>
          <Link href="/fa/admin/users?role=COMPANY" className="bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 p-3 rounded-xl text-center space-y-1 transition block">
            <span className="block font-bold text-slate-900">COMPANY</span>
            <span className="text-[10px] text-slate-500 block">شرکت‌های ساختمانی</span>
          </Link>
          <Link href="/fa/admin/users?role=AGENCY" className="bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 p-3 rounded-xl text-center space-y-1 transition block">
            <span className="block font-bold text-slate-900">AGENCY</span>
            <span className="text-[10px] text-slate-500 block">آژانس‌های املاک</span>
          </Link>
          <Link href="/fa/admin/users?role=EXPERT" className="bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 p-3 rounded-xl text-center space-y-1 transition block">
            <span className="block font-bold text-slate-900">EXPERT</span>
            <span className="text-[10px] text-slate-500 block">مشاوران و کارشناسان</span>
          </Link>
          <Link href="/fa/admin/users?role=USER" className="bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 p-3 rounded-xl text-center space-y-1 transition block">
            <span className="block font-bold text-slate-900">USER</span>
            <span className="text-[10px] text-slate-500 block">کاربران عادی / متقاضی</span>
          </Link>
          <Link href="/fa/admin/users?role=GUEST" className="bg-rose-50 hover:bg-rose-100 border border-rose-200 p-3 rounded-xl text-center space-y-1 transition block">
            <span className="block font-bold text-rose-700">GUEST</span>
            <span className="text-[10px] text-rose-500 block">کاربران وارد نشده</span>
          </Link>
        </div>
      </div>

      {/* بخش دوم: مدیریت صفحات کلیدی پلتفرم و اختیارات */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900">🌐 کنترل و مدیریت محتوای صفحات عمومی و تخصصی</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            <Link href="/fa/admin/security/permissions" className="p-3 border border-indigo-200 bg-indigo-50/50 rounded-xl hover:border-indigo-600 transition space-y-1 block">
              <span className="font-bold text-indigo-950 block">🔐 ماتریس اختیارات</span>
              <span className="text-indigo-600 text-[10px] block">مدیریت مجوزها و دسترسی‌ها</span>
            </Link>
            <Link href="/fa/admin/news" className="p-3 border border-slate-200 rounded-xl hover:border-indigo-600 transition space-y-1 block">
              <span className="font-bold text-slate-900 block">📰 اخبار و گزارش‌ها</span>
              <span className="text-slate-400 text-[10px] block">انتشار و نظارت بر اخبار مسکن</span>
            </Link>
            <Link href="/fa/admin/library" className="p-3 border border-slate-200 rounded-xl hover:border-indigo-600 transition space-y-1 block">
              <span className="font-bold text-slate-900 block">📚 کتابخانه تخصصی</span>
              <span className="text-slate-400 text-[10px] block">مدیریت اسناد، مقالات و رفرنس‌ها</span>
            </Link>
            <Link href="/fa/admin/market-hub" className="p-3 border border-slate-200 rounded-xl hover:border-indigo-600 transition space-y-1 block">
              <span className="font-bold text-slate-900 block">📊 هوش بازار</span>
              <span className="text-slate-400 text-[10px] block">تنظیم داده‌های تحلیل و قیمت‌ها</span>
            </Link>
            <Link href="/fa/admin/rules" className="p-3 border border-slate-200 rounded-xl hover:border-indigo-600 transition space-y-1 block">
              <span className="font-bold text-slate-900 block">⚖️ قوانین و مقررات</span>
              <span className="text-slate-400 text-[10px] block">به‌روزرسانی قوانین ملکی و حقوقی</span>
            </Link>
            <Link href="/fa/admin/experts" className="p-3 border border-slate-200 rounded-xl hover:border-indigo-600 transition space-y-1 block">
              <span className="font-bold text-slate-900 block">👨‍⚖️ متخصص ملکیست</span>
              <span className="text-slate-400 text-[10px] block">تایید صلاحیت کارشناسان ویژه</span>
            </Link>
            <Link href="/fa/admin/marketplace" className="p-3 border border-slate-200 rounded-xl hover:border-indigo-600 transition space-y-1 block">
              <span className="font-bold text-slate-900 block">🛒 بازار MELKIST</span>
              <span className="text-slate-400 text-[10px] block">نظارت بر آگهی‌ها و محصولات ویژه</span>
            </Link>
          </div>
        </div>

        {/* بخش سوم: کنترل امنیت، گزارش‌گیری و تنظیمات سراسری */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900">🛡️ کنترل امنیت، گزارش‌ها و تنظیمات</h3>
          <div className="space-y-3 text-xs text-slate-600">
            <div className="p-3 bg-slate-50 rounded-xl space-y-1">
              <span className="font-bold text-slate-800 block">وضعیت لایه امنیتی (API Guard)</span>
              <span className="text-emerald-600 font-bold block">🟢 فعال و محافظت شده (Fail-Closed)</span>
            </div>
            <Link href="/fa/admin/reports" className="w-full block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-xl transition shadow-sm">
              📊 دریافت گزارش‌های جامع آماری
            </Link>
            <Link href="/fa/admin/settings" className="w-full block text-center bg-slate-800 hover:bg-slate-900 text-white font-bold py-2.5 rounded-xl transition shadow-sm">
              ⚙️ مدیریت هدر، فوتر، پشتیبانی و مجوزها
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}