"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ImagePickerInput from "@/components/admin/ImagePickerInput"; // 🌟 ایمپورت کامپوننت مخزن و آپلود

export default function AdminRulesManagementPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  const [showModal, setShowModal] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formCode, setFormCode] = useState("LAW-1405-REG");
  const [formSlug, setFormSlug] = useState("new-property-law");
  const [formImageUrl, setFormImageUrl] = useState("https://images.unsplash.com/photo-1589829545856-d10d557cf95f");

  const [rules, setRules] = useState([
    { id: "R-1", title: "قانون جدید الزام به ثبت رسمی معاملات اموال غیرمنقول", code: "LAW-1403-REG", date: "۱۴۰۵/۰۱/۱۵", slug: "official-transaction-law", imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f" },
    { id: "R-2", title: "مقررات تفکیک اعیان و اراضی کمیسیون ماده ۵ شهرداری", code: "LAW-M5-TEH", date: "۱۴۰۵/۰۴/۲۰", slug: "ماده-۵-تهران", imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b" }
  ]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle) return;
    setRules([
      { 
        id: `R-${Date.now()}`, 
        title: formTitle, 
        code: formCode, 
        date: "امروز", 
        slug: formSlug, 
        imageUrl: formImageUrl 
      }, 
      ...rules
    ]);
    setShowModal(false);
    setFormTitle("");
    setFormImageUrl("https://images.unsplash.com/photo-1589829545856-d10d557cf95f");
    alert("قانون جدید ثبت شد.");
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6`} dir={dir}>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-1">قوانین و مقررات ثبتی و حقوقی</span>
          <h1 className="text-2xl font-black text-slate-900">مدیریت بخشنامه‌های حقوقی، قوانین ملکی و مصوبات شهرداری</h1>
          <p className="text-xs text-slate-500 mt-1">به‌روزرسانی قوانین ثبتی، آیین‌نامه‌ها، تصاویر اسناد و استانداردهای حقوقی معاملات.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => setShowModal(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap">+ ثبت قانون جدید</button>
          <Link href={`/${locale}/admin/content-hub`} className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap">{dir === 'rtl' ? '← هاب محتوا' : 'Content Hub →'}</Link>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900">⚖️ لیست قوانین و بخشنامه‌های فعال</h3>
        <div className="overflow-x-auto">
          <table className={`w-full ${dir === 'rtl' ? 'text-right' : 'text-left'} text-xs`}>
            <thead>
              <tr className="border-b text-slate-400 font-medium">
                <th className="pb-3">تصویر / سند</th>
                <th className="pb-3">عنوان قانون</th>
                <th className="pb-3">شناسه بخشنامه</th>
                <th className="pb-3">تاریخ</th>
                <th className="pb-3">لینک مشاهده زنده</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {rules.map(r => (
                <tr key={r.id} className="hover:bg-slate-50">
                  <td className="py-3">
                    <img src={r.imageUrl} alt={r.title} className="w-10 h-10 rounded-lg object-cover border border-slate-200" />
                  </td>
                  <td className="py-4 font-bold text-slate-900">{r.title}</td>
                  <td className="py-4 font-mono text-indigo-600" dir="ltr">{r.code}</td>
                  <td className="py-4 text-slate-400 font-mono" dir="ltr">{r.date}</td>
                  <td className="py-4">
                    <a href={`/${locale}/rules/${r.slug}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1">
                      مشاهده متن قانون ↗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg space-y-4 shadow-xl">
            <h3 className="font-bold text-sm text-slate-900">ثبت قانون یا بخشنامه جدید</h3>
            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">عنوان قانون:</label>
                <input type="text" value={formTitle} onChange={e => setFormTitle(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold mb-1">شناسه بخشنامه:</label>
                  <input type="text" value={formCode} onChange={e => setFormCode(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none font-mono" dir="ltr" required />
                </div>
                <div>
                  <label className="block font-bold mb-1">اسلاگ:</label>
                  <input type="text" value={formSlug} onChange={e => setFormSlug(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none font-mono" dir="ltr" required />
                </div>
              </div>
              <div>
                {/* 🌟 جایگزینی فیلد با کامپوننت مخزن و آپلود تصویر سند */}
                <ImagePickerInput 
                  label="تصویر سند / بخشنامه قانونی" 
                  name="imageUrl" 
                  defaultValue={formImageUrl}
                  category="rules"
                  onChange={(url) => setFormImageUrl(url)}
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold transition">انصراف</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition">ثبت نهایی</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}