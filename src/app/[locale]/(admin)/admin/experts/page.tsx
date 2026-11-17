"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ImagePickerInput from "@/components/admin/ImagePickerInput"; // 🌟 ایمپورت کامپوننت مخزن و آپلود

export default function AdminExpertsManagementPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  const [experts, setExperts] = useState([
    { id: "EXP-1", name: "مهندس آرش طاهری", specialty: "ارزیاب فنی و قیمت‌گذاری ملک", status: "تاییدشده", slug: "arash-taheri-expert", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb" },
    { id: "EXP-2", name: "دکتر مهرداد سعیدی", specialty: "حقوق‌دان ملکی و مشاور قراردادها", status: "در انتظار بررسی", slug: "mehrdad-saeedi-expert", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingExpert, setEditingExpert] = useState<any | null>(null);

  // فیلدهای فرم متخصص
  const [formName, setFormName] = useState("");
  const [formSpecialty, setFormSpecialty] = useState("ارزیاب رسمی ملک");
  const [formAvatarUrl, setFormAvatarUrl] = useState("https://images.unsplash.com/photo-1534528741775-53994a69daeb");
  const [formSlug, setFormSlug] = useState("");

  const handleOpenModal = (expert: any = null) => {
    if (expert) {
      setEditingExpert(expert);
      setFormName(expert.name);
      setFormSpecialty(expert.specialty);
      setFormAvatarUrl(expert.avatarUrl || "");
      setFormSlug(expert.slug);
    } else {
      setEditingExpert(null);
      setFormName("");
      setFormSpecialty("ارزیاب رسمی ملک");
      setFormAvatarUrl("https://images.unsplash.com/photo-1534528741775-53994a69daeb");
      setFormSlug(`expert-${Date.now()}`);
    }
    setShowModal(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName) return;

    if (editingExpert) {
      setExperts(experts.map(e => e.id === editingExpert.id ? { ...e, name: formName, specialty: formSpecialty, avatarUrl: formAvatarUrl, slug: formSlug } : e));
      alert("پروفایل متخصص با موفقیت ویرایش شد.");
    } else {
      const newExp = {
        id: `EXP-${Date.now().toString().slice(-3)}`,
        name: formName,
        specialty: formSpecialty,
        status: "تاییدشده",
        slug: formSlug || `expert-${Date.now()}`,
        avatarUrl: formAvatarUrl
      };
      setExperts([newExp, ...experts]);
      alert("متخصص جدید با موفقیت اضافه شد.");
    }
    setShowModal(false);
  };

  const handleToggle = (id: string, current: string) => {
    const next = current === "تاییدشده" ? "تعلیق‌شده" : "تاییدشده";
    setExperts(experts.map(e => e.id === id ? { ...e, status: next } : e));
    alert(`وضعیت تایید کارشناس تغییر یافت.`);
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6`} dir={dir}>
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-1">متخصص ملکیست (کارشناسان ویژه)</span>
          <h1 className="text-2xl font-black text-slate-900">ارزیابی صلاحیت و مدیریت مشاوران و کارشناسان ارشد</h1>
          <p className="text-xs text-slate-500 mt-1">بررسی مدارک نظام مهندسی، تصویر پرسنلی و تایید کارشناسان معتبر جهت ارائه خدمات تخصصی.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => handleOpenModal()} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition whitespace-nowrap">+ افزودن متخصص جدید</button>
          <Link href={`/${locale}/admin/dashboard`} className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap">{dir === 'rtl' ? '← بازگشت به داشبورد' : 'Dashboard →'}</Link>
        </div>
      </div>

      {/* جدول لیست کارشناسان */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900">👨‍⚖️ لیست کارشناسان متقاضی و تاییدشده ({experts.length} مورد)</h3>
        <div className="overflow-x-auto">
          <table className={`w-full ${dir === 'rtl' ? 'text-right' : 'text-left'} text-xs`}>
            <thead>
              <tr className="border-b text-slate-400 font-medium">
                <th className="pb-3">تصویر / آواتار</th>
                <th className="pb-3">نام کارشناس</th>
                <th className="pb-3">حوزه تخصصی</th>
                <th className="pb-3">وضعیت صلاحیت</th>
                <th className="pb-3">پروفایل زنده</th>
                <th className="pb-3 text-center">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {experts.map(exp => (
                <tr key={exp.id} className="hover:bg-slate-50">
                  <td className="py-3">
                    <img src={exp.avatarUrl} alt={exp.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                  </td>
                  <td className="py-4 font-bold text-slate-900">{exp.name}</td>
                  <td className="py-4 text-slate-600">{exp.specialty}</td>
                  <td className="py-4">
                    <span className={`px-2.5 py-1 rounded-lg font-bold text-[10px] inline-block ${exp.status === 'تاییدشده' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                      {exp.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <a href={`/${locale}/experts/${exp.slug}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1 whitespace-nowrap">
                      پروفایل ↗
                    </a>
                  </td>
                  <td className="py-4 text-center space-x-2 space-x-reverse whitespace-nowrap">
                    <button onClick={() => handleOpenModal(exp)} className="text-indigo-600 font-bold hover:underline">ویرایش</button>
                    <button onClick={() => handleToggle(exp.id, exp.status)} className="text-amber-600 font-bold hover:underline">تغییر وضعیت</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* مودال ایجاد/ویرایش متخصص همراه با کامپوننت انتخاب از مخزن و آپلود آواتار */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-slate-900">{editingExpert ? "✏️ ویرایش پروفایل متخصص" : "➕ افزودن متخصص VIP جدید"}</h3>
            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">نام و نام خانوادگی:</label>
                <input type="text" value={formName} onChange={e => setFormName(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none" required />
              </div>

              <div>
                <label className="block font-bold mb-1">حوزه تخصصی:</label>
                <input type="text" value={formSpecialty} onChange={e => setFormSpecialty(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none" required />
              </div>

              <div>
                <label className="block font-bold mb-1">لینک اختصاصی (Slug):</label>
                <input type="text" value={formSlug} onChange={e => setFormSlug(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none font-mono" dir="ltr" required />
              </div>

              <div>
                {/* 🌟 جایگزینی فیلد ساده با کامپوننت پیشرفته مخزن رسانه و آپلود آواتار */}
                <ImagePickerInput 
                  label="تصویر پرسنلی / آواتار VIP" 
                  name="avatarUrl" 
                  defaultValue={formAvatarUrl}
                  category="experts"
                  onChange={(url) => setFormAvatarUrl(url)}
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold transition">انصراف</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition">ذخیره متخصص</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}