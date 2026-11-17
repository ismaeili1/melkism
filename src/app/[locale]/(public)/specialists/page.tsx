import { prisma } from '@/lib/prisma';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

interface SpecialistsPageProps {
  params: {
    locale: string;
  };
}

const rtlLocales = ["fa", "ar"];

// تابع دریافت متخصصان از دیتابیس بر اساس زبان جاری
async function getExpertsFromDb(locale: string) {
  const experts = await prisma.expertProfile.findMany({
    include: {
      translations: { where: { locale } },
    },
    orderBy: { rating: 'desc' },
  });

  return experts.map((exp) => ({
    id: exp.id,
    name: exp.translations[0]?.name || 'کارشناس ملکیسم',
    category: exp.translations[0]?.specialty || 'معماری و طراحی',
    city: exp.city || 'تهران',
    country: 'ایران',
    phone: exp.mobile || '۰۹۱۲۰۰۰۰۰۰۰',
    plan: exp.isVip ? 'طلایی 🌟' : 'پایه',
    rating: exp.rating || 4.8,
    isVip: exp.isVip,
    summary: exp.translations[0]?.bio || 'متخصص فعال در حوزه‌های مهندسی و املاک.',
    imageUrl: exp.avatarUrl || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    licenseNumber: exp.licenseNumber,
  }));
}

const jobCategories = ['همه مشاغل', 'معماری و طراحی', 'پیمانکاری و سازه', 'املاک و مشاوران', 'تولیدکننده و کارخانه', 'فروشگاه و فروش', 'بیمه و حقوقی'];
const entityTypes = ['همه ساختارها', 'فرد', 'شرکت', 'گروه', 'تولیدی', 'فروشگاه', 'کارخانه', 'املاک'];
const locationOptions = ['همه کشورها / شهرها', 'ایران - تهران', 'ایران - کرج', 'ایران - اصفهان', 'ایران - شیراز', 'ترکیه - استانبول', 'امارات - دبی'];

export default async function SpecialistsPage({ params }: SpecialistsPageProps) {
  const { locale } = params;
  setRequestLocale(locale);
  const isRtl = rtlLocales.includes(locale);

  const t = await getTranslations('SpecialistsPage');

  // دریافت متخصصان واقعی از پایگاه داده
  const expertsList = await getExpertsFromDb(locale);

  // جداسازی VIPها و دایرکتوری پایه (یا نمایش همه در بخش‌های مربوطه)
  const vipList = expertsList.filter(e => e.isVip);
  const generalList = expertsList.filter(e => !e.isVip);

  return (
    <div className={`min-h-screen bg-white text-slate-800 py-10 px-4 sm:px-6 lg:px-8 ${isRtl ? 'dir-rtl' : 'dir-ltr'} font-sans`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* هدر متخصصین */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-3">
          <span className="text-[11px] font-bold tracking-wide uppercase text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block">
            • DIRECTORY & SPECIALISTS
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('title')}
          </h1>

          <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
            <input
              type="text"
              placeholder="جستجوی نام متخصص، شرکت، شهر یا شغل..."
              className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500 transition"
            />
            <Link href={`/${locale}/admin/experts`} className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition text-center whitespace-nowrap shadow-sm">
              ایجاد پروفایل VIP ⭐
            </Link>
          </div>
        </div>

        {/* فیلترها */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
          <div>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-700 font-medium">
              {locationOptions.map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>
          </div>
          <div>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-700 font-medium">
              {jobCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-700 font-medium">
              {entityTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
          <div>
            <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold p-2 rounded-lg transition">
              حذف فیلترها ⟲
            </button>
          </div>
        </div>

        {/* لیست VIP */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>اعضای تاییدشده و دارای پروفایل اختصاصی (VIP)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {vipList.length > 0 ? vipList.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200/80 rounded-xl overflow-hidden hover:border-amber-400 transition flex flex-col justify-between group">
                <div>
                  <div className="h-44 relative overflow-hidden bg-slate-50">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-102 transition duration-300" />
                    <span className="absolute top-2.5 right-2.5 bg-amber-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow-sm">
                      {item.plan}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>🌐 {item.country}، {item.city}</span>
                      <span className="text-amber-600 font-bold">⭐ {item.rating}</span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{item.summary}</p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Link href={`/${locale}/experts/${item.id}`} className="block text-center w-full bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs py-2 rounded-lg transition">
                    مشاهده پروفایل ←
                  </Link>
                </div>
              </div>
            )) : (
              <p className="text-xs text-slate-400 col-span-3 py-6 text-center">هیچ کارشناس VIP فعلاً در دیتابیس ثبت نشده است.</p>
            )}
          </div>
        </div>

        {/* جدول عمومی / دایرکتوری */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-2.5 gap-1">
            <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span>📋</span>
              <span>فهرست عمومی و رایگان فعالان صنعت ساختمان</span>
            </h3>
            <span className="text-[11px] text-slate-400">اطلاعات تماس پایه</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead className="bg-white text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="p-2.5">نام / عنوان</th>
                  <th className="p-2.5">نوع ساختار</th>
                  <th className="p-2.5">حوزه فعالیت</th>
                  <th className="p-2.5">کشور / شهر</th>
                  <th className="p-2.5">شماره تماس</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/60">
                {generalList.length > 0 ? generalList.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white transition">
                    <td className="p-2.5 font-bold text-slate-900">{row.name}</td>
                    <td className="p-2.5 text-slate-500">کارشناس / متخصص</td>
                    <td className="p-2.5 text-slate-600">{row.category}</td>
                    <td className="p-2.5 text-slate-500">{row.country}، {row.city}</td>
                    <td className="p-2.5 font-mono text-slate-800 dir-ltr text-right">{row.phone}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-slate-400">موردی در دایرکتوری عمومی یافت نشد.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}