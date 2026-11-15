"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminTransactionScenariosPage() {
  const [activeScenario, setActiveScenario] = useState("ESCROW");

  // سناریوهای معاملاتی فعال در پلتفرم
  const [escrowDeals, setEscrowDeals] = useState([
    {
      id: "TR-9001",
      title: "پیش‌فروش واحد ۱۲۰ متری برج آلتون - فاز ۱",
      buyer: "علی اکبری (USER)",
      seller: "شرکت انبوه‌سازی آلتون (COMPANY)",
      totalAmount: "۱۲,۰۰۰,۰۰۰,۰۰۰ تومان",
      milestone: "مرحله ۳ از ۵ (سفت‌کاری - ۳۰٪ پیشرفت)",
      escrowStatus: "وجوه بلوکه‌شده در حساب امانی (Escrow امن)",
      legalStatus: "تأییدشده و دارای کد رهگیری یکپارچه"
    },
    {
      id: "TR-9002",
      title: "مشارکت در ساخت و واگذاری زمین تجاری نیاوران",
      buyer: "آژانس املاک مدرن پاسداران (AGENCY)",
      seller: "مهندس آرش طاهری (EXPERT)",
      totalAmount: "۴۵,۰۰۰,۰۰۰,۰۰۰ تومان",
      milestone: "مرحله ۱ از ۴ (انتقال سند و تاییدیه کارشناس)",
      escrowStatus: "در انتظار واریز پیش‌پرداخت به حساب امانی",
      legalStatus: "نیازمند بازبینی واحد حقوقی 🔴"
    }
  ]);

  const handleApproveEscrow = (id: string) => {
    alert(`مرحله معاملاتی ${id} تأیید شد و مبالغ مرحله‌ای به حساب سازنده آزاد گردید.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            سیستم مدیریت سناریوهای خاص معاملاتی و حساب امانی (Escrow)
          </span>
          <h1 className="text-2xl font-black text-slate-900">مدیریت قراردادهای پیش‌فروش، شراکت و معاملات ترکیبی</h1>
          <p className="text-xs text-slate-500 mt-1">نظارت بر آزاد کردن مراحل پیشرفت پروژه، کمیسیون‌های همکار (Co-Brokerage) و تأییدیه ثبتی.</p>
        </div>
        <Link href="/fa/admin/dashboard" className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
          ← بازگشت به داشبورد
        </Link>
      </div>

      {/* تب‌های سناریوهای معاملاتی */}
      <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex flex-wrap gap-2 text-xs">
        {[
          { key: "ESCROW", label: "🔒 حساب امانی و پیش‌فروش مرحله‌ای (Escrow)" },
          { key: "CO_BROKERAGE", label: "🤝 معاملات همکار و کمیسیون دوطرفه (Co-Brokerage)" },
          { key: "LEGAL_TRACK", label: "⚖️ استعلام کدهای رهگیری و ثبت رسمی" },
        ].map(tab => (
          <button 
            key={tab.key}
            onClick={() => setActiveScenario(tab.key)}
            className={`px-4 py-2.5 rounded-xl font-bold transition ${activeScenario === tab.key ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* محتوای سناریوی ۱: حساب امانی */}
      {activeScenario === "ESCROW" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold text-slate-900">📋 قراردادهای پیش‌فروش و آزادی مراحل ساخت (Milestone Escrow)</h3>
            <span className="text-[11px] text-slate-400">تضمین امنیت سرمایه خریدار و سازنده در پلتفرم ملکیسم</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-medium">
                  <th className="pb-3">عنوان معامله / پروژه</th>
                  <th className="pb-3">طرفین قرارداد (خریدار / فروشنده)</th>
                  <th className="pb-3">مبلغ کل قرارداد</th>
                  <th className="pb-3">مرحله پیشرفت جاری</th>
                  <th className="pb-3">وضعیت حساب امانی</th>
                  <th className="pb-3 text-center">عملیات مالی و آزادسازی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {escrowDeals.map(deal => (
                  <tr key={deal.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-4 font-bold text-slate-900">
                      {deal.title}
                      <span className="block text-[10px] text-indigo-600 font-normal">شناسه: {deal.id}</span>
                    </td>
                    <td className="py-4 text-slate-600">
                      خریدار: <strong className="text-slate-900">{deal.buyer}</strong>
                      <span className="block text-[10px] text-slate-500">فروشنده: {deal.seller}</span>
                    </td>
                    <td className="py-4 font-bold text-slate-900">{deal.totalAmount}</td>
                    <td className="py-4 text-slate-700 font-medium">{deal.milestone}</td>
                    <td className="py-4">
                      <span className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-lg text-[10px] border border-emerald-100">
                        {deal.escrowStatus}
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <button 
                        onClick={() => handleApproveEscrow(deal.id)} 
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-3 py-1.5 rounded-xl transition shadow-sm"
                      >
                        تأیید پیشرفت و آزادسازی مرحله‌ای
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* محتوای سناریوی ۲: معاملات همکار */}
      {activeScenario === "CO_BROKERAGE" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900">🤝 کمیسیون مشترک و همکاری بین آژانس‌ها و مشاوران (Co-Brokerage)</h3>
          <p className="text-xs text-slate-500">در این سناریو، کمیسیون معاملات کلان بین مشاور معرف و آژانس دارنده فایل به صورت خودکار و با تأیید دوطرفه (🔵) تقسیم و تسویه می‌گردد.</p>
          <div className="p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-center space-y-2">
            <p className="text-slate-600 font-bold text-xs">هیچ معامله همکاری معلقی در این لحظه وجود ندارد.</p>
            <span className="text-[11px] text-slate-400 block">سیستم تسویه خودکار کمیسیون‌ها فعال است.</span>
          </div>
        </div>
      )}

      {/* محتوای سناریوی ۳: استعلام کدهای رهگیری */}
      {activeScenario === "LEGAL_TRACK" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900">⚖️ رهگیری یکپارچه قراردادها و استعلامات ثبتی</h3>
          <p className="text-xs text-slate-500">تمامی قراردادهای ثبت‌شده در «ملکیسم» به سامانه ثبت اسناد رسمی متصل بوده و دارای هولوگرام و کد رهگیری یکتا هستند.</p>
          <div className="flex gap-3 max-w-md">
            <input type="text" placeholder="وارد کردن کد رهگیری ۱۶ رقمی..." className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-xs outline-none focus:border-indigo-600 font-mono" />
            <button onClick={() => alert("استعلام با موفقیت انجام شد: سند معتبر و فعال است.")} className="bg-slate-900 text-white text-xs font-bold px-5 py-2 rounded-xl">استعلام</button>
          </div>
        </div>
      )}

    </div>
  );
}