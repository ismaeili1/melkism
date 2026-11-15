"use client";

import { useState } from "react";
import Link from "next/link";

export default function UserFinancialDashboardPage() {
  const [activeTab, setActiveTab] = useState("TRANSACTIONS");

  // اطلاعات نمونه مالی مختص کاربری که وارد شده است
  const wallet = {
    balance: "۴۸,۰۰۰,۰۰۰ تومان",
    activeCredit: "۱۰,۰۰۰,۰۰۰ تومان",
    totalSpent: "۴۵,۰۰۰,۰۰۰ تومان"
  };

  const records = [
    {
      id: "TX-8801",
      title: "آگهی ویژه (برج مسکونی لوکس الهیه)",
      category: "آگهی",
      amount: "۱۲,۰۰۰,۰۰۰ تومان",
      discount: "۱,۵۰۰,۰۰۰ تومان (جایزه وفاداری)",
      date: "۱۴۰۵/۰۷/۱۶",
      receiptNo: "RCP-992183",
      status: "تاییدشده",
      orderStatus: "جاری (فعال)"
    },
    {
      id: "TX-8750",
      title: "حق عضویت سالانه پلتفرم",
      category: "عضویت",
      amount: "۲۵,۰۰۰,۰۰۰ تومان",
      discount: "بدون تخفیف",
      date: "۱۴۰۵/۰۱/۱۵",
      receiptNo: "RCP-881204",
      status: "تاییدشده",
      orderStatus: "قبلی (تکمیل‌شده)"
    },
    {
      id: "TX-8690",
      title: "رزرو رپرتاژ آگهی تخصصی معماری",
      category: "رپرتاژ",
      amount: "۸,۰۰۰,۰۰۰ تومان",
      discount: "۸۰۰,۰۰۰ تومان (تخفیف فصلی)",
      date: "۱۴۰۵/۰۷/۱۰",
      receiptNo: "RCP-771920",
      status: "بازپرداخت/عودت وجه",
      orderStatus: "رزرو شده"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            پنل اختصاصی مالی و حسابداری کاربر
          </span>
          <h1 className="text-2xl font-black text-slate-900">کیف پول، پرداختی‌ها و سفارش‌ها</h1>
          <p className="text-xs text-slate-500 mt-1">مشاهده عناوین پرداختی (عضویت، ویژه، آگهی، رپرتاژ)، رسیدها، تخفیف‌ها و وضعیت سفارش‌ها.</p>
        </div>
        <Link href="/fa/user/dashboard" className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
          ← بازگشت به داشبورد کاربری
        </Link>
      </div>

      {/* کارت‌های خلاصه کیف پول */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1 bg-gradient-to-br from-emerald-50/50 to-white">
          <span className="text-xs text-emerald-700 font-bold block">💰 موجودی کیف پول:</span>
          <h3 className="text-2xl font-black text-emerald-900">{wallet.balance}</h3>
          <span className="text-[10px] text-slate-400 block">قابل برداشت یا پرداخت آنی</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
          <span className="text-xs text-slate-400 font-bold block">🎁 اعتبار هدیه و تخفیف‌ها:</span>
          <h3 className="text-2xl font-black text-slate-900">{wallet.activeCredit}</h3>
          <span className="text-[10px] text-slate-400 block">قابل اعمال روی سفارش‌های بعدی</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
          <span className="text-xs text-slate-400 font-bold block">📊 مجموع پرداخت‌های موفق:</span>
          <h3 className="text-2xl font-black text-slate-900">{wallet.totalSpent}</h3>
          <span className="text-[10px] text-slate-400 block">سوابق کلی سال جاری</span>
        </div>
      </div>

      {/* تب‌های مدیریت بخش‌ها */}
      <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex flex-wrap gap-2 text-xs">
        <button 
          onClick={() => setActiveTab("TRANSACTIONS")}
          className={`px-4 py-2.5 rounded-xl font-bold transition ${activeTab === 'TRANSACTIONS' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          📜 سوابق تراکنش‌ها و رسیدها
        </button>
        <button 
          onClick={() => setActiveTab("ORDERS")}
          className={`px-4 py-2.5 rounded-xl font-bold transition ${activeTab === 'ORDERS' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          📦 مدیریت سفارش‌ها (قبلی، جاری، رزرو)
        </button>
      </div>

      {/* محتوای تب فعال */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        
        {activeTab === "TRANSACTIONS" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900">💳 سوابق پرداخت (عضویت، ویژه، آگهی، رپرتاژ)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-medium">
                    <th className="pb-3">عنوان پرداختی / دسته</th>
                    <th className="pb-3">مبلغ پرداختی</th>
                    <th className="pb-3">تخفیف / جایزه اعمال‌شده</th>
                    <th className="pb-3">تاریخ و شماره رسید</th>
                    <th className="pb-3">وضعیت تأیید / عودت</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {records.map(r => (
                    <tr key={r.id} className="hover:bg-slate-50/80 transition">
                      <td className="py-4 font-bold text-slate-900">
                        {r.title}
                        <span className="block text-[10px] text-indigo-600 font-normal">دسته: {r.category}</span>
                      </td>
                      <td className="py-4 font-bold text-slate-900">{r.amount}</td>
                      <td className="py-4 text-emerald-600">{r.discount}</td>
                      <td className="py-4 text-slate-500 font-mono text-[11px]">
                        {r.date}
                        <span className="block text-[10px] text-slate-400">رسید: {r.receiptNo}</span>
                      </td>
                      <td className="py-4">
                        <span className={`font-bold px-2.5 py-1 rounded-lg text-[10px] ${r.status === 'تاییدشده' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "ORDERS" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900">📦 تفکیک سفارش‌های کاربر (قبلی، جاری، رزرو شده)</h3>
            <div className="divide-y divide-slate-100 text-xs">
              {records.map(r => (
                <div key={r.id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <span className="font-bold text-slate-900 block">{r.title}</span>
                    <span className="text-slate-400 text-[10px]">مبلغ: {r.amount} | تاریخ ثبت: {r.date} | شماره رسید: {r.receiptNo}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-xl font-bold text-[10px] ${r.orderStatus.includes('جاری') ? 'bg-indigo-50 text-indigo-600' : r.orderStatus.includes('رزرو') ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-600'}`}>
                    وضعیت سفارش: {r.orderStatus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}