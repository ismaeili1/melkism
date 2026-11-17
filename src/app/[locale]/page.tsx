import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { getNewsList } from '@/services/melkismService'; // ایمپورت سرویس متمرکز دیتابیس

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const locale = params.locale;
  setRequestLocale(locale);

  const t = await getTranslations('HomePage');
  const dir = ['fa', 'ar'].includes(locale) ? 'rtl' : 'ltr';

  // دریافت آخرین اخبار و مقالات واقعی از دیتابیس بر اساس زبان جاری (locale)
  const dbNews = await getNewsList(locale);
  
  // انتخاب ۳ مقاله اخیر برای نمایش در صفحه اصلی (یا استفاده از مقادیر پیش‌فرض فایل ترجمه در صورت خالی بودن دیتابیس)
  const latestNews = dbNews.slice(0, 3);

  const adminBanners = [
    {
      id: 1,
      title: t('adminBanner1Title'),
      subtitle: t('adminBanner1Subtitle'),
      badge: t('adminBanner1Badge'),
      link: `/${locale}/market-intelligence`,
    },
    {
      id: 2,
      title: t('adminBanner2Title'),
      subtitle: t('adminBanner2Subtitle'),
      badge: t('adminBanner2Badge'),
      link: `/${locale}/specialists`,
    },
  ];

  const services = [
    {
      id: 1,
      title: t('service1Title'),
      description: t('service1Desc'),
      icon: '⚖️',
      link: `/${locale}/laws`,
    },
    {
      id: 2,
      title: t('service2Title'),
      description: t('service2Desc'),
      icon: '📊',
      link: `/${locale}/market-intelligence`,
    },
    {
      id: 3,
      title: t('service3Title'),
      description: t('service3Desc'),
      icon: '🏢',
      link: `/${locale}/melkist`,
    },
  ];

  const howWeWorkSections = [
    {
      id: 'news',
      number: t('sec1Num'),
      title: t('newsTitle'),
      subtitle: t('newsSub'),
      description: t('newsDesc'),
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      features: [t('newsFeature1'), t('newsFeature2'), t('newsFeature3'), t('newsFeature4')],
      link: `/${locale}/news`,
      badge: t('badgeNews'),
    },
    {
      id: 'library',
      number: t('sec2Num'),
      title: t('libraryTitle'),
      subtitle: t('librarySub'),
      description: t('libraryDesc'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      features: [t('libraryFeature1'), t('libraryFeature2'), t('libraryFeature3'), t('libraryFeature4')],
      link: `/${locale}/library`,
      badge: t('badgeLibrary'),
    },
    {
      id: 'market',
      number: t('sec3Num'),
      title: t('marketHubTitle'),
      subtitle: t('marketHubSub'),
      description: t('marketHubDesc'),
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      features: [t('marketHubFeature1'), t('marketHubFeature2'), t('marketHubFeature3'), t('marketHubFeature4')],
      link: `/${locale}/market-intelligence`,
      badge: t('badgeAiData'),
    },
    {
      id: 'laws',
      number: t('sec4Num'),
      title: t('lawsTitle'),
      subtitle: t('lawsSub'),
      description: t('lawsDesc'),
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      features: [t('lawsFeature1'), t('lawsFeature2'), t('lawsFeature3'), t('lawsFeature4')],
      link: `/${locale}/laws`,
      badge: t('badgeLegal'),
    },
    {
      id: 'specialists',
      number: t('sec5Num'),
      title: t('specialistsTitle'),
      subtitle: t('specialistsSub'),
      description: t('specialistsDesc'),
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      features: [t('specialistsFeature1'), t('specialistsFeature2'), t('specialistsFeature3'), t('specialistsFeature4')],
      link: `/${locale}/specialists`,
      badge: t('badgeVerifiedExperts'),
    },
    {
      id: 'melkist',
      number: t('sec6Num'),
      title: t('melkistMarketTitle'),
      subtitle: t('melkistMarketSub'),
      description: t('melkistMarketDesc'),
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      features: [t('melkistMarketFeature1'), t('melkistMarketFeature2'), t('melkistMarketFeature3'), t('melkistMarketFeature4')],
      link: `/${locale}/melkist`,
      badge: t('badgeExclusiveMarket'),
    },
  ];

  const stats = [
    { id: 1, value: t('stat1Value'), label: t('stat1Label') },
    { id: 2, value: t('stat2Value'), label: t('stat2Label') },
    { id: 3, value: t('stat3Value'), label: t('stat3Label') },
    { id: 4, value: t('stat4Value'), label: t('stat4Label') },
  ];

  // اگر هنوز خبری در دیتابیس ثبت نشده باشد، از مقادیر فایل‌های JSON استفاده می‌کنیم
  const featuredArticles = latestNews.length > 0 
    ? latestNews.map((item, idx) => ({
        id: item.id,
        category: item.category,
        categoryBg: idx === 0 ? 'bg-blue-600/10 text-blue-600' : idx === 1 ? 'bg-emerald-600/10 text-emerald-600' : 'bg-orange-600/10 text-orange-600',
        title: item.title,
        summary: item.summary,
        link: `/${locale}/news/${item.slug}`,
      }))
    : [
        {
          id: 1,
          category: t('art1Cat'),
          categoryBg: 'bg-blue-600/10 text-blue-600',
          title: t('art1Title'),
          summary: t('art1Sum'),
          link: `/${locale}/news`,
        },
        {
          id: 2,
          category: t('art2Cat'),
          categoryBg: 'bg-emerald-600/10 text-emerald-600',
          title: t('art2Title'),
          summary: t('art2Sum'),
          link: `/${locale}/laws`,
        },
        {
          id: 3,
          category: t('art3Cat'),
          categoryBg: 'bg-orange-600/10 text-orange-600',
          title: t('art3Title'),
          summary: t('art3Sum'),
          link: `/${locale}/melkist`,
        },
      ];

  return (
    <div className={`min-h-screen w-full transition-colors duration-500 font-sans ${dir === 'rtl' ? 'dir-rtl' : 'dir-ltr'} bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100`}>
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[550px] sm:min-h-[650px] flex items-center justify-center overflow-hidden bg-slate-900 py-12 px-4 sm:px-8 font-sans">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.webp" alt="Background" className="w-full h-full object-cover object-center" />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none overflow-hidden select-none" style={{ paddingBottom: '288px' }}>
          <span className="text-[20vw] sm:text-[16vw] font-black tracking-tighter text-white/[0.22] uppercase whitespace-nowrap">
            MELKISM
          </span>
        </div>

        <div className="absolute inset-0 z-20">
          <img src="/images/hero-card.webp" alt="Villa" className="w-full h-full object-cover object-center" />
        </div>

        <div className="relative z-30 w-full max-w-xl mx-auto sm:mx-0 sm:mr-auto sm:ml-0 mt-auto p-4 sm:p-6 rounded-2xl bg-[#0d233a]/90 backdrop-blur-md border border-white/20 space-y-3 sm:space-y-4 text-right shadow-2xl font-sans">
          <div className="space-y-1.5 sm:space-y-2">
            <span className="text-[9px] sm:text-xs font-sans font-medium tracking-widest text-white uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
              {t('heroTag')}
            </span>
            <h1 className="text-lg sm:text-2xl font-black text-white leading-snug font-sans">
              {t('heroTitlePrefix')} <span className="text-[#e31b23]">{t('heroTitleHighlight')}</span> {t('heroTitleSuffix')}
            </h1>
          </div>

          <p className="text-[10px] sm:text-xs text-slate-100 leading-relaxed font-sans font-light">
            {t('heroDesc')}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Link href={`/${locale}/melkist`} className="bg-white hover:bg-slate-100 text-[#0d233a] font-bold text-[11px] sm:text-xs px-4 py-2 sm:py-2.5 rounded-lg transition shadow-md font-sans">
              {t('exploreProjects')} ←
            </Link>
            <Link href={`/${locale}/market-intelligence`} className="bg-black/40 hover:bg-black/60 text-white border border-white/20 font-bold text-[11px] sm:text-xs px-4 py-2 sm:py-2.5 rounded-lg transition font-sans">
              {t('marketIntel')} 📊
            </Link>
          </div>
        </div>
      </section>

      {/* Admin Banners */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-20 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {adminBanners.map((banner, index) => (
            <div key={banner.id} className="border rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-sm transition-all w-full bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800">
              <div className="space-y-2">
                <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-wider border px-2 py-0.5 rounded-lg inline-block bg-blue-50 text-blue-600 border-blue-200 dark:bg-slate-950 dark:text-blue-400 dark:border-slate-800">
                  {banner.badge}
                </span>
                <h3 className="text-xs sm:text-lg font-black leading-snug text-slate-900 dark:text-white font-sans">{banner.title}</h3>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-sans">{banner.subtitle}</p>
              </div>
              <div className="pt-3 mt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 font-sans">Admin</span>
                <Link href={banner.link} className="text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-lg transition flex items-center gap-1 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 font-sans">
                  <span>{t('checkBtn')}</span>
                  <span>←</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6 font-sans">
        <div className="text-center space-y-1">
          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider font-sans">{t('servicesTag')}</span>
          <h2 className="text-base sm:text-2xl font-black text-slate-900 dark:text-white font-sans">{t('servicesTitle')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {services.map((service, idx) => (
            <div key={service.id} className="p-4 sm:p-6 rounded-2xl border transition shadow-sm flex flex-col justify-between space-y-3 w-full bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800">
              <div className="space-y-2">
                <div className="text-2xl p-2 rounded-xl inline-block bg-blue-500/10">{service.icon}</div>
                <h3 className="text-xs sm:text-base font-bold text-slate-900 dark:text-white font-sans">{service.title}</h3>
                <p className="text-[10px] sm:text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-sans">{service.description}</p>
              </div>
              <Link href={service.link} className="text-[10px] sm:text-[11px] font-bold text-blue-500 hover:underline inline-flex items-center gap-1 pt-1 font-sans">
                <span>{t('moreInfo')}</span>
                <span>←</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 font-sans">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-16 sm:mb-20">
          <span className="text-[10px] font-sans font-bold text-blue-600 uppercase tracking-widest border px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50">{t('howWeWorkTag')}</span>
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white font-sans">{t('howWeWorkTitle')}</h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">{t('howWeWorkDesc')}</p>
        </div>

        <div className="relative space-y-24 pb-32">
          {howWeWorkSections.map((sec, index) => {
            const stickyTop = 100 + index * 16;
            return (
              <div key={sec.id} className="sticky transition-all duration-300 font-sans" style={{ top: `${stickyTop}px`, zIndex: index + 10 }}>
                <div className="border rounded-3xl p-6 sm:p-10 shadow-md transition-all duration-300 bg-white border-slate-200 text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-white">
                  <div className="flex items-center justify-between border-b pb-4 mb-6 border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-sans font-bold px-3 py-1 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400">{sec.badge}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm sm:text-lg font-black font-sans">{sec.title}</span>
                      <span className="text-sm sm:text-lg font-mono font-bold text-blue-600 dark:text-blue-400">{sec.number}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                    <div className="md:col-span-6 space-y-4">
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 leading-relaxed font-sans">{sec.description}</p>
                      <ul className="space-y-2 pt-2">
                        {sec.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <Link href={sec.link} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-sm font-sans">
                          <span>{t('enterSection')} {sec.title}</span>
                          <span>←</span>
                        </Link>
                      </div>
                    </div>
                    <div className="md:col-span-6 h-52 sm:h-72 rounded-2xl overflow-hidden shadow-sm relative">
                      <img src={sec.image} alt={sec.title} className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 sm:py-8 border-y w-full bg-blue-50/50 border-blue-100 dark:bg-slate-900/40 dark:border-slate-800 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="space-y-0.5">
              <div className="text-base sm:text-3xl font-black text-blue-600 font-sans">{stat.value}</div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400 font-sans">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-6 font-sans">
        <div className="flex items-end justify-between border-b pb-3 border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-[10px] font-sans font-bold text-blue-600 uppercase">{t('featuredTag')}</span>
            <h2 className="text-base sm:text-2xl font-black text-slate-900 dark:text-white font-sans">{t('featuredTitle')}</h2>
          </div>
          <Link href={`/${locale}/news`} className="text-[10px] sm:text-[11px] font-bold text-blue-600 hover:underline font-sans">
            {t('archive')} ←
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {featuredArticles.map((article, index) => (
            <div key={article.id} className="border rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition shadow-sm w-full bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800">
              <div className="space-y-2">
                <span className={`text-[9px] px-2 py-0.5 rounded-md font-bold font-sans ${article.categoryBg}`}>{article.category}</span>
                <h3 className="text-xs sm:text-sm font-bold leading-snug text-slate-900 dark:text-white font-sans">{article.title}</h3>
                <p className="text-[10px] sm:text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-sans">{article.summary}</p>
              </div>
              <div className="pt-3 mt-3 border-t text-[10px] sm:text-[11px] font-semibold flex items-center justify-between text-blue-600 border-slate-100 dark:border-slate-800 font-sans">
                <Link href={article.link} className="hover:underline font-sans">{t('readMore')}</Link>
                <span>←</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}