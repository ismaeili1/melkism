'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// تنظیمات انیمیشن Fade-In-Up نرم
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: [0.215, 0.610, 0.355, 1.000],
    },
  }),
};

export default function HomePage() {
  const { t, locale, dir } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // داده‌های بنرهای مدیریتی
  const adminBanners = [
    {
      id: 1,
      title: 'تحلیل هوشمند نوسانات و پیش‌بینی بازار مسکن',
      subtitle: 'گزارش اختصاصی ادمین برای فعالان ساخت‌وساز',
      badge: 'Market Intelligence',
      link: `/${locale}/market-intelligence`,
    },
    {
      id: 2,
      title: 'ثبت‌نام مشاوران، سازندگان و مهندسان برتر',
      subtitle: 'پلتفرم متخصصین ارزیابی‌شده و حقوقی ملکیسم',
      badge: 'VIP Specialists',
      link: `/${locale}/specialists`,
    },
  ];

  // داده‌های خدمات تخصصی
  const services = [
    {
      id: 1,
      title: 'تحلیل حقوقی قراردادها',
      description: 'بررسی هوشمند پیش‌نویس مبایعه‌نامه‌ها و قراردادهای مشارکت در ساخت.',
      icon: '⚖️',
      link: `/${locale}/laws`,
    },
    {
      id: 2,
      title: 'تخمین هوشمند قیمت املاک',
      description: 'محاسبه ارزش واقعی ملک بر اساس الگوریتم‌های داده‌محور و استعلام منطقه.',
      icon: '📊',
      link: `/${locale}/market-intelligence`,
    },
    {
      id: 3,
      title: 'فرصت‌های ویژه مشارکت',
      description: 'اتصال مستقیم مالکان کلنگی به سازندگان شناسنامه‌دار با ضمانت حقوقی.',
      icon: '🏢',
      link: `/${locale}/melkist`,
    },
  ];

  // ۶ بخش اصلی پلتفرم برای استک کارت‌ها
  const howWeWorkSections = [
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
        'پیش‌بینی روند قیمتی املاک',
      ],
      link: `/${locale}/news`,
      badge: 'News & Media',
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
        'دانشنامه تخصصی ساخت‌وساز',
      ],
      link: `/${locale}/library`,
      badge: 'Knowledge Hub',
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
        'شاخص سودآوری پروژه‌های ساختمانی',
      ],
      link: `/${locale}/market-intelligence`,
      badge: 'AI & Data',
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
        'پاسخ به سوالات متداول ثبتی',
      ],
      link: `/${locale}/laws`,
      badge: 'Legal Center',
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
        'نظرات و بازخوردهای فعالان صنعت',
      ],
      link: `/${locale}/specialists`,
      badge: 'Verified Experts',
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
        'شفافیت کامل در شرایط معامله',
      ],
      link: `/${locale}/melkist`,
      badge: 'Exclusive Market',
    },
  ];

  // آمارهای کلیدی پلتفرم
  const stats = [
    { id: 1, value: '+۵۰۰', label: 'پروژه ارزیابی‌شده' },
    { id: 2, value: '۹۸٪', label: 'رضایت فعالان حقوقی' },
    { id: 3, value: '+۱۲ هزار', label: 'استعلام قیمتی موفق' },
    { id: 4, value: '۲۴/۷', label: 'پشتیبانی هوشمند' },
  ];

  // مقالات و برگزیده‌های محتوایی
  const featuredArticles = [
    {
      id: 1,
      category: 'اخبار مسکن',
      categoryBg: 'bg-blue-600/10 text-blue-600',
      title: 'تحلیل شاخص قیمت املاک و تورم ساخت در کلان‌شهرها',
      summary: 'بررسی جدیدترین آمارهای رسمی مرکز آمار و تحلیل اقتصادی روند بازار در ماه‌های آینده.',
      link: `/${locale}/news`,
    },
    {
      id: 2,
      category: 'حقوق و قوانین',
      categoryBg: 'bg-emerald-600/10 text-emerald-600',
      title: 'ضوابط جدید الزام به ثبت رسمی قراردادهای پیش‌فروش',
      summary: 'راهنمای کامل حقوقی برای خریداران و پیش‌فروشندگان جهت جلوگیری از تخلفات ملکی.',
      link: `/${locale}/laws`,
    },
    {
      id: 3,
      category: 'بازار MELKIST',
      categoryBg: 'bg-orange-600/10 text-orange-600',
      title: 'فرصت‌های ممتاز مشارکت در ساخت و سرمایه‌گذاری',
      summary: 'آگهی‌های ارزیابی‌شده همراه با احراز هویت هوشمند و استعلام قیمت منطقه.',
      link: `/${locale}/melkist`,
    },
  ];

  return (
    <div 
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 font-sans ${dir === 'rtl' ? 'dir-rtl' : 'dir-ltr'} ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* دکمه شناور تغییر تم */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-3 rounded-full border shadow-2xl transition-all duration-300 flex items-center justify-center text-base ${
            isDark 
              ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800' 
              : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100'
          }`}
          title="تغییر تم"
          aria-label="تغییر تم"
        >
          <span>{isDark ? '☀️' : '🌙'}</span>
        </button>
      </div>

      {/* ================= ۱. Hero Section ================= */}
      <section className={`relative pt-3 sm:pt-6 pb-8 sm:pb-16 px-3 sm:px-6 lg:px-8 border-b overflow-hidden transition-colors ${
        isDark ? 'border-slate-800/60' : 'border-slate-200/80'
      }`}>
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl pointer-events-none ${
          isDark ? 'bg-blue-600/10' : 'bg-blue-400/20'
        }`}></div>

        <div className="w-full max-w-6xl mx-auto relative z-10 flex justify-center">
          <div className="relative w-full max-w-[calc(100vw-1.5rem)] sm:max-w-none min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800 flex flex-col justify-between p-4 sm:p-8 lg:p-10">
            
            <div className="absolute inset-0 z-0 w-full h-full">
              <img 
                src="/images/h1.webp" 
                alt="Melkism Hero Background" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/h1.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/20"></div>
            </div>

            <motion.div 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-10 sm:top-12 md:top-14 lg:top-16 inset-x-0 z-10 w-full px-4 text-center pointer-events-none flex justify-center opacity-100"
            >
              <img 
                src="/images/MelkisM-Logotype.png" 
                alt="MelkisM Logotype" 
                className="w-[80%] sm:w-[60%] md:w-[48%] lg:w-[42%] max-w-xl object-contain filter drop-shadow-2xl brightness-100"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </motion.div>

            <div className="absolute inset-0 z-20 w-full h-full pointer-events-none flex items-end">
              <img 
                src="/images/h2.webp" 
                alt="Melkism Hero Foreground" 
                className="w-full h-full object-cover object-bottom"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/h2.jpg';
                }}
              />
            </div>

            <div className="relative z-30 w-full flex flex-col justify-between h-full space-y-4 sm:space-y-6">
              <div>
                <motion.div 
                  initial="hidden" 
                  animate="visible" 
                  variants={fadeInUp} 
                  custom={0}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] sm:text-xs font-semibold text-blue-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  <span>{t.tagline || 'رسانه هوشمند و تحلیل‌گر بازار املاک'}</span>
                </motion.div>
              </div>

              <div className="space-y-2.5 sm:space-y-4 w-full max-w-2xl pb-1 sm:pb-2">
                <motion.h1 
                  initial="hidden" 
                  animate="visible" 
                  variants={fadeInUp} 
                  custom={1}
                  className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-snug text-white drop-shadow-md"
                >
                  مرجع تحلیل بازار، قوانین و <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-orange-400 bg-clip-text text-transparent">
                    معاملات هوشمند املاک
                  </span>
                </motion.h1>

                <motion.p 
                  initial="hidden" 
                  animate="visible" 
                  variants={fadeInUp} 
                  custom={2}
                  className="text-[10px] sm:text-xs md:text-sm text-slate-200 leading-relaxed drop-shadow max-w-xl"
                >
                  ملکیسم با تلفیق داده‌های تحلیلی، هوش مصنوعی و قوانین حقوقی، شفاف‌ترین مسیر را برای فعالان مسکن فراهم می‌کند.
                </motion.p>

                <motion.div 
                  initial="hidden" 
                  animate="visible" 
                  variants={fadeInUp} 
                  custom={3}
                  className="w-full max-w-lg pt-1"
                >
                  <div className="p-1 sm:p-1.5 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-1.5 backdrop-blur-xl bg-slate-900/90 border border-slate-700/80 w-full">
                    <input 
                      type="text" 
                      placeholder="جستجو در مقالات، قوانین، هوش بازار..." 
                      className="w-full bg-transparent px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white placeholder-slate-400 focus:outline-none min-w-0"
                    />
                    <button className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] sm:text-xs font-bold px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl transition shrink-0 whitespace-nowrap">
                      {t.search || 'جستجو'}
                    </button>
                  </div>
                </motion.div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= ۲. بنارهای مدیریتی ================= */}
      <section className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {adminBanners.map((banner, index) => (
            <motion.div 
              key={banner.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index}
              className={`border rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-lg transition-all w-full ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div className="space-y-2">
                <span className={`text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider border px-2 py-0.5 rounded-lg inline-block ${
                  isDark ? 'bg-slate-950 text-blue-400 border-slate-800' : 'bg-blue-50 text-blue-600 border-blue-200'
                }`}>
                  {banner.badge}
                </span>
                <h3 className={`text-xs sm:text-lg font-black leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {banner.title}
                </h3>
                <p className={`text-[10px] sm:text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {banner.subtitle}
                </p>
              </div>

              <div className={`pt-3 mt-3 flex items-center justify-between border-t ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}>
                <span className="text-[10px] text-slate-400">مدیریت ادمین</span>
                <Link 
                  href={banner.link} 
                  className={`text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-lg transition flex items-center gap-1 ${
                    isDark ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <span>بررسی کنید</span>
                  <span>←</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ۳. کارت‌های خدمات تخصصی ================= */}
      <section className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">سرویس‌های تخصصی</span>
          <h2 className={`text-base sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
            چرا فعالان مسکن ملکیسم را انتخاب می‌کنند؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={idx}
              className={`p-4 sm:p-6 rounded-2xl border transition shadow-md flex flex-col justify-between space-y-3 w-full ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div className="space-y-2">
                <div className="text-2xl p-2 rounded-xl inline-block bg-blue-500/10">
                  {service.icon}
                </div>
                <h3 className={`text-xs sm:text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-[10px] sm:text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {service.description}
                </p>
              </div>
              <Link href={service.link} className="text-[10px] sm:text-[11px] font-bold text-blue-500 hover:underline inline-flex items-center gap-1 pt-1">
                <span>اطلاعات بیشتر</span>
                <span>←</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ۴. سکشن How We Work با افکت Sticky Stacking Cards ================= */}
      <section ref={containerRef} className="relative w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-16 sm:mb-20">
          <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest border border-blue-200 dark:border-blue-900/60 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50">
            How We Work
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white">
            شش بخش اصلی و عمومی ملکیسم
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            با اسکرول به پایین، کارت‌ها به صورت آبشاری روی هم قرار می‌گیرند و کارت بعدی روی کارت قبلی فیکس می‌شود.
          </p>
        </div>

        <div className="relative pb-24">
          {howWeWorkSections.map((sec, index) => {
            const topOffset = 90 + index * 20;

            return (
              <div 
                key={sec.id}
                className="sticky z-20 mb-12 sm:mb-16 transition-all duration-300"
                style={{ top: `${topOffset}px` }}
              >
                <div className={`border rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
                  isDark ? 'bg-slate-900/98 border-slate-700 text-white shadow-black/90' : 'bg-white/98 border-slate-300 text-slate-900 shadow-slate-400/50'
                }`}>
                  
                  <div className="flex items-center justify-between border-b pb-4 mb-6 border-slate-200/60 dark:border-slate-800">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400">
                      {sec.badge}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm sm:text-lg font-black">{sec.title}</span>
                      <span className="text-sm sm:text-lg font-mono font-bold text-blue-600 dark:text-blue-400">{sec.number}</span>
                    </div>
                  </div>

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

      {/* ================= ۵. نوار آمار کلیدی ================= */}
      <section className={`py-6 sm:py-8 border-y w-full ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-blue-50/50 border-blue-100'}`}>
        <div className="max-w-6xl mx-auto px-3 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="space-y-0.5">
              <div className="text-base sm:text-3xl font-black text-blue-600">{stat.value}</div>
              <div className={`text-[10px] sm:text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ۶. کارت‌های برگزیده محتوایی ================= */}
      <section className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-6">
        
        <div className={`flex items-end justify-between border-b pb-3 ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div>
            <span className="text-[10px] font-bold text-blue-600 uppercase">برگزیده‌های ملکیسم</span>
            <h2 className={`text-base sm:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
              آخرین تحولات و دانشنامه تخصصی
            </h2>
          </div>
          <Link href={`/${locale}/news`} className="text-[10px] sm:text-[11px] font-bold text-blue-600 hover:underline">
            آرشیو ←
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {featuredArticles.map((article, index) => (
            <motion.div 
              key={article.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={index + 1}
              className={`border rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition shadow-md w-full ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div className="space-y-2">
                <span className={`text-[9px] px-2 py-0.5 rounded-md font-bold ${article.categoryBg}`}>
                  {article.category}
                </span>
                <h3 className={`text-xs sm:text-sm font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {article.title}
                </h3>
                <p className={`text-[10px] sm:text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {article.summary}
                </p>
              </div>
              <div className={`pt-3 mt-3 border-t text-[10px] sm:text-[11px] font-semibold flex items-center justify-between text-blue-600 ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}>
                <Link href={article.link} className="hover:underline">ادامه مطلب</Link>
                <span>←</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}