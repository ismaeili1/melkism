import { prisma } from '@/lib/prisma';
import Link from "next/link";
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

interface MarketHubDetailPageProps {
  params: { slug: string; locale: string };
}

const rtlLocales = ["fa", "ar"];

// تابع دریافت جزئیات گزارش بازار از دیتابیس
async function getMarketReport(slug: string, locale: string) {
  const report = await prisma.marketReport.findUnique({
    where: { slug },
    include: {
      translations: { where: { locale } },
    },
  });

  if (!report) return null;

  const translation = report.translations[0] || {};

  return {
    ...report,
    title: translation.title || 'گزارش تحلیلی بدون عنوان',
    description: translation.description || 'محتوای گزارش در این زبان موجود نیست.',
  };
}

export default async function MarketHubDetailPage({ params }: MarketHubDetailPageProps) {
  const { slug, locale } = params;
  const currentLocale = locale || "fa";
  
  setRequestLocale(currentLocale);
  const isRtl = rtlLocales.includes(currentLocale);

  const report = await getMarketReport(slug, currentLocale);

  if (!report) {
    notFound();
  }

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 ${isRtl ? 'dir-rtl' : 'dir-ltr'} font-sans space-y-8`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div>
          <Link href={`/${currentLocale}/admin/market-hub`} className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100">
            {isRtl ? '← بازگشت به مدیریت هاب بازار' : '← Back to Market Hub'}
          </Link>
        </div>

        <div className="space-y-3">
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full inline-block">
            {report.region || 'هوش بازار و سرمایه‌گذاری'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            {report.title}
          </h1>
          <div className="text-xs text-slate-400 flex flex-wrap items-center gap-3 pt-1">
            <span>📊 شاخص بازار: <strong className="text-slate-700 font-mono">{report.marketIndex ?? 'N/A'}</strong></span>
            <span>•</span>
            <span>📅 تاریخ انتشار: <strong className="text-slate-700 font-mono">{new Date(report.createdAt).toLocaleDateString(currentLocale === 'fa' ? 'fa-IR' : 'en-US')}</strong></span>
          </div>
        </div>

        {report.imageUrl && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 max-h-[400px]">
            <img src={report.imageUrl} alt={report.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 text-sm leading-relaxed text-slate-700">
          <h3 className="font-bold text-slate-900 text-base pt-2">مشروح تحلیل‌های بازار:</h3>
          <p className="whitespace-pre-line leading-7">{report.description}</p>
          
          <div className="pt-4 flex items-center gap-3">
            {report.pdfLink && (
              <a href={report.pdfLink} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm transition inline-block">
                📥 دانلود نسخه کامل گزارش (PDF)
              </a>
            )}
            <button onClick={() => alert("لینک اشتراک‌گذاری کپی شد.")} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-3 rounded-xl transition">
              🔗 اشتراک‌گذاری گزارش
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}