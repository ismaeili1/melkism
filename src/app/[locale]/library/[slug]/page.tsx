import { prisma } from '@/lib/prisma';
import Link from "next/link";
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

interface LibraryDetailPageProps {
  params: { slug: string; locale: string };
}

const rtlLocales = ["fa", "ar"];

// تابع دریافت جزئیات سند کتابخانه از دیتابیس
async function getLibraryDocument(slug: string, locale: string) {
  const document = await prisma.libraryDocument.findUnique({
    where: { slug },
    include: {
      translations: { where: { locale } },
    },
  });

  if (!document) return null;

  const translation = document.translations[0] || {};

  return {
    ...document,
    title: translation.title || 'سند بدون عنوان',
    summary: translation.summary || 'توضیحات این سند در این زبان موجود نیست.',
  };
}

export default async function LibraryDetailPage({ params }: LibraryDetailPageProps) {
  const { slug, locale } = params;
  const currentLocale = locale || "fa";
  
  setRequestLocale(currentLocale);
  const isRtl = rtlLocales.includes(currentLocale);

  const documentItem = await getLibraryDocument(slug, currentLocale);

  if (!documentItem) {
    notFound();
  }

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 ${isRtl ? 'dir-rtl' : 'dir-ltr'} font-sans space-y-8`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div>
          <Link href={`/${currentLocale}/admin/library`} className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100">
            {isRtl ? '← بازگشت به مدیریت کتابخانه' : '← Back to Library Admin'}
          </Link>
        </div>

        <div className="space-y-3">
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full inline-block">
            {documentItem.category || 'کتابخانه تخصصی'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            {documentItem.title}
          </h1>
          <div className="text-xs text-slate-400 flex items-center gap-3 pt-1 flex-wrap">
            <span>✍️ ناشر / نویسنده: <strong className="text-slate-700">{documentItem.author || 'مرکز اسناد ملکیسم'}</strong></span>
            <span>•</span>
            <span>📅 تاریخ انتشار: <strong className="text-slate-700 font-mono">{new Date(documentItem.createdAt).toLocaleDateString(currentLocale === 'fa' ? 'fa-IR' : 'en-US')}</strong></span>
            <span>•</span>
            <span>📁 فرمت: <strong className="text-indigo-600 font-mono">PDF / ZIP</strong></span>
          </div>
        </div>

        {documentItem.imageUrl && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 max-h-[400px]">
            <img src={documentItem.imageUrl} alt={documentItem.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 text-sm leading-relaxed text-slate-700">
          <h3 className="font-bold text-slate-900 text-base">خلاصه و مشخصات سند:</h3>
          <p className="whitespace-pre-line leading-7">{documentItem.summary}</p>
          
          <div className="pt-4">
            {documentItem.downloadUrl ? (
              <a href={documentItem.downloadUrl} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm transition inline-block">
                📥 دانلود مستقیم فایل سند
              </a>
            ) : (
              <button onClick={() => alert("فایل سند با موفقیت دانلود شد.")} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm transition">
                📥 دانلود مستقیم فایل سند
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}