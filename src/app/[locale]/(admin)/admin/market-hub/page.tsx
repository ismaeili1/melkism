"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ImagePickerInput from "@/components/admin/ImagePickerInput"; // 🌟 ایمپورت کامپوننت مخزن و آپلود

export default function AdminMarketHubManagementPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formIndex, setFormIndex] = useState("+4.5% رشد فصلی");
  const [formSlug, setFormSlug] = useState("market-index-q3");
  const [formImageUrl, setFormImageUrl] = useState("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab");

  const [reports, setReports] = useState([
    { id: "M-1", title: "شاخص میانگین قیمت هر متر مربع در منطقه ۱ و ۳", indexValue: "+۶.۲٪ رشد ماهانه", date: "۱۴۰۵/۰۷/۱۶", slug: "price-index-region1-3", imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" },
    { id: "M-2", title: "تحلیل ضریب نفوذ معاملات پیش‌فروش در مناطق کلان‌شهر تهران", indexValue: "+۳.۸٪ رشد فصلی", date: "۱۴۰۵/۰۷/۱۰", slug: "presale-penetration-rate", imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa" }
  ]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle) return;
    setReports([{ id: `M-${Date.now()}`, title: formTitle, indexValue: formIndex, date: "امروز", slug: formSlug, imageUrl: formImageUrl }, ...reports]);
    setShowModal(false);
    setFormTitle("");
    setFormImageUrl("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab");
    alert("گزارش هوش بازار با موفقیت منتشر شد.");
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6`} dir={dir}>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-1">هوش بازار و تحلیل کلان</span>
          <h1 className="text-2xl font-black text-slate-900">مدیریت شاخص‌های قیمت، نوسانات و تحلیل‌های اقتصادی املاک</h1>
          <p className="text-xs text-slate-500 mt-1">تنظیم داده‌های تحلیلی، شاخص‌های قیمت مسکن و نمودارهای پیش‌بینی.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => setShowModal(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap">+ انتشار گزارش هوش بازار</button>
          <Link href={`/${locale}/admin/content-hub`} className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap">{dir === 'rtl' ? '← هاب محتوا' : 'Content Hub →'}</Link>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900">📊 گزارش‌های تحلیل بازار منتشرشده</h3>
        <div className="overflow-x-auto">
          <table className={`w-full ${dir === 'rtl' ? 'text-right' : 'text-left'} text-xs`}>
            <thead>
              <tr className="border-b text-slate-400 font-medium">
                <th className="pb-3">تصویر گزارش</th>
                <th className="pb-3">عنوان گزارش تحلیل</th>
                <th className="pb-3">شاخص کلیدی</th>
                <th className="pb-3">تاریخ</th>
                <th className="pb-3">لینک مشاهده زنده</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {reports.map(r => (
                <tr key={r.id} className="hover:bg-slate-50">
                  <td className="py-3">
                    <img src={r.imageUrl} alt={r.title} className="w-10 h-10 rounded-lg object-cover border border-slate-200" />
                  </td>
                  <td className="py-4 font-bold text-slate-900">{r.title}</td>
                  <td className="py-4 text-emerald-600 font-bold" dir="ltr">{r.indexValue}</td>
                  <td className="py-4 text-slate-400 font-mono" dir="ltr">{r.date}</td>
                  <td className="py-4">
                    <a href={`/${locale}/market-hub/${r.slug}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1 whitespace-nowrap">
                      مشاهده گزارش ↗
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
            <h3 className="font-bold text-sm text-slate-900">انتشار گزارش هوش بازار</h3>
            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div><label className="block font-bold mb-1">عنوان گزارش:</label><input type="text" value={formTitle} onChange={e => setFormTitle(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none" required /></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div><label className="block font-bold mb-1">مقدار شاخص:</label><input type="text" value={formIndex} onChange={e => setFormIndex(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none" dir="ltr" required /></div>
                <div><label className="block font-bold mb-1">اسلاگ:</label><input type="text" value={formSlug} onChange={e => setFormSlug(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none font-mono" dir="ltr" required /></div>
              </div>
              <div>
                {/* 🌟 جایگزینی فیلد متنی ساده با کامپوننت مخزن و آپلود تصویر */}
                <ImagePickerInput 
                  label="تصویر / اینفوگرافیک گزارش" 
                  name="imageUrl" 
                  defaultValue={formImageUrl}
                  category="market"
                  onChange={(url) => setFormImageUrl(url)}
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold transition">انصراف</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition">انتشار</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}