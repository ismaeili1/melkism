import { prisma } from '@/lib/prisma';
import Link from "next/link";
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

interface ExpertProfilePageProps {
  params: { slug: string; locale: string };
}

const rtlLocales = ["fa", "ar"];

// تابع دریافت جزئیات متخصص از دیتابیس بر اساس شماره پروانه یا شناسه یکتا
async function getExpertProfile(slug: string, locale: string) {
  // جستجو بر اساس licenseNumber یا شناسه سیستمی
  const expert = await prisma.expertProfile.findFirst({
    where: {
      OR: [
        { id: slug },
        { licenseNumber: slug }
      ]
    },
    include: {
      translations: { where: { locale } },
    },
  });

  if (!expert) return null;

  const translation = expert.translations[0] || {};

  return {
    ...expert,
    name: translation.name || 'کارشناس ملکیسم',
    bio: translation.bio || 'بیوگرافی و شرح سوابق این کارشناس در این زبان ثبت نشده است.',
    specialty: translation.specialty || 'مشاور و ارزیاب ارشد',
  };
}

export default async function ExpertProfilePage({ params }: ExpertProfilePageProps) {
  const { slug, locale } = params;
  const currentLocale = locale || "fa";
  
  setRequestLocale(currentLocale);
  const isRtl = rtlLocales.includes(currentLocale);

  const expert = await getExpertProfile(slug, currentLocale);

  if (!expert) {
    notFound();
  }

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 ${isRtl ? 'dir-rtl' : 'dir-ltr'} font-sans space-y-8`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div>
          <Link href={`/${currentLocale}/admin/experts`} className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100">
            {isRtl ? '← بازگشت به مدیریت متخصصان' : '← Back to Experts Admin'}
          </Link>
        </div>

        {/* هدر پروفایل */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-indigo-100 shadow-md flex-shrink-0 bg-slate-100">
            <img src={expert.avatarUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"} alt={expert.name} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-3 text-center sm:text-right flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-[11px] font-bold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full">
                {expert.specialty}
              </span>
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                ⭐ {expert.rating} / ۵.۰
              </span>
              {expert.isVip && (
                <span className="text-[11px] font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
                  ✨ مشاور ویژه (VIP)
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {expert.name}
            </h1>
            <p className="text-sm font-medium text-slate-600">شماره پروانه: {expert.licenseNumber || 'ثبت شده در سامانه'}</p>
            <div className="text-xs text-slate-400 flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1">
              <span>📍 {expert.city}</span>
              <span>•</span>
              <span>📞 {expert.mobile || 'تماس از طریق سامانه'}</span>
            </div>
          </div>
        </div>

        {/* جزئیات و بیوگرافی */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-slate-700">
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">درباره کارشناس</h3>
            <p className="leading-relaxed whitespace-pre-line">{expert.bio}</p>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-slate-900 text-base">حوزه‌های تخصص و مهارت‌ها</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3.5 py-1.5 rounded-xl border border-slate-200">
                #{expert.specialty}
              </span>
              <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3.5 py-1.5 rounded-xl border border-slate-200">
                #ارزیابی_املاک
              </span>
              <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3.5 py-1.5 rounded-xl border border-slate-200">
                #مشاوره_حقوقی_ملکی
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
            <button onClick={() => alert("درخواست مشاوره تخصصی ثبت شد. کارشناس به زودی با شما تماس خواهد گرفت.")} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-sm transition">
              درخواست مشاوره تخصصی
            </button>
            <button onClick={() => alert("لینک پروفایل کارشناس کپی شد.")} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-3.5 rounded-xl transition">
              اشتراک‌گذاری پروفایل
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}