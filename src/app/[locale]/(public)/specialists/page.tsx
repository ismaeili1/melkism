'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';

const vipSpecialists = [
  {
    id: '1',
    name: 'مهندس آرش طاهری',
    type: 'فرد',
    category: 'معماری و طراحی',
    country: 'ایران',
    city: 'تهران',
    phone: '۰۹۱۲۱۲۳۴۵۶۷',
    plan: 'طلایی 🌟',
    rating: 4.9,
    likes: 128,
    reviewsCount: 34,
    verified: true,
    summary: 'طراحی تخصصی ویلاهای مدرن و بازسازی لوکس با بیش از ۱۵ سال سابقه اجرای پروژه‌های شاخص.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'شرکت عمران سازه البرز',
    type: 'شرکت',
    category: 'پیمانکاری و سازه',
    country: 'ایران',
    city: 'کرج',
    phone: '۰۲۶۳۴۵۶۷۸۹۰',
    plan: 'سازمانی 🏢',
    rating: 4.8,
    likes: 210,
    reviewsCount: 52,
    verified: true,
    summary: 'مجری پروژه‌های بزرگ مسکونی و تجاری، محاسبات نظام مهندسی و مدیریت پیمان.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'صنایع سنگ و نمای پارس',
    type: 'کارخانه',
    category: 'تولیدکننده و کارخانه',
    country: 'ایران',
    city: 'اصفهان',
    phone: '۰۳۱۳۱۲۳۴۵۶۷',
    plan: 'نقره‌ای 💎',
    rating: 4.7,
    likes: 95,
    reviewsCount: 18,
    verified: true,
    summary: 'تولید و عرضه مستقیم انواع سنگ نمای تراورتن، مرمریت و گرانیت با استاندارد صادراتی.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
];

const freeDirectoryList = [
  { name: 'دفتر املاک نوین', type: 'املاک', job: 'مشاور املاک و رهن/اجاره', country: 'ایران', city: 'تهران (سعادت‌آباد)', phone: '۰۲۱۲۲۳۳۴۴۵۵' },
  { name: 'علی‌رضا محمدی', type: 'فرد', job: 'استادکار برق و هوشمندسازی', country: 'ایران', city: 'شیراز', phone: '۰۹۳۵۱۱۱۲۲۳۳' },
  { name: 'نمایندگی بیمه ایران کد ۴۵۹', type: 'بیمه', job: 'بیمه کیفیت ساختمان و مسئولیت', country: 'ایران', city: 'مشهد', phone: '۰۵۱۳۸۸۸۹۹۰۰' },
];

const jobCategories = ['همه مشاغل', 'معماری و طراحی', 'پیمانکاری و سازه', 'املاک و مشاوران', 'تولیدکننده و کارخانه', 'فروشگاه و فروش', 'بیمه و حقوقی'];
const entityTypes = ['همه ساختارها', 'فرد', 'شرکت', 'گروه', 'تولیدی', 'فروشگاه', 'کارخانه', 'املاک'];
const locationOptions = ['همه کشورها / شهرها', 'ایران - تهران', 'ایران - کرج', 'ایران - اصفهان', 'ایران - شیراز', 'ترکیه - استانبول', 'امارات - دبی'];

export default function SpecialistsPage() {
  const [selectedCategory, setSelectedCategory] = useState('همه مشاغل');
  const [selectedEntityType, setSelectedEntityType] = useState('همه ساختارها');
  const [selectedLocation, setSelectedLocation] = useState('همه کشورها / شهرها');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white text-slate-800 py-10 px-4 sm:px-6 lg:px-8 dir-rtl font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* هدر متخصصین */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-3">
          <span className="text-[11px] font-bold tracking-wide uppercase text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block">
            • DIRECTORY & SPECIALISTS
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            بانک متخصصان، شرکت‌ها و برندهای صنعت ساختمان
          </h1>

          <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
            شبکه جامع معماران، سازندگان، کارخانه‌ها، دفاتر املاک و فعالان صنعت مسکن.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجوی نام متخصص، شرکت، شهر یا شغل..."
              className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500 transition"
            />
            <a href="#pricing" className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition text-center whitespace-nowrap shadow-sm">
              ایجاد پروفایل VIP ⭐
            </a>
          </div>
        </div>

        {/* فیلترها */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
          <div>
            <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-700 font-medium">
              {locationOptions.map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>
          </div>
          <div>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-700 font-medium">
              {jobCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div>
            <select value={selectedEntityType} onChange={e => setSelectedEntityType(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-700 font-medium">
              {entityTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
          <div>
            <button onClick={() => { setSelectedCategory('همه مشاغل'); setSelectedEntityType('همه ساختارها'); setSelectedLocation('همه کشورها / شهرها'); setSearchQuery(''); }} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold p-2 rounded-lg transition">
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
            {vipSpecialists.map((item) => (
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
                  <button className="w-full bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs py-2 rounded-lg transition">
                    مشاهده پروفایل ←
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* جدول رایگان */}
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
                {freeDirectoryList.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white transition">
                    <td className="p-2.5 font-bold text-slate-900">{row.name}</td>
                    <td className="p-2.5 text-slate-500">{row.type}</td>
                    <td className="p-2.5 text-slate-600">{row.job}</td>
                    <td className="p-2.5 text-slate-500">{row.country}، {row.city}</td>
                    <td className="p-2.5 font-mono text-slate-800 dir-ltr text-right">{row.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}