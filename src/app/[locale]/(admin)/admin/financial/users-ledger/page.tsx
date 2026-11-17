"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function AdminUserFinancialLedgerPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  const [selectedUser, setSelectedUser] = useState("کاربر: شرکت انبوه‌سازی آلتون (COMPANY)");
  const [filterType, setFilterType] = useState("ALL");

  // داده‌های نمونه و واقعی مالی مطابق با سند درخواستی
  const [ledgerRecords, setLedgerRecords] = useState([
    {
      id: "TX-8801",
      title: "آگهی ویژه (برج مسکونی لوکس الهیه)",
      category: "آگهی",
      amount: "۱۲,۰۰۰,۰۰۰ تومان",
      discount: "۱,۵۰۰,۰۰۰ تومان (جایزه وفاداری)",
      date: "۱۴۰۵/۰۷/۱۶",
      receiptNo: "RCP-992183",
      status: "تاییدشده",
      walletBalance: "۴۸,۰۰۰,۰۰۰ تومان",
      orderStatus: "جاری (فعال در صفحه اول)"
    },
    {
      id: "TX-8750",
      title: "حق عضویت سالانه شرکت‌های ساختمانی",
      category: "عضویت",
      amount: "۲۵,۰۰۰,۰۰۰ تومان",
      discount: "بدون تخفیف",
      date: "۱۴۰۵/۰۱/۱۵",
      receiptNo: "RCP-881204",
      status: "تاییدشده",
      walletBalance: "۶۰,۰۰۰,۰۰۰ تومان",
      orderStatus: "قبلی (تکمیل‌شده)"
    },
    {
      id: "TX-8690",
      title: "رزرو رپرتاژ آگهی و رپورتاژ تخصصی معماری",
      category: "رپرتاژ",
      amount: "۸,۰۰۰,۰۰۰ تومان",
      discount: "۸۰۰,۰۰۰ تومان (تخفیف فصلی)",
      date: "۱۴۰۵/۰۷/۱۰",
      receiptNo: "RCP-771920",
      status: "بازپرداخت/عودت وجه",
      walletBalance: "۳۶,۰۰۰,۰۰۰ تومان",
      orderStatus: "رزرو شده (لغو شده توسط کاربر)"
    },
  ]);

  const handleUpdateStatus = (id: string, newStatus: string) => {
    setLedgerRecords(ledgerRecords.map(item => item.id === id ? { ...item, status: newStatus } : item));
    alert(`وضعیت مالی تراکنش ${id} به [${newStatus}] تغییر یافت.`);
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6`} dir={dir}>
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full inline-block mb-1">
            سامانه جامع حسابداری و گردش مالی کاربران (کیف پول و سفارش‌ها)
          </span>
          <h1 className="text-2xl font-black text-slate-900">گزارش مالی و کیف پول اختصاصی</h1>
          <p className="text-xs text-slate-500 mt-1">مشاهده پرداختی‌ها، رسیدها، تخفیف‌ها، عودت وجه و وضعیت سفارش‌های قبلی، جاری و رزرو شده.</p>
        </div>
        <Link href={`/${locale}/admin/users`} className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap">
          {dir === 'rtl' ? '← بازگشت به لیست کاربران' : 'Users List →'}
        </Link>
      </div>

      {/* نوار انتخاب کاربر و خلاصه کیف پول */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2 lg:col-span-2 flex flex-col justify-center">
          <span className="text-xs text-slate-400 font-medium">کاربر انتخاب‌شده جهت بررسی مالی:</span>
          <div className="flex items-center gap-3">
            <select 
              value={selectedUser} 
              onChange={e => setSelectedUser(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs bg-slate-50 font-bold text-slate-900 outline-none"
            >
              <option>کاربر: شرکت انبوه‌سازی آلتون (COMPANY)</option>
              <option>کاربر: آژانس املاک مدرن پاسداران (AGENCY)</option>
              <option>کاربر: مهندس آرش طاهری (EXPERT)</option>
              <option>کاربر: علی اکبری (USER)</option>
            </select>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1 bg-gradient-to-br from-emerald-50/50 to-white">
          <span className="text-xs text-emerald-700 font-bold block">💰 موجودی فعلی کیف پول کاربر:</span>
          <h3 className="text-2xl font-black text-emerald-900" dir="ltr">۴۸,۰۰۰,۰۰۰ تومان</h3>
          <span className="text-[10px] text-slate-400 block">قابل استفاده برای پرداخت آنی آگهی و سفارش‌ها</span>
        </div>
      </div>

      {/* جدول گردش مالی و جزئیات تراکنش‌ها */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h3 className="text-sm font-bold text-slate-900">
            📊 سوابق پرداختی و سفارش‌های کاربر
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {["ALL", "عضویت", "ویژه", "آگهی", "رپرتاژ"].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilterType(cat)}
                className={`px-3 py-1.5 rounded-xl font-bold transition ${filterType === cat ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat === "ALL" ? "همه دسته‌ها" : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className={`w-full ${dir === 'rtl' ? 'text-right' : 'text-left'} text-xs`}>
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-medium">
                <th className="pb-3">عنوان پرداختی / دسته</th>
                <th className="pb-3">مبلغ و تخفیف / جایزه</th>
                <th className="pb-3">تاریخ و شماره رسید</th>
                <th className="pb-3">وضعیت سفارش</th>
                <th className="pb-3">تأیید / بازپرداخت</th>
                <th className="pb-3 text-center">عملیات مالی</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ledgerRecords.filter(r => filterType === "ALL" || r.category === filterType).map(record => (
                <tr key={record.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-4 font-bold text-slate-900">
                    {record.title}
                    <span className="block text-[10px] text-indigo-600 font-normal">دسته: {record.category}</span>
                  </td>
                  <td className="py-4 text-slate-700">
                    <strong className="text-slate-900" dir="ltr">{record.amount}</strong>
                    <span className="block text-[10px] text-emerald-600" dir="ltr">تخفیف: {record.discount}</span>
                  </td>
                  <td className="py-4 text-slate-500 font-mono text-[11px]" dir="ltr">
                    {record.date}
                    <span className="block text-[10px] text-slate-400">رسید: {record.receiptNo}</span>
                  </td>
                  <td className="py-4">
                    <span className="font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg text-[10px] inline-block">
                      {record.orderStatus}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`font-bold px-2.5 py-1 rounded-lg text-[10px] inline-block ${record.status === 'تاییدشده' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="py-4 text-center space-x-2 space-x-reverse whitespace-nowrap">
                    <button 
                      onClick={() => handleUpdateStatus(record.id, 'تاییدشده')} 
                      className="text-emerald-600 font-bold hover:underline"
                    >
                      تأیید
                    </button>
                    <button 
                      onClick={() => handleUpdateStatus(record.id, 'بازپرداخت/عودت وجه')} 
                      className="text-rose-600 font-bold hover:underline"
                    >
                      عودت وجه
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