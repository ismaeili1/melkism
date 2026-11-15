"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminContentHubPage() {
  const [activeTab, setActiveTab] = useState("NEWS");

  // داده‌های آزمایشی و مدیریتی بخش‌های مختلف پلتفرم
  const contentSections: Record<string, any[]> = {
    NEWS: [
      { id: 1, title: "تحلیل جامع بازار مسکن و پیش‌بینی قیمت‌ها در پاییز ۱۴۰۵", status: "PUBLISHED", date: "۱۴۰۵/۰۷/۱۵", author: "مدیر هوش مصنوعی" },
      { id: 2, title: "گزارش تخصصی تحولات قیمت زمین در کلان‌شهرها", status: "PENDING", date: "۱۴۰۵/۰۷/۱۶", author: "مدیر محتوا" },
    ],
    LIBRARY: [
      { id: 1, title: "مرجع جامع ضوابط شهرداری و شهرسازی (نسخه ۱۴۰۵)", status: "ACTIVE", type: "PDF / سند فنی", category: "معماری و ساخت" },
      { id: 2, title: "راهنمای حقوقی قراردادهای مشارکت در ساخت", status: "ACTIVE", type: "مقاله تخصصی", category: "حقوقی ملکی" },
    ],
    MARKET_HUB: [
      { id: 1, title: "شاخص قیمت آپارتمان در منطقه ۱ تهران", status: "UPDATED", value: "متری ۱۸۵ میلیون تومان", updateDate: "امروز" },
      { id: 2, title: "تحلیل بازدهی سرمایه‌گذاری در املاک تجاری", status: "UPDATED", value: "نرخ رشد سالانه ۲۸٪", updateDate: "دیروز" },
    ],
    RULES: [
      { id: 1, title: "قوانین جدید مالیات بر خانه‌های خالی و عایدی سرمایه", status: "ACTIVE", enforcementDate: "۱۴۰۵/۰۱/۰۱" },
      { id: 2, title: "دستورالعمل صدور پروانه اشتغال به کار مهندسی", status: "ACTIVE", enforcementDate: "۱۴۰۵/۰۳/۱۵" },
    ],
    EXPERTS: [
      { id: 1, name: "مهندس کامران وفایی", specialization: "کارشناس ارشد سازه و ارزیابی ملک", status: "VERIFIED" },
      { id: 2, name: "دکتر پریناز شریفی", specialization: "مشاور حقوقی و قراردادهای ملکی بین‌المللی", status: "PENDING_VERIFICATION" },
    ],
    MARKETPLACE: [
      { id: 1, title: "پروژه برج باغ مسکونی الهیه (پیش‌فروش ویژه)", owner: "شرکت آلتون", status: "FEATURED" },
      { id: 2, title: "مجتمع تجاری اداری آریا (واگذاری واحدها)", owner: "گروه مهندسی پارت", status: "ACTIVE" },
    ],
  };

  const tabLabels: Record<string, string> = {
    NEWS: "📰 اخبار و گزارش‌ها",
    LIBRARY: "📚 کتابخانه تخصصی",
    MARKET_HUB: "📊 هوش بازار",
    RULES: "⚖️ قوانین و مقررات",
    EXPERTS: "👨‍⚖️ متخصص ملکیست",
    MARKETPLACE: "🛒 بازار MELKIST",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            هاب مرکزی مدیریت محتوا و اطلاعات تخصصی
          </span>
          <h1 className="text-2xl font-black text-slate-900">کنترل صفحات عمومی و تخصصی ملکیسم</h1>
          <p className="text-xs text-slate-500 mt-1">مدیریت، ویرایش، تایید و انتشار اطلاعات در بخش‌های مختلف پلتفرم از یک نقطه.</p>
        </div>
        <Link href="/fa/admin/dashboard" className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
          ← بازگشت به داشبورد فرماندهی
        </Link>
      </div>

      {/* تب‌های انتخاب بخش */}
      <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex flex-wrap gap-2 text-xs">
        {Object.keys(tabLabels).map(key => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2.5 rounded-xl font-bold transition ${activeTab === key ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {tabLabels[key]}
          </button>
        ))}
      </div>

      {/* محتوای تب انتخاب‌شده */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold text-slate-900">
            مدیریت بخش: <span className="text-indigo-600">{tabLabels[activeTab]}</span>
          </h3>
          <button onClick={() => alert("افزودن آیتم جدید به این بخش")} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition shadow-sm">
            + افزودن مورد جدید
          </button>
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          {contentSections[activeTab]?.map((item: any, idx: number) => (
            <div key={item.id || idx} className="py-4 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">{item.title || item.name}</span>
                <span className="text-slate-400 text-[10px] block">
                  {item.author && `نویسنده: ${item.author} | `}
                  {item.date && `تاریخ: ${item.date} | `}
                  {item.category && `دسته‌بندی: ${item.category} | `}
                  {item.value && `مقدار تحلیل: ${item.value} | `}
                  {item.specialization && `تخصص: ${item.specialization} | `}
                  {item.owner && `مالک/سازنده: ${item.owner}`}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded-lg font-bold text-[10px] ${item.status === 'PUBLISHED' || item.status === 'ACTIVE' || item.status === 'VERIFIED' || item.status === 'FEATURED' || item.status === 'UPDATED' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                  {item.status}
                </span>
                <button onClick={() => alert(`ویرایش آیتم: ${item.title || item.name}`)} className="text-indigo-600 hover:underline font-bold">ویرایش</button>
                <button onClick={() => alert(`حذف آیتم`)} className="text-rose-600 hover:underline font-bold">حذف</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}