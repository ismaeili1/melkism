'use client';

import Link from "next/link";

interface MarketplaceDetailPageProps {
  params: { slug: string; locale: string };
}

export default function MarketplaceDetailPage({ params }: MarketplaceDetailPageProps) {
  const slug = params.slug;
  const locale = params.locale || "fa";

  // بانک اطلاعات نمونه آگهی‌های بازارگاه املاک ملکیسم
  const marketplaceDatabase: Record<string, any> = {
    "luxury-penthouse-niavaran-1405": {
      title: "پنت‌هاوس لوکس و مدرن ۳۵۰ متری در نیاوران با ویوی ابدی",
      category: "خرید و فروش / آپارتمان مسکونی",
      price: "۱۲۵,۰۰۰,۰۰۰,۰۰۰ تومان",
      area: "۳۵۰ متر مربع",
      rooms: "۴ خواب (مستر)",
      year: "ساخت ۱۴۰۳ (کلیدنخورده)",
      location: "تهران، نیاوران، مژده",
      agent: "آژانس املاک مدرن پایتخت",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      description: "طراحی مدرن با متریال روز اروپا، سیستم هوشمند BMS کامل، روف‌گاردن چهار فصل، لابی من و کادر حراست ۲۴ ساعته، استخر و سونا اختصاصی در واحد، ۳ عدد پارکینگ سندی."
    }
  };

  const property = marketplaceDatabase[slug] || {
    title: `آگهی ملکی شماره: ${slug}`,
    category: "بازارگاه املاک و مستغلات",
    price: "توافقی / استعلام قیمت",
    area: "متراژ استاندارد",
    rooms: "سوییت / واحد ملکی",
    year: "ثبت شده در سیستم",
    location: "ایران",
    agent: "مشاور رسمی ملکیسم",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "این آگهی به صورت زنده از پلتفرم بازارگاه املاک ملکیسم فراخوانی شده است. جزئیات کامل فنی، تصاویر تکمیلی و راه‌های ارتباطی با مالک یا مشاور مربوطه به زودی بارگذاری خواهد شد."
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 dir-rtl font-sans space-y-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div>
          <Link href={`/${locale}/admin/marketplace`} className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100">
            ← بازگشت به مدیریت بازارگاه آگهی‌ها
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
          <p className="text-xs text-slate-400">📍 موقعیت ملک: <strong className="text-slate-700">{property.location}</strong></p>
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
            <span className="text-[11px] text-slate-400 block">متراژ بنا</span>
            <strong className="text-sm font-bold text-slate-800">{property.area}</strong>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-xl text-center space-y-1 shadow-sm">
            <span className="text-[11px] text-slate-400 block">تعداد خواب</span>
            <strong className="text-sm font-bold text-slate-800">{property.rooms}</strong>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-xl text-center space-y-1 shadow-sm">
            <span className="text-[11px] text-slate-400 block">سال ساخت</span>
            <strong className="text-sm font-bold text-slate-800">{property.year}</strong>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-xl text-center space-y-1 shadow-sm">
            <span className="text-[11px] text-slate-400 block">ثبت‌کننده</span>
            <strong className="text-xs font-bold text-indigo-600 truncate block">{property.agent}</strong>
          </div>
        </div>

        {/* توضیحات تکمیلی */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-slate-700">
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">توضیحات و امکانات رفاهی:</h3>
            <p className="leading-relaxed">{property.description}</p>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
            <button onClick={() => alert("درخواست بازدید و استعلام این ملک ثبت شد. مشاور مربوطه با شما تماس خواهد گرفت.")} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-sm transition">
              📞 درخواست بازدید / تماس با مشاور
            </button>
            <button onClick={() => alert("لینک آگهی کپی شد.")} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-3.5 rounded-xl transition">
              🔗 اشتراک‌گذاری آگهی
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}