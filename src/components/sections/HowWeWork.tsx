'use client';

import React from 'react';
import Link from 'next/link';

interface HowWeWorkProps {
  locale: string;
}

export default function HowWeWork({ locale }: HowWeWorkProps) {
  const sections = [
    {
      id: 'news',
      number: '(۰۱)',
      title: 'اخبار و تحولات بازار',
      subtitle: 'آخرین تحلیل‌ها و اخبار موثق مسکن',
      description: 'دسترسی سریع به اخبار روز، تحلیل شاخص قیمت املاک و تورم ساخت در کلان‌شهرها با استناد به آمارهای رسمی.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      features: [
        'پوشش لحظه‌ای تحولات بازار مسکن',
        'گزارش‌های اختصاصی تحلیلی',
        'مصاحبه با کارشناسان ارشد اقتصادی',
        'پیش‌بینی روند قیمتی املاک'
      ],
      link: `/${locale}/news`,
      badge: 'News & Media'
    },
    {
      id: 'library',
      number: '(۰۲)',
      title: 'کتابخانه و دانشنامه تخصصی',
      subtitle: 'مرجع جامع دانش فنی و معماری',
      description: 'مجموعه‌ای کامل از استانداردها، مقالات تخصصی معماری، عمران و راهنماهای جامع کاربردی.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      features: [
        'استانداردها و مباحث مقررات ملی ساختمان',
        'مقالات تخصصی معماری و شهرسازی',
        'دانلود فرم‌ها و چک‌لیست‌های فنی',
        'دانشنامه تخصصی ساخت‌وساز'
      ],
      link: `/${locale}/library`,
      badge: 'Knowledge Hub'
    },
    {
      id: 'market',
      number: '(۰۳)',
      title: 'هوش بازار املاک',
      subtitle: 'داده‌محوری و استعلام قیمتی مناطق',
      description: 'استفاده از الگوریتم‌های هوش مصنوعی برای تخمین ارزش واقعی املاک و پیش‌بینی بازدهی سرمایه‌گذاری.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      features: [
        'تخمین قیمت واقعی املاک بر اساس داده‌های زنده',
        'تحلیل روند رشد مناطق مختلف',
        'گزارش‌های اختصاصی برای سازندگان',
        'شاخص سودآوری پروژه‌های ساختمانی'
      ],
      link: `/${locale}/market-intelligence`,
      badge: 'AI & Data'
    },
    {
      id: 'laws',
      number: '(۰۴)',
      title: 'حقوق و قوانین مسکن',
      subtitle: 'شفافیت و امنیت حقوقی معاملات',
      description: 'بررسی پیش‌نویس قراردادها، مبایعه‌نامه‌ها و قوانین پیش‌فروش جهت کاهش مخاطرات حقوقی.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      features: [
        'استعلام ضوابط حقوقی پیش‌فروش',
        'تحلیل و ارزیابی قراردادهای مشارکت',
        'مشاوره حقوقی آنلاین با وکلا',
        'پاسخ به سوالات متداول ثبتی'
      ],
      link: `/${locale}/laws`,
      badge: 'Legal Center'
    },
    {
      id: 'specialists',
      number: '(۰۵)',
      title: 'متخصصین ملکیسم',
      subtitle: 'شبکه مشاوران، سازندگان و مهندسان',
      description: 'معرفی معماران، سازندگان، مشاوران و مهندسان شناسنامه‌دار ارزیابی‌شده در سراسر کشور.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      features: [
        'احراز هویت و رتبه‌بندی متخصصین',
        'مشاهده نمونه‌کارها و سوابق ساخت',
        'ارتباط مستقیم بدون واسطه',
        'نظرات و بازخوردهای فعالان صنعت'
      ],
      link: `/${locale}/specialists`,
      badge: 'Verified Experts'
    },
    {
      id: 'melkist',
      number: '(۰۶)',
      title: 'بازار اختصاصی MELKIST',
      subtitle: 'فرصت‌های ممتاز خرید، فروش و مشارکت',
      description: 'ویترین آگهی‌های کارشناسی‌شده همراه با احراز مالکیت، استعلام قیمت و ضمانت حقوقی.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      features: [
        'آگهی‌های تایید‌شده و استعلام‌شده',
        'فرصت‌های طلایی مشارکت در ساخت',
        'ارزیابی و بررسی توسط تیم ملکیسم',
        'شفافیت کامل در شرایط معامله'
      ],
      link: `/${locale}/melkist`,
      badge: 'Exclusive Market'
    }
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-20">
      
      {/* تیتر سکشن */}
      <div className="text-center max-w-2xl mx-auto space-y-2 mb-16">
        <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest border border-blue-200 dark:border-blue-900/60 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50">
          How We Work
        </span>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white">
          شش بخش اصلی و عمومی ملکیسم
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          با اسکرول صفحه، کارت‌ها به صورت آبشاری و پله‌ای روی هم قرار می‌گیرند.
        </p>
      </div>

      {/* ساختار پشته‌ای کارت‌ها با موقعیت sticky و فاصله‌گذاری پله‌ای */}
      <div className="relative space-y-12">
        {sections.map((sec, index) => {
          // محاسبه فاصله پله‌ای top برای هر کارت به صورت داینامیک
          const stickyTop = 100 + index * 32;

          return (
            <div 
              key={sec.id}
              className="sticky transition-all duration-300"
              style={{ top: `${stickyTop}px`, zIndex: index + 10 }}
            >
              <div className="border rounded-3xl p-6 sm:p-10 shadow-2xl bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white backdrop-blur-2xl">
                
                {/* هدر کارت */}
                <div className="flex items-center justify-between border-b pb-4 mb-6 border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400">
                    {sec.badge}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm sm:text-lg font-black">{sec.title}</span>
                    <span className="text-sm sm:text-lg font-mono font-bold text-blue-600 dark:text-blue-400">{sec.number}</span>
                  </div>
                </div>

                {/* محتوای کارت */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
                      {sec.description}
                    </p>

                    <ul className="space-y-2 pt-2">
                      {sec.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <Link 
                        href={sec.link}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-md"
                      >
                        <span>ورود به بخش {sec.title}</span>
                        <span>←</span>
                      </Link>
                    </div>
                  </div>

                  <div className="md:col-span-6 h-52 sm:h-72 rounded-2xl overflow-hidden shadow-lg relative">
                    <img 
                      src={sec.image} 
                      alt={sec.title} 
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}