"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ImagePickerInput from "@/components/admin/ImagePickerInput";

export default function AdminNewsManagementPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingNews, setEditingNews] = useState<any | null>(null);

  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState("تحلیل بازار");
  const [formContent, setFormContent] = useState("");
  const [formAuthor, setFormAuthor] = useState("تیم تحریریه ملکیسم");
  const [formImageUrl, setFormImageUrl] = useState("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb");
  const [formSlug, setFormSlug] = useState("market-analysis-fall-1405");

  const [newsList, setNewsList] = useState([
    {
      id: "NEWS-101",
      title: "تحلیل روند قیمت مسکن در مناطق ۲۲ گانه تهران - پاییز ۱۴۰۵",
      category: "تحلیل بازار",
      author: "دکتر مرتضی اسماعیلی",
      date: "۱۴۰۵/۰۷/۱۶",
      status: "منتشرشده",
      likesCount: 142,
      commentsCount: 28,
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      slug: "market-analysis-fall-1405",
      content: "بررسی آمارهای رسمی معاملات مسکن نشان‌دهنده ورود بازار به فاز تعادل نسبی است...",
    }
  ]);

  const handleOpenModal = (news: any = null) => {
    if (news) {
      setEditingNews(news);
      setFormTitle(news.title);
      setFormCategory(news.category);
      setFormContent(news.content);
      setFormAuthor(news.author);
      setFormImageUrl(news.imageUrl || "");
      setFormSlug(news.slug || "");
    } else {
      setEditingNews(null);
      setFormTitle("");
      setFormCategory("تحلیل بازار");
      setFormContent("");
      setFormAuthor("مدیر ارشد / تحریریه");
      setFormImageUrl("https://images.unsplash.com/photo-1512917774080-9991f1c4c750");
      setFormSlug(`news-${Date.now()}`);
    }
    setShowModal(true);
  };

  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle || !formContent) return;

    if (editingNews) {
      setNewsList(newsList.map(n => n.id === editingNews.id ? { 
        ...n, title: formTitle, category: formCategory, content: formContent, author: formAuthor, imageUrl: formImageUrl, slug: formSlug 
      } : n));
      alert("خبر با موفقیت ویرایش شد.");
    } else {
      const newEntry = {
        id: `NEWS-${Date.now().toString().slice(-3)}`,
        title: formTitle,
        category: formCategory,
        author: formAuthor,
        date: "امروز",
        status: "منتشرشده",
        likesCount: 0,
        commentsCount: 0,
        imageUrl: formImageUrl,
        slug: formSlug,
        content: formContent,
      };
      setNewsList([newEntry, ...newsList]);
      alert("خبر جدید با موفقیت منتشر شد.");
    }
    setShowModal(false);
  };

  const handleAIGenerateNews = () => {
    setFormTitle("گزارش هوشمند هوش بازار: فرصت‌های سرمایه‌گذاری در املاک تجاری تهران");
    setFormCategory("تحلیل بازار");
    setFormContent("این گزارش به صورت خودکار توسط موتور هوش مصنوعی ملکیسم تدوین شده است.");
    setFormAuthor("هوش مصنوعی ملکیسم");
    setFormImageUrl("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab");
    setFormSlug("ai-commercial-market-report");
    setShowModal(true);
  };

  const handleDeleteNews = (id: string) => {
    if (confirm("آیا از حذف این خبر اطمینان دارید؟")) {
      setNewsList(newsList.filter(n => n.id !== id));
      alert("خبر با موفقیت حذف شد.");
    }
  };

  const filteredNews = newsList.filter(n => {
    const matchesCat = selectedCategory === "ALL" || n.category === selectedCategory;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6`} dir={dir}>
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            مدیریت تخصصی اخبار، گالری تصاویر و لینک‌های مشاهده
          </span>
          <h1 className="text-2xl font-black text-slate-900">مدیریت اخبار، مقالات و هوش رسانه‌ای ملکیسم</h1>
          <p className="text-xs text-slate-500 mt-1">مدیریت تصاویر، لینک‌های نمایشی، انتشار دستی/هوشمند و نظارت بر تعاملات.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={handleAIGenerateNews} className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap">
            ✨ تولید خبر با هوش مصنوعی (AI)
          </button>
          <button onClick={() => handleOpenModal()} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap">
            + نوشتن خبر جدید
          </button>
          <Link href={`/${locale}/admin/content-hub`} className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap">
            {dir === 'rtl' ? '← بازگشت به هاب محتوا' : 'Content Hub →'}
          </Link>
        </div>
      </div>

      {/* فیلترها */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
          <div className="flex flex-wrap gap-2 text-xs items-center w-full sm:w-auto">
            <span className="font-bold text-slate-700 ml-1">دسته‌بندی‌ها:</span>
            {["ALL", "تحلیل بازار", "معماری و شهرسازی", "حقوقی و ثبتی"].map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl font-bold transition ${selectedCategory === cat ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat === "ALL" ? "همه دسته‌ها" : cat}
              </button>
            ))}
          </div>
          <div className="w-full sm:w-72">
            <input 
              type="text" 
              placeholder="جستجو در عنوان اخبار..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-xs outline-none focus:border-indigo-600 bg-slate-50/50"
            />
          </div>
        </div>
      </div>

      {/* جدول اخبار */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h3 className="text-sm font-bold text-slate-900">
            📰 لیست اخبار و مقالات ({filteredNews.length} مورد)
          </h3>
          <span className="text-[11px] text-slate-400">دارای تصویر شاخص، لینک مشاهده و نظارت بر تعاملات</span>
        </div>

        {filteredNews.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-xs">هیچ خبری یافت نشد.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className={`w-full ${dir === 'rtl' ? 'text-right' : 'text-left'} text-xs`}>
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-medium">
                  <th className="pb-3">تصویر</th>
                  <th className="pb-3">عنوان خبر و دسته</th>
                  <th className="pb-3">نویسنده</th>
                  <th className="pb-3">تعاملات</th>
                  <th className="pb-3">لینک مشاهده زنده</th>
                  <th className="pb-3 text-center">عملیات مدیریت</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredNews.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-3">
                      <img src={item.imageUrl} alt={item.title} className="w-12 h-10 rounded-lg object-cover border border-slate-200" />
                    </td>
                    <td className="py-4 font-bold text-slate-900 max-w-xs">
                      {item.title}
                      <span className="block text-[10px] text-indigo-600 font-normal">دسته: {item.category}</span>
                    </td>
                    <td className="py-4 text-slate-600">{item.author}</td>
                    <td className="py-4 text-slate-700" dir="ltr">❤️ {item.likesCount} | 💬 {item.commentsCount}</td>
                    <td className="py-4">
                      <a href={`/${locale}/news/${item.slug}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1 whitespace-nowrap">
                        مشاهده خبر ↗
                      </a>
                    </td>
                    <td className="py-4 text-center space-x-2 space-x-reverse whitespace-nowrap">
                      <button onClick={() => handleOpenModal(item)} className="text-indigo-600 font-bold hover:underline">ویرایش</button>
                      <button onClick={() => handleDeleteNews(item.id)} className="text-rose-600 font-bold hover:underline">حذف</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* مودال ایجاد/ویرایش خبر */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-صفحه مدیریت اخبار و مقالات در ادمین (`(admin)/admin/news/page.tsx`) شما در حال حاضر از مسیرهای ثابت استفاده می‌کند. برای اینکه این صفحه نیز کاملاً با معماری چندزبانه (پشتیبانی از ۱۰ زبان پروژه از طریق `[locale]`) سازگار باشد، از `useParams` برای دریافت زبان فعال استفاده می‌کنیم تا جهت‌دهی صفحه (`dir`)، لینک‌های ناوبری هاب محتوا و لینک‌های مشاهده زنده اخبار به صورت پویا تنظیم شوند.

### اصلاح فایل `src/app/[locale]/(admin)/admin/news/page.tsx`:

```typescript
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ImagePickerInput from "@/components/admin/ImagePickerInput";

export default function AdminNewsManagementPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingNews, setEditingNews] = useState<any | null>(null);

  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState("تحلیل بازار");
  const [formContent, setFormContent] = useState("");
  const [formAuthor, setFormAuthor] = useState("تیم تحریریه ملکیسم");
  const [formImageUrl, setFormImageUrl] = useState("[https://images.unsplash.com/photo-1542314831-068cd1dbfeeb](https://images.unsplash.com/photo-1542314831-068cd1dbfeeb)");
  const [formSlug, setFormSlug] = useState("market-analysis-fall-1405");

  const [newsList, setNewsList] = useState([
    {
      id: "NEWS-101",
      title: "تحلیل روند قیمت مسکن در مناطق ۲۲ گانه تهران - پاییز ۱۴۰۵",
      category: "تحلیل بازار",
      author: "دکتر مرتضی اسماعیلی",
      date: "۱۴۰۵/۰۷/۱۶",
      status: "منتشرشده",
      likesCount: 142,
      commentsCount: 28,
      imageUrl: "[https://images.unsplash.com/photo-1542314831-068cd1dbfeeb](https://images.unsplash.com/photo-1542314831-068cd1dbfeeb)",
      slug: "market-analysis-fall-1405",
      content: "بررسی آمارهای رسمی معاملات مسکن نشان‌دهنده ورود بازار به فاز تعادل نسبی است...",
    }
  ]);

  const handleOpenModal = (news: any = null) => {
    if (news) {
      setEditingNews(news);
      setFormTitle(news.title);
      setFormCategory(news.category);
      setFormContent(news.content);
      setFormAuthor(news.author);
      setFormImageUrl(news.imageUrl || "");
      setFormSlug(news.slug || "");
    } else {
      setEditingNews(null);
      setFormTitle("");
      setFormCategory("تحلیل بازار");
      setFormContent("");
      setFormAuthor("مدیر ارشد / تحریریه");
      setFormImageUrl("[https://images.unsplash.com/photo-1512917774080-9991f1c4c750](https://images.unsplash.com/photo-1512917774080-9991f1c4c750)");
      setFormSlug(`news-${Date.now()}`);
    }
    setShowModal(true);
  };

  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle || !formContent) return;

    if (editingNews) {
      setNewsList(newsList.map(n => n.id === editingNews.id ? { 
        ...n, title: formTitle, category: formCategory, content: formContent, author: formAuthor, imageUrl: formImageUrl, slug: formSlug 
      } : n));
      alert("خبر با موفقیت ویرایش شد.");
    } else {
      const newEntry = {
        id: `NEWS-${Date.now().toString().slice(-3)}`,
        title: formTitle,
        category: formCategory,
        author: formAuthor,
        date: "امروز",
        status: "منتشرشده",
        likesCount: 0,
        commentsCount: 0,
        imageUrl: formImageUrl,
        slug: formSlug,
        content: formContent,
      };
      setNewsList([newEntry, ...newsList]);
      alert("خبر جدید با موفقیت منتشر شد.");
    }
    setShowModal(false);
  };

  const handleAIGenerateNews = () => {
    setFormTitle("گزارش هوشمند هوش بازار: فرصت‌های سرمایه‌گذاری در املاک تجاری تهران");
    setFormCategory("تحلیل بازار");
    setFormContent("این گزارش به صورت خودکار توسط موتور هوش مصنوعی ملکیسم تدوین شده است.");
    setFormAuthor("هوش مصنوعی ملکیسم");
    setFormImageUrl("[https://images.unsplash.com/photo-1486406146926-c627a92ad1ab](https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)");
    setFormSlug("ai-commercial-market-report");
    setShowModal(true);
  };

  const handleDeleteNews = (id: string) => {
    if (confirm("آیا از حذف این خبر اطمینان دارید؟")) {
      setNewsList(newsList.filter(n => n.id !== id));
      alert("خبر با موفقیت حذف شد.");
    }
  };

  const filteredNews = newsList.filter(n => {
    const matchesCat = selectedCategory === "ALL" || n.category === selectedCategory;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6`} dir={dir}>
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            مدیریت تخصصی اخبار، گالری تصاویر و لینک‌های مشاهده
          </span>
          <h1 className="text-2xl font-black text-slate-900">مدیریت اخبار، مقالات و هوش رسانه‌ای ملکیسم</h1>
          <p className="text-xs text-slate-500 mt-1">مدیریت تصاویر، لینک‌های نمایشی، انتشار دستی/هوشمند و نظارت بر تعاملات.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={handleAIGenerateNews} className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap">
            ✨ تولید خبر با هوش مصنوعی (AI)
          </button>
          <button onClick={() => handleOpenModal()} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap">
            + نوشتن خبر جدید
          </button>
          <Link className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap" href="{`/${locale}/admin/content-hub`}">
            {dir === 'rtl' ? '← بازگشت به هاب محتوا' : 'Content Hub →'}
          </Link>
        </div>
      </div>

      {/* فیلترها */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
          <div className="flex flex-wrap gap-2 text-xs items-center w-full sm:w-auto">
            <span className="font-bold text-slate-700 ml-1">دسته‌بندی‌ها:</span>
            {["ALL", "تحلیل بازار", "معماری و شهرسازی", "حقوقی و ثبتی"].map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl font-bold transition ${selectedCategory === cat ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat === "ALL" ? "همه دسته‌ها" : cat}
              </button>
            ))}
          </div>
          <div className="w-full sm:w-72">
            <input 
              type="text" 
              placeholder="جستجو در عنوان اخبار..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-3.5 py-2 text-xs outline-none focus:border-indigo-600 bg-slate-50/50"
            />
          </div>
        </div>
      </div>

      {/* جدول اخبار */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h3 className="text-sm font-bold text-slate-900">
            📰 لیست اخبار و مقالات ({filteredNews.length} مورد)
          </h3>
          <span className="text-[11px] text-slate-400">دارای تصویر شاخص، لینک مشاهده و نظارت بر تعاملات</span>
        </div>

        {filteredNews.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-xs">هیچ خبری یافت نشد.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className={`w-full ${dir === 'rtl' ? 'text-right' : 'text-left'} text-xs`}>
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-medium">
                  <th className="pb-3">تصویر</th>
                  <th className="pb-3">عنوان خبر و دسته</th>
                  <th className="pb-3">نویسنده</th>
                  <th className="pb-3">تعاملات</th>
                  <th className="pb-3">لینک مشاهده زنده</th>
                  <th className="pb-3 text-center">عملیات مدیریت</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredNews.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-3">
                      <img src={item.imageUrl} alt={item.title} className="w-12 h-10 rounded-lg object-cover border border-slate-200" />
                    </td>
                    <td className="py-4 font-bold text-slate-900 max-w-xs">
                      {item.title}
                      <span className="block text-[10px] text-indigo-600 font-normal">دسته: {item.category}</span>
                    </td>
                    <td className="py-4 text-slate-600">{item.author}</td>
                    <td className="py-4 text-slate-700" dir="ltr">❤️ {item.likesCount} | 💬 {item.commentsCount}</td>
                    <td className="py-4">
                      <a href={`/${locale}/news/${item.slug}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1 whitespace-nowrap">
                        مشاهده خبر ↗
                      </a>
                    </td>
                    <td className="py-4 text-center space-x-2 space-x-reverse whitespace-nowrap">
                      <button onClick={() => handleOpenModal(item)} className="text-indigo-600 font-bold hover:underline">ویرایش</button>
                      <button onClick={() => handleDeleteNews(item.id)} className="text-rose-600 font-bold hover:underline">حذف</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* مودال ایجاد/ویرایش خبر */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl space-y-4 shadow-xl border border-slate-200 my-8">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                {editingNews ? "✏️ ویرایش خبر، تصویر و لینک" : "➕ ایجاد خبر جدید و گالری تصاویر"}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
            </div>

            <form onSubmit={handleSaveNews} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 font-bold mb-1">عنوان خبر:</label>
                <input type="text" value={formTitle} onChange={e => setFormTitle(e.target.value)} className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-indigo-600" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-bold mb-1">دسته‌بندی:</label>
                  <select value={formCategory} onChange={e => setFormCategory(e.target.value)} className="w-full border border-slate-200 rounded-xl px-3 py-2.5 bg-white outline-none">
                    <option value="تحلیل بازار">تحلیل بازار</option>
                    <option value="معماری و شهرسازی">معماری و شهرسازی</option>
                    <option value="حقوقی و ثبتی">حقوقی و ثبتی</option>
                    <option value="سرمایه‌گذاری">سرمایه‌گذاری</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 font-bold mb-1">نویسنده:</label>
                  <input type="text" value={formAuthor} onChange={e => setFormAuthor(e.target.value)} className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
                <div>
                  <label className="block text-slate-600 font-bold mb-1">لینک اختصاصی (Slug):</label>
                  <input type="text" value={formSlug} onChange={e => setFormSlug(e.target.value)} placeholder="market-analysis-1405" className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none font-mono" dir="ltr" required />
                </div>
                <div>
                  <ImagePickerInput category="news" defaultValue="{formImageUrl}" label="آدرس تصویر شاخص (URL)" name="imageUrl" onChange="{(url)"> setFormImageUrl(url)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">متن کامل خبر:</label>
                <textarea value={formContent} onChange={e => setFormContent(e.target.value)} rows={5} className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:border-indigo-600" required></textarea>
              </div>

              <div className="pt-2 flex gap-2 justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition">انصراف</button>
                <button type="submit" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-sm transition">
                  {editingNews ? "ذخیره تغییرات" : "انتشار نهایی"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}