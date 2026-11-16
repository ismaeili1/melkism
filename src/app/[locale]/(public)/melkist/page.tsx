'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';

const sampleListings = [
  {
    id: '1',
    title: 'آپارتمان ۱۶۵ متری نوساز کلید نخورده - تک‌واحدی',
    type: 'خرید و فروش',
    category: 'مسکونی',
    location: 'تهران، سعادت‌آباد',
    price: '۲۸,۵۰۰,۰۰۰,۰۰۰ تومان',
    pricePerMeter: '۱۷۲,۷۰۰,۰۰۰ تومان/متر',
    meterage: 165,
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    tags: ['تک_واحدی', 'ارزیابی_شده'],
  },
  {
    id: '2',
    title: 'زمین کلنگی ۴۵۰ متری با دستور نقشه ۵ طبقه',
    type: 'مشارکت در ساخت',
    category: 'زمین و کلنگی',
    location: 'تهران، نیاوران',
    price: 'مشارکت ۶۰ به ۴۰',
    pricePerMeter: 'بصرفه برای سازندگان',
    meterage: 450,
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    tags: ['دستور_نقشه', 'تراکم_بالا'],
  },
];

const categories = ['همه معاملات', 'خرید و فروش', 'رهن و اجاره', 'مشارکت در ساخت', 'اداری و تجاری'];

export default function MelkistMarketPage() {
  const [selectedType, setSelectedType] = useState('همه معاملات');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white text-slate-800 py-8 px-4 sm:px-6 lg:px-8 dir-rtl font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* هدر بازار */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-3">
          <span className="text-[11px] font-bold tracking-wide uppercase text-sky-700 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full inline-block">
            • REAL ESTATE MARKETPLACE
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            بازار هوشمند معاملات و آگهی‌های املاک
          </h1>

          <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
            ارزیابی قیمتی با هوش مصنوعی و ارتباط مستقیم با مالکان و مشاوران تاییدشده.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو بر اساس منطقه، محله یا نوع ملک..."
              className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 transition"
            />
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition whitespace-nowrap shadow-sm">
              جستجوی پیشرفته ←
            </button>
          </div>
        </div>

        {/* فیلتر دسته‌ها */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedType(cat)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition whitespace-nowrap border ${
                  selectedType === cat
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <Link
            href="/fa/melkist/create"
            className="inline-flex items-center justify-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition whitespace-nowrap shadow-sm"
          >
            <span>+ ثبت آگهی ملکی</span>
          </Link>
        </div>

        {/* گرید آگهی‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {sampleListings.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/80 rounded-xl overflow-hidden hover:border-sky-300 transition duration-200 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="h-44 overflow-hidden relative bg-slate-50">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-102 transition duration-300" />
                  <span className="absolute top-2.5 right-2.5 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {item.type}
                  </span>
                </div>

                <div className="p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>📍 {item.location}</span>
                    <span>📐 {item.meterage} متر</span>
                  </div>

                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition line-clamp-2 leading-snug">
                    {item.title}
                  </h3>

                  <div className="pt-1.5 border-t border-slate-100">
                    <div className="text-xs font-black text-sky-700">
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 pt-0">
                <button className="w-full text-center bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-700 text-xs font-bold py-2 rounded-lg transition">
                  مشاهده آگهی
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}