'use client';

import { useTranslations } from 'next-intl';
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  createNewsManual, 
  createLibraryDocumentManual, 
  createMarketReportManual, 
  createExpertVipManual, 
  createPropertyManual 
} from "@/actions/content";

export default function CreateContentPage() {
  const t = useTranslations('AdminPanel');
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  const [activeTab, setActiveTab] = useState<"news" | "library" | "market" | "expert" | "property">("news");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ success: boolean; text: string } | null>(null);

  // فرم ثبت خبر
  async function handleNewsSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const res = await createNewsManual({
      title: fd.get("title") as string,
      slug: fd.get("slug") as string,
      summary: fd.get("summary") as string,
      content: fd.get("content") as string,
      category: fd.get("category") as string,
      imageUrl: fd.get("imageUrl") as string,
    });
    setLoading(false);
    setMessage({ success: res.success, text: res.success ? "خبر با موفقیت منتشر شد." : (res.error || "خطا") });
  }

  // فرم ثبت سند کتابخانه
  async function handleLibrarySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const res = await createLibraryDocumentManual({
      title: fd.get("title") as string,
      slug: fd.get("slug") as string,
      category: fd.get("category") as string,
      author: fd.get("author") as string,
      downloadUrl: fd.get("downloadUrl") as string,
      imageUrl: fd.get("imageUrl") as string,
      summary: fd.get("summary") as string,
    });
    setLoading(false);
    setMessage({ success: res.success, text: res.success ? "سند کتابخانه با موفقیت ثبت شد." : (res.error || "خطا") });
  }

  // فرم ثبت گزارش هوش بازار
  async function handleMarketSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const res = await createMarketReportManual({
      title: fd.get("title") as string,
      slug: fd.get("slug") as string,
      marketIndex: fd.get("marketIndex") as string,
      region: fd.get("region") as string,
      pdfLink: fd.get("pdfLink") as string,
      imageUrl: fd.get("imageUrl") as string,
      description: fd.get("description") as string,
    });
    setLoading(false);
    setMessage({ success: res.success, text: res.success ? "گزارش بازار با موفقیت ثبت شد." : (res.error || "خطا") });
  }

  // فرم ثبت پروفایل VIP متخصص
  async function handleExpertSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const res = await createExpertVipManual({
      fullName: fd.get("fullName") as string,
      specialty: fd.get("specialty") as string,
      licenseNumber: fd.get("licenseNumber") as string,
      city: fd.get("city") as string,
      mobile: fd.get("mobile") as string,
      bio: fd.get("bio") as string,
      isVip: fd.get("isVip") === "on",
      avatarUrl: fd.get("avatarUrl") as string,
    });
    setLoading(false);
    setMessage({ success: res.success, text: res.success ? "پروفایل VIP متخصص ایجاد شد." : (res.error || "خطا") });
  }

  // فرم ثبت آگهی ملکی
  async function handlePropertySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const res = await createPropertyManual({
      title: fd.get("title") as string,
      slug: fd.get("slug") as string,
      price: fd.get("price") as string,
      area: fd.get("area") as string,
      province: fd.get("province") as string,
      city: fd.get("city") as string,
      address: fd.get("address") as string,
      imageUrl: fd.get("imageUrl") as string,
      description: fd.get("description") as string,
    });
    setLoading(false);
    setMessage({ success: res.success, text: res.success ? "آگهی ملکی با موفقیت ثبت شد." : (res.error || "خطا") });
  }

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6 max-w-5xl mx-auto`} dir={dir}>
      
      {/* هدر */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            استودیو تولید دستی محتوا و آگهی
          </span>
          <h1 className="text-2xl font-black text-slate-900">{t('title')}</h1>
        </div>
        <Link 
          href={`/${locale}/admin/media-library`} 
          target="_blank"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap"
        >
          🖼️ باز کردن مخزن تصاویر ↗
        </Link>
      </div>

      {/* تب‌های فرم‌ها */}
      <div className="flex flex-wrap gap-2 bg-white border border-slate-200 p-2 rounded-2xl">
        <button onClick={() => { setActiveTab("news"); setMessage(null); }} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeTab === "news" ? "bg-indigo-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}>
          📰 تولید خبر
        </button>
        <button onClick={() => { setActiveTab("library"); setMessage(null); }} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeTab === "library" ? "bg-indigo-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}>
          📚 تولید سند کتابخانه
        </button>
        <button onClick={() => { setActiveTab("market"); setMessage(null); }} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeTab === "market" ? "bg-indigo-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}>
          📈 گزارش هوش بازار
        </button>
        <button onClick={() => { setActiveTab("expert"); setMessage(null); }} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeTab === "expert" ? "bg-indigo-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}>
          ⭐ پروفایل VIP متخصص
        </button>
        <button onClick={() => { setActiveTab("property"); setMessage(null); }} className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeTab === "property" ? "bg-indigo-600 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}>
          🏠 ثبت آگهی ملکی
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-xl text-xs font-bold ${message.success ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-rose-50 text-rose-700 border border-rose-200"}`}>
          {message.text}
        </div>
      )}

      {/* فرم تولید خبر */}
      {activeTab === "news" && (
        <form onSubmit={handleNewsSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900 border-b pb-3">{t('manageNews')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">عنوان خبر</label>
              <input name="title" required className="w-full border rounded-xl p-3 bg-slate-50 outline-none" />
            </div>
            <div>
              <label className="font-bold block mb-1">اسلاگ یکتا (Slug)</label>
              <input name="slug" required className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" dir="ltr" placeholder="news-slug-1" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">دسته‌بندی</label>
              <input name="category" defaultValue="اخبار کلان" className="w-full border rounded-xl p-3 bg-slate-50 outline-none" />
            </div>
            <div>
              <label className="font-bold block mb-1">آدرس تصویر شاخص (URL از مخزن تصاویر)</label>
              <input name="imageUrl" className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" dir="ltr" placeholder="https://..." />
            </div>
          </div>
          <div>
            <label className="font-bold text-xs block mb-1">خلاصه خبر</label>
            <textarea name="summary" rows={2} className="w-full border rounded-xl p-3 text-xs bg-slate-50 outline-none" />
          </div>
          <div>
            <label className="font-bold text-xs block mb-1">متن کامل خبر</label>
            <textarea name="content" required rows={5} className="w-full border rounded-xl p-3 text-xs bg-slate-50 outline-none" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-xs transition shadow-sm">
            {loading ? "در حال ثبت..." : "ثبت و انتشار آنی خبر"}
          </button>
        </form>
      )}

      {/* فرم تولید سند کتابخانه */}
      {activeTab === "library" && (
        <form onSubmit={handleLibrarySubmit} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900 border-b pb-3">افزودن سند تخصصی به کتابخانه</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">عنوان سند</label>
              <input name="title" required className="w-full border rounded-xl p-3 bg-slate-50 outline-none" />
            </div>
            <div>
              <label className="font-bold block mb-1">اسلاگ یکتا (Slug)</label>
              <input name="slug" required className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" dir="ltr" placeholder="lib-doc-1" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">دسته‌بندی</label>
              <input name="category" defaultValue="ضوابط شهرسازی" className="w-full border rounded-xl p-3 bg-slate-50 outline-none" />
            </div>
            <div>
              <label className="font-bold block mb-1">نویسنده / مرجع ناشر</label>
              <input name="author" defaultValue="معاونت شهرسازی" className="w-full border rounded-xl p-3 bg-slate-50 outline-none" />
            </div>
            <div>
              <label className="font-bold block mb-1">لینک دانلود فایل (PDF)</label>
              <input name="downloadUrl" className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" dir="ltr" placeholder="https://..." />
            </div>
          </div>
          <div>
            <label className="font-bold block mb-1">آدرس تصویر شاخص / جلد سند</label>
            <input name="imageUrl" className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono text-xs" dir="ltr" placeholder="https://..." />
          </div>
          <div>
            <label className="font-bold text-xs block mb-1">خلاصه و معرفی سند</label>
            <textarea name="summary" rows={3} className="w-full border rounded-xl p-3 text-xs bg-slate-50 outline-none" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-xs transition shadow-sm">
            {loading ? "در حال ثبت..." : "ثبت و انتشار سند کتابخانه"}
          </button>
        </form>
      )}

      {/* فرم گزارش هوش بازار */}
      {activeTab === "market" && (
        <form onSubmit={handleMarketSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900 border-b pb-3">ثبت گزارش تحلیل و هوش بازار</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">عنوان گزارش</label>
              <input name="title" required className="w-full border rounded-xl p-3 bg-slate-50 outline-none" />
            </div>
            <div>
              <label className="font-bold block mb-1">اسلاگ یکتا (Slug)</label>
              <input name="slug" required className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" dir="ltr" placeholder="market-report-1" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">شاخص بازار (مثلاً +۴.۲٪)</label>
              <input name="marketIndex" defaultValue="+۴.۲٪" className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" />
            </div>
            <div>
              <label className="font-bold block mb-1">منطقه / استان</label>
              <input name="region" defaultValue="تهران و حومه" className="w-full border rounded-xl p-3 bg-slate-50 outline-none" />
            </div>
            <div>
              <label className="font-bold block mb-1">لینک فایل گزارش (PDF)</label>
              <input name="pdfLink" className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" dir="ltr" placeholder="https://..." />
            </div>
          </div>
          <div>
            <label className="font-bold block mb-1">آدرس تصویر شاخص</label>
            <input name="imageUrl" className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono text-xs" dir="ltr" placeholder="https://..." />
          </div>
          <div>
            <label className="font-bold text-xs block mb-1">شرح و چکیده گزارش تحلیل بازار</label>
            <textarea name="description" rows={4} className="w-full border rounded-xl p-3 text-xs bg-slate-50 outline-none" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-xs transition shadow-sm">
            {loading ? "در حال ثبت..." : "انتشار گزارش هوش بازار"}
          </button>
        </form>
      )}

      {/* فرم ایجاد پروفایل VIP متخصص */}
      {activeTab === "expert" && (
        <form onSubmit={handleExpertSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900 border-b pb-3">فرم ایجاد پروفایل VIP متخصصین ملکیست</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">نام و نام خانوادگی</label>
              <input name="fullName" required className="w-full border rounded-xl p-3 bg-slate-50 outline-none" />
            </div>
            <div>
              <label className="font-bold block mb-1">تخصص اصلی</label>
              <input name="specialty" required placeholder="ارزیاب رسمی / مهندس ناظر" className="w-full border rounded-xl p-3 bg-slate-50 outline-none" />
            </div>
            <div>
              <label className="font-bold block mb-1">شماره پروانه / نظام مهندسی</label>
              <input name="licenseNumber" className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" dir="ltr" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">شهر فعالیت</label>
              <input name="city" required defaultValue="تهران" className="w-full border rounded-xl p-3 bg-slate-50 outline-none" />
            </div>
            <div>
              <label className="font-bold block mb-1">شماره همراه</label>
              <input name="mobile" className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" dir="ltr" />
            </div>
            <div>
              <label className="font-bold block mb-1">لینک آواتار / تصویر پرسنلی (از مخزن)</label>
              <input name="avatarUrl" className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" dir="ltr" placeholder="https://..." />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="isVip" id="isVip" defaultChecked className="w-4 h-4 accent-indigo-600 cursor-pointer" />
            <label htmlFor="isVip" className="text-xs font-bold text-indigo-700 cursor-pointer">اعطای نشان کارشناس برجسته و VIP ⭐</label>
          </div>
          <div>
            <label className="font-bold text-xs block mb-1">بیوگرافی و سوابق کاری</label>
            <textarea name="bio" rows={3} className="w-full border rounded-xl p-3 text-xs bg-slate-50 outline-none" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-xs transition shadow-sm">
            {loading ? "در حال ثبت..." : "ایجاد پروفایل VIP متخصص"}
          </button>
        </form>
      )}

      {/* فرم ثبت آگهی ملکی */}
      {activeTab === "property" && (
        <form onSubmit={handlePropertySubmit} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900 border-b pb-3">ثبت آگهی ملکی جدید</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">عنوان آگهی</label>
              <input name="title" required className="w-full border rounded-xl p-3 bg-slate-50 outline-none" placeholder="آپارتمان لوکس ۱۲۰ متری" />
            </div>
            <div>
              <label className="font-bold block mb-1">اسلاگ یکتا (Slug)</label>
              <input name="slug" required className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" dir="ltr" placeholder="luxury-apt-120m" />
            </div>
            <div>
              <label className="font-bold block mb-1">قیمت کل</label>
              <input name="price" required className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" placeholder="۱۲,۵۰۰,۰۰۰,۰۰۰ تومان" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">متراژ</label>
              <input name="area" required className="w-full border rounded-xl p-3 bg-slate-50 outline-none" placeholder="۱۲۰ متر مربع" />
            </div>
            <div>
              <label className="font-bold block mb-1">استان</label>
              <input name="province" required defaultValue="تهران" className="w-full border rounded-xl p-3 bg-slate-50 outline-none" />
            </div>
            <div>
              <label className="font-bold block mb-1">شهر / منطقه</label>
              <input name="city" required defaultValue="تهران (منطقه ۱)" className="w-full border rounded-xl p-3 bg-slate-50 outline-none" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">آدرس دقیق</label>
              <input name="address" className="w-full border rounded-xl p-3 bg-slate-50 outline-none" placeholder="خیابان فرمانیه..." />
            </div>
            <div>
              <label className="font-bold block mb-1">لینک تصویر اصلی (URL)</label>
              <input name="imageUrl" className="w-full border rounded-xl p-3 bg-slate-50 outline-none font-mono" dir="ltr" placeholder="https://..." />
            </div>
          </div>
          <div>
            <label className="font-bold text-xs block mb-1">توضیحات و امکانات ملک</label>
            <textarea name="description" rows={4} className="w-full border rounded-xl p-3 text-xs bg-slate-50 outline-none" placeholder="دارای لابی، استخر، سونا، پارکینگ اختصاصی..." />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl text-xs transition shadow-sm">
            {loading ? "در حال ثبت..." : "ثبت و انتشار آگهی ملکی"}
          </button>
        </form>
      )}

    </div>
  );
}