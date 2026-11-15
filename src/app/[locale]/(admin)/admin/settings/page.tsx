"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminGlobalSettingsPage() {
  const [activeTab, setActiveTab] = useState("HEADER_FOOTER");

  const [headerLinks, setHeaderLinks] = useState([
    { id: 1, title: "صفحه اصلی", url: "/fa", status: "فعال" },
    { id: 2, title: "هوش بازار", url: "/fa/market-hub", status: "فعال" },
    { id: 3, title: "کتابخانه تخصصی", url: "/fa/library", status: "فعال" },
    { id: 4, title: "متخصص ملکیست", url: "/fa/experts", status: "فعال" },
  ]);

  const [supportChannels, setSupportChannels] = useState([
    { id: 1, type: "تیکت آنلاین ۲۴ ساعته", status: "فعال", target: "کاربران و سازندگان" },
    { id: 2, type: "پشتیبانی تلفنی اختصاصی شرکت‌ها", status: "فعال", target: "نقش COMPANY و AGENCY" },
  ]);

  const [licenses, setLicenses] = useState([
    { id: 1, title: "گواهینامه عضویت رسمی ICOMOS ایران", code: "IR-ICOMOS-1405", status: "معتبر" },
    { id: 2, title: "نماد اعتماد و مجوز انتشار محتوای دیجیتال", code: "ENAMAD-MELKISM", status: "تاییدشده" },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            تنظیمات زیرساخت، ساختار سراسری و مجوزها
          </span>
          <h1 className="text-2xl font-black text-slate-900">مدیریت هدر، فوتر، خدمات، پشتیبانی و مجوزها</h1>
          <p className="text-xs text-slate-500 mt-1">کنترل منوهای سراسری، کانال‌های پشتیبانی کاربران و اسناد قانونی پلتفرم.</p>
        </div>
        <Link href="/fa/admin/dashboard" className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
          ← بازگشت به داشبورد فرماندهی
        </Link>
      </div>

      {/* تب‌های مدیریت تنظیمات */}
      <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex flex-wrap gap-2 text-xs">
        <button 
          onClick={() => setActiveTab("HEADER_FOOTER")}
          className={`px-4 py-2.5 rounded-xl font-bold transition ${activeTab === 'HEADER_FOOTER' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          🌐 هدر و فوتر سایت
        </button>
        <button 
          onClick={() => setActiveTab("SUPPORT")}
          className={`px-4 py-2.5 rounded-xl font-bold transition ${activeTab === 'SUPPORT' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          🎧 خدمات و پشتیبانی
        </button>
        <button 
          onClick={() => setActiveTab("LICENSES")}
          className={`px-4 py-2.5 rounded-xl font-bold transition ${activeTab === 'LICENSES' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          📜 مجوزها و اسناد قانونی
        </button>
      </div>

      {/* محتوای تب فعال */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        
        {activeTab === "HEADER_FOOTER" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-900">🔗 مدیریت لینک‌ها و منوهای ناوبری (Header & Footer)</h3>
              <button onClick={() => alert("افزودن لینک جدید به منو")} className="bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl">+ افزودن لینک</button>
            </div>
            <div className="divide-y divide-slate-100 text-xs">
              {headerLinks.map(link => (
                <div key={link.id} className="py-3 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">{link.title}</span>
                    <span className="text-slate-400 font-mono text-[10px]">{link.url}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 font-bold rounded text-[10px]">{link.status}</span>
                    <button onClick={() => alert(`ویرایش لینک ${link.title}`)} className="text-indigo-600 font-bold hover:underline">ویرایش</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "SUPPORT" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-900">🎧 کانال‌های ارتباطی و پشتیبانی مشتریان</h3>
              <button onClick={() => alert("افزودن کانال پشتیبانی جدید")} className="bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl">+ افزودن کانال</button>
            </div>
            <div className="divide-y divide-slate-100 text-xs">
              {supportChannels.map(sup => (
                <div key={sup.id} className="py-3 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">{sup.type}</span>
                    <span className="text-slate-400 text-[10px]">مخاطبین هدف: {sup.target}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 font-bold rounded text-[10px]">{sup.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "LICENSES" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-900">📜 اسناد قانونی، پروانه‌ها و مجوزهای رسمی</h3>
              <button onClick={() => alert("بارگذاری سند یا مجوز جدید")} className="bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl">+ بارگذاری سند جدید</button>
            </div>
            <div className="divide-y divide-slate-100 text-xs">
              {licenses.map(lic => (
                <div key={lic.id} className="py-3 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">{lic.title}</span>
                    <span className="text-slate-400 font-mono text-[10px]">شناسه ثبت: {lic.code}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 font-bold rounded text-[10px]">{lic.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}