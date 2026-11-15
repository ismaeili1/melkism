"use client";

import { useState } from "react";
import Link from "next/link";

export default function UserProfileSettingsPage() {
  const [profile, setProfile] = useState({
    name: "شرکت انبوه‌سازی سازندگان آلتون",
    username: "alton_build",
    email: "info@alton-build.com",
    mobile: "09121112233",
    role: "COMPANY",
    province: "تهران",
    city: "تهران",
    companyName: "سازندگان آلتون",
    registerId: "45120",
    iban: "IR990180000000009876543211",
    bankName: "تجارت",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("اطلاعات پروفایل و مدارک با موفقیت به‌روزرسانی شد و جهت بازبینی به ادمین ارسال گردید.");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex justify-between items-center">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-1">تنظیمات حساب کاربری</span>
          <h1 className="text-2xl font-black text-slate-900">ویرایش مشخصات، پروانه کسب و اطلاعات بانکی</h1>
          <p className="text-xs text-slate-500 mt-1">مدیریت اطلاعات هویتی، آدرس‌ها و حساب بانکی جهت تسویه حساب‌ها.</p>
        </div>
        <Link href="/fa/user/dashboard" className="bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl">← بازگشت به داشبورد</Link>
      </div>

      <form onSubmit={handleSave} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 text-xs">
        <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">📋 مشخصات ثبت‌نامی و صنفی</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-600 font-bold mb-1">نام کامل / سازمان</label>
            <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600" required />
          </div>
          <div>
            <label className="block text-slate-600 font-bold mb-1">نام کاربری</label>
            <input type="text" value={profile.username} onChange={e => setProfile({...profile, username: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600" required />
          </div>
          <div>
            <label className="block text-slate-600 font-bold mb-1">ایمیل سازمانی</label>
            <input type="email" value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600" required />
          </div>
          <div>
            <label className="block text-slate-600 font-bold mb-1">شماره موبایل (تأییدشده)</label>
            <input type="text" value={profile.mobile} onChange={e => setProfile({...profile, mobile: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600" required />
          </div>
          <div>
            <label className="block text-slate-600 font-bold mb-1">شماره شبا بانکی (جهت تسویه)</label>
            <input type="text" value={profile.iban} onChange={e => setProfile({...profile, iban: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none font-mono focus:border-indigo-600" required />
          </div>
          <div>
            <label className="block text-slate-600 font-bold mb-1">نام بانک</label>
            <input type="text" value={profile.bankName} onChange={e => setProfile({...profile, bankName: e.target.value})} className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600" />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl transition shadow-sm">
            ذخیره تغییرات پروفایل
          </button>
        </div>
      </form>

    </div>
  );
}