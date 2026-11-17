import { prisma } from '@/lib/prisma';
import Link from "next/link";
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

interface MarketplaceDetailPageProps {
  params: { slug: string; locale: string };
}

const rtlLocales = ["fa", "ar"];

// تابع دریافت جزئیات ملک یا محصول بازار از دیتابیس
async function getMarketplaceItem(slug: string, locale: string) {
  // جستجو در جدول Property
  const property = await prisma.property.findUnique({
    where: { slug },
    include: {
      translations: { where: { locale } },
    },
  });

  if (property) {
    const translation = property.translations[0] || {};
    return {
      type: 'property',
      title: translation.title || 'ملک بدون عنوان',
      category: 'خرید و فروش / املاک',
      price: `${property.price.toLocaleString()} تومان`,
      area: `${property.area} متر مربع`,
      rooms: 'کلیدنخورده / مدرن',
      year: new Date(property.createdAt).getFullYear().toString(),
      location: `${property.province}، ${property.city}`,
      agent: 'مشاور رسمی ملکیسم',
      imageUrl: property.imageUrl || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      description: translation.description || '',
      address: translation.address || '',
    };
  }

  // اگر در املاک نبود، جستجو در MarketItem
  const marketItem = await prisma.marketItem.findUnique({
    where: { slug },
    include: {
      translations: { where: { locale } },
    },
  });

  if (marketItem) {
    const translation = marketItem.translations[0] || {};
    return {
      type: 'marketItem',
      title: translation.title || 'محصول بدون عنوان',
      category: marketItem.category,
      price: marketItem.price ? `${marketItem.price.toLocaleString()} تومان` : 'توافقی',
      area: 'استاندارد',
      rooms: 'تجهیزات / مصالح',
      year: 'جدید',
      location: marketItem.city,
      agent: marketItem.supplier,
      imageUrl: marketItem.imageUrl || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      description: translation.description || '',
      address: marketItem.city,
    };
  }

  return null;
}

export default async function MarketplaceDetailPage({ params }: MarketplaceDetailPageProps) {
  const { slug, locale } = params;
  const currentLocale = locale || "fa";
  
  setRequestLocale(currentLocale);
  const isRtl = rtlLocales.includes(currentLocale);

  const property = await getMarketplaceItem(slug, currentLocale);

  if (!property) {
    notFound();
  }

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 font-sans space-y-8 ${isRtl ? 'dir-rtl' : 'dir-ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div>
          <Link href={`/${currentLocale}/admin/marketplace`} className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100">
            {isRtl ? '← بازگشت به مدیریت آگهی‌ها' : '← Back to Admin'}
          </Link>
        </div>

        {/* هدر آگهی */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full">
              {property.category}
            </span>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              🏷️ {property.price}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            {property.title}
          </h1>
          <p className="text-xs text-slate-400">📍 موقعیت: <strong className="text-slate-700">{property.location}</strong></p>
        </div>

        {/* تصویر شاخص ملک */}
        {property.imageUrl && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 max-h-[420px]">
            <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* مشخصات کلیدی (گرید اطلاعات) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white border border-slate-200 p-4 rounded-xl text-center space-y-1 shadow-sm">
            <span className="text-[11px] text-slate-400 block">متراژ / واحد</span>
            <strong className="text-sm font-bold text-slate-800">{property.area}</strong>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-xl text-center space-y-1 shadow-sm">
            <span className="text-[11px] text-slate-400 block">نوع کاربری</span>
            <strong className="text-sm font-bold text-slate-800">{property.rooms}</strong>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-xl text-center space-y-1 shadow-sm">
            <span className="text-[11px] text-slate-400 block">سال ثبت</span>
            <strong className="text-sm font-bold text-slate-800">{property.year}</strong>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-xl text-center space-y-1 shadow-sm">
            <span className="text-[11px] text-slate-400 block">تامین‌کننده / مشاور</span>
            <strong className="text-xs font-bold text-indigo-600 truncate block">{property.agent}</strong>
          </div>
        </div>

        {/* توضیحات تکمیلی */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-slate-700">
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">توضیحات و امکانات</h3>
            <p className="leading-relaxed whitespace-pre-line">{property.description}</p>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
            <a href="#visit" onClick={(e) => { e.preventDefault(); alert("درخواست بازدید و استعلام این ملک ثبت شد. مشاور مربوطه با شما تماس خواهد گرفت."); }} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-sm transition inline-block">
              درخواست بازدید و استعلام
            </a>
            <button onClick={() => alert("لینک آگهی کپی شد.")} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-3.5 rounded-xl transition">
              اشتراک‌گذاری آگهی
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}