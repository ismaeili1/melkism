import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

interface RuleDetailPageProps {
  params: { slug: string; locale: string };
}

// تابع دریافت قانون بر اساس کد (slug/codeNumber) و زبان جاری
async function getRuleBySlug(codeNumber: string, locale: string) {
  const regulation = await prisma.regulation.findUnique({
    where: { codeNumber },
    include: {
      translations: {
        where: { locale },
      },
    },
  });

  if (!regulation) return null;

  return {
    id: regulation.id,
    codeNumber: regulation.codeNumber,
    category: regulation.category,
    imageUrl: regulation.imageUrl,
    createdAt: regulation.createdAt,
    title: regulation.translations[0]?.title || 'قانون بدون عنوان',
    fullText: regulation.translations[0]?.fullText || 'متن قانون در دسترس نیست.',
  };
}

export default async function RuleDetailPage({ params }: RuleDetailPageProps) {
  const { slug, locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations('RuleDetail');
  const dir = ['fa', 'ar'].includes(locale) ? 'rtl' : 'ltr';

  // فراخوانی داده‌های قانون از دیتابیس
  const ruleItem = await getRuleBySlug(slug, locale);

  // اگر قانون در دیتابیس پیدا نشد، صفحه 404 برمی‌گردانیم
  if (!ruleItem) {
    notFound();
  }

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 ${dir === 'rtl' ? 'dir-rtl' : 'dir-ltr'} font-sans space-y-8`}>
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div>
          <Link href={`/${locale}/admin/rules`} className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100">
            ← {t('backToAdmin')}
          </Link>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full inline-block">
              {ruleItem.category}
            </span>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block">
              🟢 فعال در سامانه
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            {ruleItem.title}
          </h1>
          <div className="text-xs text-slate-400 flex flex-wrap items-center gap-3 pt-1">
            <span>🏛️ {t('publisherLabel')}: <strong className="text-slate-700">مرکز اسناد ملکیسم</strong></span>
            <span>•</span>
            <span>📅 {t('dateLabel')}: <strong className="text-slate-700 font-mono">{new Date(ruleItem.createdAt).toLocaleDateString('fa-IR')}</strong></span>
          </div>
        </div>

        {ruleItem.imageUrl && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 max-h-[350px]">
            <img src={ruleItem.imageUrl} alt={ruleItem.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-slate-700">
          <div className="space-y-4 pt-2">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">{t('articlesTitle')}</h3>
            
            <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl space-y-2">
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">{ruleItem.fullText}</p>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-3 border-t border-slate-100">
            <a href="#download" onClick={(e) => { e.preventDefault(); alert("فایل PDF متن کامل قانون دانلود شد."); }} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm transition inline-block">
              {t('downloadPdf')}
            </a>
            <button onClick={() => alert("لینک اشتراک‌گذاری کپی شد.")} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-3 rounded-xl transition">
              {t('shareRule')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}