"use client";

import { useState } from "react";
import Link from "next/link";
import ImagePickerInput from "@/components/admin/ImagePickerInput"; // 🌟 ایمپورت کامپوننت مخزن و آپلود

export default function AdminMarketplaceManagementPage() {
  const [ads, setAds] = useState([
    { id: "AD-1", title: "پنت‌هاوس لوکس ۱۸۰ متری الهیه (آگهی ویژه)", owner: "شرکت آلتون", status: "فعال در صفحه اول", slug: "penthouse-elahiyeh", imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { id: "AD-2", title: "پیش‌فروش پروژه مسکونی ارکیده - فاز ۲", owner: "سازندگان آپادانا", status: "در انتظار بازبینی", slug: "orkideh-project-pre", imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingAd, setEditingAd] = useState<any | null>(null);

  // فیلدهای فرم آگهی
  const [formTitle, setFormTitle] = useState("");
  const [formOwner, setFormOwner] = useState("شرکت ساختمانی ملکیسم");
  const [formStatus, setFormStatus] = useState("فعال در صفحه اول");
  const [formSlug, setFormSlug] = useState("");
  const [formImageUrl, setFormImageUrl] = useState("https://images.unsplash.com/photo-1600585154340-be6161a56a0c");

  const handleOpenModal = (ad: any = null) => {
    if (ad) {
      setEditingAd(ad);
      setFormTitle(ad.title);
      setFormOwner(ad.owner);
      setFormStatus(ad.status);
      setFormSlug(ad.slug);
      setFormImageUrl(ad.imageUrl || "");
    } else {
      setEditingAd(null);
      setFormTitle("");
      setFormOwner("شرکت ساختمانی ملکیسم");
      setFormStatus("فعال در صفحه اول");
      setFormSlug(`ad-${Date.now()}`);
      setFormImageUrl("https://images.unsplash.com/photo-1600585154340-be6161a56a0c");
    }
    setShowModal(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle) return;

    if (editingAd) {
      setAds(ads.map(a => a.id === editingAd.id ? { ...a, title: formTitle, owner: formOwner, status: formStatus, slug: formSlug, imageUrl: formImageUrl } : a));
      alert("آگهی با موفقیت ویرایش شد.");
    } else {
      const newAd = {
        id: `AD-${Date.now().toString().slice(-3)}`,
        title: formTitle,
        owner: formOwner,
        status: formStatus,
        slug: formSlug || `ad-${Date.now()}`,
        imageUrl: formImageUrl
      };
      setAds([newAd, ...ads]);
      alert("آگهی جدید با موفقیت اضافه شد.");
    }
    setShowModal(false);
  };

  const handleToggle = (id: string) => {
    setAds(ads.map(a => a.id === id ? { ...a, status: a.status === 'فعال در صفحه اول' ? 'معلق / بررسی' : 'فعال در صفحه اول' } : a));
    alert("وضعیت انتشار آگهی ویژه در بازار به‌روز شد.");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-1">بازار MELKIST (آگهی‌ها و پروژه‌ها)</span>
          <h1 className="text-2xl font-black text-slate-900">مدیریت آگهی‌های ویژه، پیش‌فروش‌ها و محصولات بازار ملک</h1>
          <p className="text-xs text-slate-500 mt-1">نظارت بر جایگاه‌های ویژه آگهی‌ها، تصاویر و تأیید پیش‌فروش‌های شرکت‌های ساختمانی.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => handleOpenModal()} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm">+ ثبت آگهی/پروژه جدید</button>
          <Link href="/fa/admin/dashboard" className="bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl">← بازگشت به داشبورد</Link>
        </div>
      </div>

      {/* جدول آگهی‌ها */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900">🛒 لیست آگهی‌ها و پیش‌فروش‌های ویژه بازار ({ads.length} مورد)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="border-b text-slate-400 font-medium">
                <th className="pb-3">تصویر</th>
                <th className="pb-3">عنوان آگهی / پروژه</th>
                <th className="pb-3">مالک / سازنده</th>
                <th className="pb-3">وضعیت جایگاه</th>
                <th className="pb-3">مشاهده زنده</th>
                <th className="pb-3 text-center">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {ads.map(ad => (
                <tr key={ad.id} className="hover:bg-slate-50">
                  <td className="py-3">
                    <img src={ad.imageUrl} alt={ad.title} className="w-12 h-10 rounded-lg object-cover border border-slate-200" />
                  </td>
                  <td className="py-4 font-bold text-slate-900">{ad.title}</td>
                  <td className="py-4 text-slate-600">{ad.owner}</td>
                  <td className="py-4 text-emerald-600 font-bold">{ad.status}</td>
                  <td className="py-4"><a href={`/fa/marketplace/${ad.slug}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline">🔗 مشاهده آگهی ↗</a></td>
                  <td className="py-4 text-center space-x-2 space-x-reverse">
                    <button onClick={() => handleOpenModal(ad)} className="text-indigo-600 font-bold hover:underline">ویرایش</button>
                    <button onClick={() => handleToggle(ad.id)} className="text-indigo-600 font-bold hover:underline">مدیریت جایگاه</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* مودال ایجاد/ویرایش آگهی بازار همراه با کامپوننت مخزن رسانه */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-slate-900">{editingAd ? "✏️ ویرایش آگهی و پروژه بازار" : "➕ ثبت آگهی یا پروژه جدید"}</h3>
            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">عنوان آگهی / پروژه:</label>
                <input type="text" value={formTitle} onChange={e => setFormTitle(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none" required />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold mb-1">مالک / سازنده:</label>
                  <input type="text" value={formOwner} onChange={e => setFormOwner(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none" required />
                </div>
                <div>
                  <label className="block font-bold mb-1">وضعیت جایگاه:</label>
                  <select value={formStatus} onChange={e => setFormStatus(e.target.value)} className="w-full border rounded-xl px-3 py-2 bg-white outline-none">
                    <option value="فعال در صفحه اول">فعال در صفحه اول</option>
                    <option value="در انتظار بازبینی">در انتظار بازبینی</option>
                    <option value="ویژه پروژه‌ها">ویژه پروژه‌ها</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-bold mb-1">لینک اختصاصی (Slug):</label>
                <input type="text" value={formSlug} onChange={e => setFormSlug(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none font-mono" required />
              </div>
              <div>
                {/* 🌟 جایگزینی فیلد با کامپوننت مخزن و آپلود تصویر */}
                <ImagePickerInput 
                  label="تصویر اصلی آگهی / پروژه" 
                  name="imageUrl" 
                  defaultValue={formImageUrl}
                  category="market"
                  onChange={(url) => setFormImageUrl(url)}
                />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-slate-100 rounded-xl font-bold">انصراف</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold">ذخیره آگهی</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}