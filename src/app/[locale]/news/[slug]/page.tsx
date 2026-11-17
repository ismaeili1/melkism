import { prisma } from '@/lib/prisma';
import Link from "next/link";
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

interface NewsDetailPageProps {
  params: { slug: string; locale: string };
}

const rtlLocales = ["fa", "ar"];

// تابع دریافت جزئیات خبر با استفاده از جدول ترجمه مجزا
async function getNewsDetail(slug: string, locale: string) {
  const newsItem = await prisma.news.findUnique({
    where: { slug },
    include: {
      translations: {
        where: { locale }, // فیلتر ترجمه دقیق بر اساس زبان فعال کاربر
      },
    },
  });

  if (!newsItem || !newsItem.published) return null;

  // استخراج ترجمه مربوط به زبان جاری (یا فال‌بک به اولین ترجمه موجود)
  const translation = newsItem.translations[0] || null;

  return {
    ...newsItem,
    title: translation?.title || 'Untitled Article',
    summary: translation?.summary || '',
    content: translation?.content || 'Content is not available in this language.',
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug, locale } = params;
  const currentLocale = locale || "fa";
  
  setRequestLocale(currentLocale);
  const isRtl = rtlLocales.includes(currentLocale);

  // فراخوانی داده‌ها از طریق معماری جدید
  const newsItem = await getNewsDetail(slug, currentLocale);

  if (!newsItem) {
    notFound();
  }

  return (
    <div 
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 font-sans space-y-8 ${isRtl ? 'dir-rtl' : 'dir-ltr'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <Link 
            href={`/${currentLocale}/news`} 
            className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100 transition shadow-sm"
          >
            {isRtl ? '← بازگشت به اخبار' : '← Back to News'}
          </Link>
        </div>

        <div className="space-y-3">
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full inline-block">
            {newsItem.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            {newsItem.title}
          </h1>
          <div className="text-xs text-slate-400 font-mono">
            {new Date(newsItem.createdAt).toLocaleDateString(currentLocale === 'fa' ? 'fa-IR' : 'en-US')}
          </div>
        </div>

        {newsItem.imageUrl && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 max-h-[400px]">
            <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-slate-700">
          {newsItem.summary && (
            <p className="text-base font-semibold text-slate-900 border-l-4 border-indigo-600 pl-4 py-1">
              {newsItem.summary}
            </p>
          )}
          <div className="whitespace-pre-line leading-7">
            {newsItem.content}
          </div>
        </div>
      </div>
    </div>
  );
}