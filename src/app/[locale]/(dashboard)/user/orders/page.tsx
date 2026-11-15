"use client";

import { useState } from "react";
import Link from "next/link";

export default function UserOrdersPage() {
  const [activeTab, setActiveTab] = useState("ALL");

  const [orders, setOrders] = useState([
    {
      id: "ORD-501",
      title: "پیش‌فروش برج‌های مسکونی آلتون (پروژه ساختمانی)",
      type: "پروژه ساختمانی",
      category: "ویژه",
      date: "۱۴۰۵/۰۷/۱۶",
      amount: "۱۲,۰۰۰,۰۰۰ تومان",
      status: "جاری (فعال در صفحه اول)",
      actionType: "تمدید / ویرایش"
    },
    {
      id: "ORD-502",
      title: "آگهی فروش آپارتمان ۱۲۰ متری نیاوران",
      type: "آگهی عادی",
      category: "عادی",
      date: "۱۴۰۵/۰۶/۱۰",
      amount: "رایگان / پایه",
      status: "تکمیل‌شده (منقضی)",
      actionType: "بازنشر آگهی"
    },
    {
      id: "ORD-503",
      title: "رزرو جایگاه بنر و رپرتاژ اختصاصی بازار مسکن",
      type: "رپرتاژ آگهی",
      category: "رزرو شده",
      date: "۱۴۰۵/۰۷/۰۱",
      amount: "۸,۰۰۰,۰۰۰ تومان",
      status: "در انتظار انتشار",
      actionType: "لغو و عودت وجه"
    }
  ]);

  const filteredOrders = orders.filter(o => {
    if (activeTab === "ALL") return true;
    if (activeTab === "SPECIAL") return o.category === "ویژه" || o.category === "رزرو شده";
    if (activeTab === "NORMAL") return o.category === "عادی";
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            پنل مدیریت آگهی‌ها و سفارش‌ها
          </span>
          <h1 className="text-2xl font-black text-slate-900">ثبت و پیگیری آگهی‌های عادی، ویژه و پروژه‌های ساختمانی</h1>
          <p className="text-xs text-slate-500 mt-1">مشاهده وضعیت مالی سفارش‌ها، آگهی‌های فعال و پروژه‌های در حال اجرا.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/fa/user/financial" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm">
            💳 کیف پول و گزارش مالی
          </Link>
          <Link href="/fa/user/dashboard" className="bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl">
            ← بازگشت به داشبورد
          </Link>
        </div>
      </div>

      {/* تب‌های تفکیک سفارش‌ها */}
      <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex gap-2 text-xs">
        {[
          { key: "ALL", label: "همه سفارش‌ها و آگهی‌ها" },
          { key: "SPECIAL", label: "آگهی‌های ویژه و پروژه‌ها" },
          { key: "NORMAL", label: "آگهی‌های عادی" },
        ].map(tab => (
          <button 
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2.5 rounded-xl font-bold transition ${activeTab === tab.key ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* جدول سفارش‌ها */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold text-slate-900">📦 لیست سفارش‌های ثبت‌شده ({filteredOrders.length} مورد)</h3>
          <button onClick={() => alert("فرم ثبت آگهی جدید یا پروژه ساختمانی")} className="bg-indigo-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl">
            + ثبت آگهی یا پروژه جدید
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-medium">
                <th className="pb-3">عنوان سفارش / پروژه</th>
                <th className="pb-3">نوع و دسته</th>
                <th className="pb-3">مبلغ پرداختی</th>
                <th className="pb-3">تاریخ ثبت</th>
                <th className="pb-3">وضعیت سفارش</th>
                <th className="pb-3 text-center">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOrders.map(order => (
                <tr key={order.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-4 font-bold text-slate-900">{order.title}</td>
                  <td className="py-4">
                    <span className="bg-indigo-50 text-indigo-700 font-bold px-2.5 py-1 rounded-lg text-[10px]">
                      {order.type}
                    </span>
                  </td>
                  <td className="py-4 font-bold text-slate-900">{order.amount}</td>
                  <td className="py-4 text-slate-500 font-mono text-[11px]">{order.date}</td>
                  <td className="py-4">
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg text-[10px]">
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 text-center">
                    <button onClick={() => alert(`مدیریت سفارش: ${order.title}`)} className="text-indigo-600 font-bold hover:underline">
                      {order.actionType}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}