import { prisma } from '@/lib/prisma';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

interface PageProps {
  params: { locale: string };
}

const rtlLocales = ["fa", "ar"];

// تابع دریافت قوانین از پایگاه داده بر اساس زبان فعال کاربر
async function getRegulationsFromDb(locale: string) {
  const regulations = await prisma.regulation.findMany({
    include: {
      translations: {
        where: { locale },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  return regulations.map((reg) => {
    const translation = reg.translations[0] || {};
    return {
      id: reg.id,
      codeNumber: reg.codeNumber,
      category: reg.category || 'حقوقی و ثبتی',
      imageUrl: reg.imageUrl,
      title: translation.title || 'قانون بدون عنوان',
      summary: translation.fullText ? translation.fullText.substring(0, 150) + '...' : 'توضیحات در دسترس نیست.',
    };
  });
}

export default async function RegulationsPage({ params }: PageProps) {
  const { locale } = params;
  setRequestLocale(locale);
  const isRtl = rtlLocales.includes(locale);

  // بارگذاری ترجمه‌های سیستم از next-intl (برای هماهنگی با فایل‌های messages/*.json)
  const t = await getTranslations('RegulationsPage');

  // دریافت قوانین واقعی از پایگاه داده
  const regulationsList = await getRegulationsFromDb(locale);

  return (
    <div className={`space-y-8 p-6 sm:p-10 ${isRtl ? 'dir-rtl' : 'dir-ltr'} font-sans`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="border-b border-slate-200 pb-4 space-y-2">
        <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block">
          📚 LEGAL & REGULATIONS HUB
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          {t('title') || 'قوانین و حقوق املاک'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          {t('desc') || 'مجموعه قوانین حقوقی، مالیاتی و ساختمانی در حوزه‌های داخلی و بین‌المللی.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {regulationsList.length > 0 ? (
          regulationsList.map((reg) => (
            <div key={reg.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3 hover:border-indigo-400 transition flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md inline-block">
                  {reg.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{reg.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">{reg.summary}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">شناسه: {reg.codeNumber}</span>
                <Link href={`/${locale}/rules/${reg.codeNumber}`} className="text-xs font-bold text-indigo-600 hover:underline inline-flex items-center gap-1">
                  مشاهده متن کامل ←
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center text-slate-500 text-xs">
            هیچ قانون یا بخشنامه‌ای در این زبان ثبت نشده است. از پنل ادمین می‌توانید قوانین جدید اضافه کنید.
          </div>
        )}
      </div>
    </div>
  );
}