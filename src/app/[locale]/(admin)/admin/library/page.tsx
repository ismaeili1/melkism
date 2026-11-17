"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ImagePickerInput from "@/components/admin/ImagePickerInput"; // 🌟 ایمپورت کامپوننت مخزن و آپلود

export default function AdminLibraryManagementPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState("ضوابط شهرداری");
  const [formAuthor, setFormAuthor] = useState("مرکز مطالعات فنی ملکیسم");
  const [formFileUrl, setFormFileUrl] = useState("https://example.com/doc.pdf");
  const [formSlug, setFormSlug] = useState("municipal-rules-1405");

  const [items, setItems] = useState([
    {
      id: "LIB-1",
      title: "مجموعه کامل ضوابط ساخت‌وساز و تراکم تهران ۱۴۰۵",
      category: "ضوابط شهرداری",
      author: "معاونت شهرسازی",
      date: "۱۴۰۵/۰۶/۱۰",
      fileUrl: "https://example.com/zavabet.pdf",
      slug: "tehran-zavabet-1405",
      downloadsCount: 1240
    },
    {
      id: "LIB-2",
      title: "راهنمای جامع طراحی سازه‌های بتنی و مقاوم در برابر زلزله",
      category: "اسناد مهندسی",
      author: "نظام مهندسی استان",
      date: "۱۴۰۵/۰۵/۲۲",
      fileUrl: "https://example.com/concrete.pdf",
      slug: "concrete-design-guide",
      downloadsCount: 890
    }
  ]);

  const handleOpenModal = (item: any = null) => {
    if (item) {
      setEditingItem(item);
      setFormTitle(item.title);
      setFormCategory(item.category);
      setFormAuthor(item.author);
      setFormFileUrl(item.fileUrl);
      setFormSlug(item.slug);
    } else {
      setEditingItem(null);
      setFormTitle("");
      setFormCategory("ضوابط شهرداری");
      setFormAuthor("واحد فنی ملکیسم");
      setFormFileUrl("https://example.com/file.pdf");
      setFormSlug(`lib-${Date.now()}`);
    }
    setShowModal(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle) return;

    if (editingItem) {
      setItems(items.map(i => i.id === editingItem.id ? { ...i, title: formTitle, category: formCategory, author: formAuthor, fileUrl: formFileUrl, slug: formSlug } : i));
      alert("سند کتابخانه با موفقیت ویرایش شد.");
    } else {
      const newItem = {
        id: `LIB-${Date.now().toString().slice(-3)}`,
        title: formTitle,
        category: formCategory,
        author: formAuthor,
        date: "امروز",
        fileUrl: formFileUrl,
        slug: formSlug,
        downloadsCount: 0
      };
      setItems([newItem, ...items]);
      alert("سند جدید به کتابخانه اضافه شد.");
    }
    setShowModal(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("آیا از حذف این سند اطمینان دارید؟")) {
      setItems(items.filter(i => i.id !== id));
      alert("سند حذف شد.");
    }
  };

  const filtered = items.filter(i => {
    const matchesCat = selectedCategory === "ALL" || i.category === selectedCategory;
    const matchesSearch = i.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6`} dir={dir}>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-1">کتابخانه تخصصی اسناد</span>
          <h1 className="text-2xl font-black text-slate-900">مدیریت مرجع اسناد مهندسی و ضوابط شهرداری</h1>
          <p className="text-xs text-slate-500 mt-1">بارگذاری فایل‌های PDF، مدیریت مقالات فنی و رفرنس‌های تخصصی ساختمانی.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => handleOpenModal()} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition whitespace-nowrap">+ بارگذاری سند جدید</button>
          <Link href={`/${locale}/admin/content-hub`} className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap">{dir === 'rtl' ? '← هاب محتوا' : 'Content Hub →'}</Link>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
          <div className="flex flex-wrap gap-2 text-xs">
            {["ALL", "ضوابط شهرداری", "اسناد مهندسی"].map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3.5 py-2 rounded-xl font-bold transition ${selectedCategory === cat ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                {cat === "ALL" ? "همه دسته‌ها" : cat}
              </button>
            ))}
          </div>
          <input type="text" placeholder="جستجو در اسناد کتابخانه..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="border border-slate-200 rounded-xl px-3.5 py-2 text-xs outline-none w-full sm:w-72 bg-slate-50" />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900">📚 لیست اسناد و فایل‌های کتابخانه ({filtered.length} مورد)</h3>
        <div className="overflow-x-auto">
          <table className={`w-full ${dir === 'rtl' ? 'text-right' : 'text-left'} text-xs`}>
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-medium">
                <th className="pb-3">عنوان سند و دسته</th>
                <th className="pb-3">ناشر / مرجع</th>
                <th className="pb-3">تعداد دانلود</th>
                <th className="pb-3">لینک مشاهده / دانلود</th>
                <th className="pb-3 text-center">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(item => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-4 font-bold text-slate-900 max-w-xs">
                    {item.title}
                    <span className="block text-[10px] text-indigo-600 font-normal">{item.category}</span>
                  </td>
                  <td className="py-4 text-slate-600">{item.author}</td>
                  <td className="py-4 text-emerald-600 font-bold" dir="ltr">📥 {item.downloadsCount} بار</td>
                  <td className="py-4">
                    <a href={`/${locale}/library/${item.slug}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1 whitespace-nowrap">
                      صفحه سند ↗
                    </a>
                  </td>
                  <td className="py-4 text-center space-x-2 space-x-reverse whitespace-nowrap">
                    <button onClick={() => handleOpenModal(item)} className="text-indigo-600 font-bold hover:underline">ویرایش</button>
                    <button onClick={() => handleDelete(item.id)} className="text-rose-600 font-bold hover:underline">حذف</button>
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
            <h3 className="text-base font-bold text-slate-900">{editingItem ? "✏️ ویرایش سند" : "➕ بارگذاری سند جدید"}</h3>
            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div><label className="block font-bold mb-1">عنوان سند:</label><input type="text" value={formTitle} onChange={e => setFormTitle(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none" required /></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div><label className="block font-bold mb-1">دسته:</label><select value={formCategory} onChange={e => setFormCategory(e.target.value)} className="w-full border rounded-xl px-3 py-2 bg-white"><option value="ضوابط شهرداری">ضوابط شهرداری</option><option value="اسناد مهندسی">اسناد مهندسی</option></select></div>
                <div><label className="block font-bold mb-1">مرجع:</label><input type="text" value={formAuthor} onChange={e => setFormAuthor(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none" required /></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div><label className="block font-bold mb-1">اسلاگ (Slug):</label><input type="text" value={formSlug} onChange={e => setFormSlug(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none font-mono" dir="ltr" required /></div>
                <div>
                  {/* 🌟 جایگزینی فیلد متنی ساده با کامپوننت انتخاب از مخزن و آپلود */}
                  <ImagePickerInput 
                    label="لینک فایل (URL)" 
                    name="fileUrl" 
                    defaultValue={formFileUrl}
                    category="library"
                    onChange={(url) => setFormFileUrl(url)}
                  />
                </div>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold transition">انصراف</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition">ذخیره</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}