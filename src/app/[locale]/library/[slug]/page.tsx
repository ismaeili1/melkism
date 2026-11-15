'use client';

import Link from "next/link";

interface LibraryDetailPageProps {
  params: { slug: string; locale: string };
}

export default function LibraryDetailPage({ params }: LibraryDetailPageProps) {
  const slug = params.slug;
  const locale = params.locale || "fa";

  // بانک اطلاعات نمونه اسناد و کتاب‌های تخصصی ملکیسم
  const libraryDatabase: Record<string, any> = {
    "official-transaction-guide": {
      title: "راهنمای جامع قانون الزام به ثبت رسمی معاملات اموال غیرمنقول",
      category: "کتاب الکترونیک / راهنما",
      author: "دفتر حقوقی و اسناد",
      date: "۱۴۰۵/۰۲/۱۰",
      fileType: "PDF",
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      description: "این سند شامل تمامی جزئیات اجرایی، تکالیف مشاورین املاک و دفاتر اسناد رسمی پیرامون قانون جدید ثبت رسمی است..."
    }
  };

  const documentItem = libraryDatabase[slug] || {
    title: `سند تخصصی با شناسه: ${slug}`,
    category: "اسناد و استانداردهای مهندسی",
    author: "مرکز اسناد ملکیسم",
    date: "امروز",
    fileType: "PDF / ZIP",
    imageUrl: "https://images.unsplash.com/photo-1568667256549-094345857637",
    description: "این مستند و فایل مرجع از مخزن کتابخانه دیجیتال ملکیسم فراخوانی شده است. مشروح اطلاعات، پیوست‌ها و فایل‌های دانلودی این سند به زودی در دسترس قرار می‌گیرد."
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 dir-rtl font-sans space-y-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div>
          <Link href={`/${locale}/admin/library`} className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100">
            ← بازگشت به مدیریت کتابخانه
          </Link>
        </div>

        <div className="space-y-3">
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full inline-block">
            {documentItem.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            {documentItem.title}
          </h1>
          <div className="text-xs text-slate-400 flex items-center gap-3 pt-1">
            <span>✍️ ناشر / نویسنده: <strong className="text-slate-700">{documentItem.author}</strong></span>
            <span>•</span>
            <span>📅 تاریخ انتشار: <strong className="text-slate-700 font-mono">{documentItem.date}</strong></span>
            <span>•</span>
            <span>📁 فرمت: <strong className="text-indigo-600 font-mono">{documentItem.fileType}</strong></span>
          </div>
        </div>

        {documentItem.imageUrl && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 max-h-[400px]">
            <img src={documentItem.imageUrl} alt={documentItem.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 text-sm leading-relaxed text-slate-700">
          <h3 className="font-bold text-slate-900 text-base">خلاصه و مشخصات سند:</h3>
          <p>{documentItem.description}</p>
          <div className="pt-4">
            <button onClick={() => alert("فایل سند با موفقیت دانلود شد.")} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm transition">
              📥 دانلود مستقیم فایل سند ({documentItem.fileType})
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}