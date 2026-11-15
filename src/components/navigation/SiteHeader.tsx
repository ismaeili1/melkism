'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const languages = [
  { code: 'fa', label: 'FA', name: 'فارسی (IR)' },
  { code: 'en', label: 'EN', name: 'English (US)' },
  { code: 'ar', label: 'AR', name: 'العربية (AR)' },
  { code: 'tr', label: 'TR', name: 'Türkçe (TR)' },
  { code: 'de', label: 'DE', name: 'Deutsch (DE)' },
  { code: 'fr', label: 'FR', name: 'Français (FR)' },
  { code: 'ru', label: 'RU', name: 'Русский (RU)' },
  { code: 'zh', label: 'ZH', name: '中文 (ZH)' },
  { code: 'es', label: 'ES', name: 'Español (ES)' },
  { code: 'it', label: 'IT', name: 'Italiano (IT)' },
];

const navTranslations: Record<string, Record<string, string>> = {
  fa: { news: 'اخبار', library: 'کتابخانه', market: 'هوش بازار', laws: 'قوانین', specialists: 'متخصص ملکیست', melkist: 'بازار MELKIST', tagline: 'رسانه هوشمند املاک', searchPlaceholder: 'جستجو در مقالات، قوانین...', searchBtn: 'بگرد', login: 'ورود' },
  en: { news: 'News', library: 'Library', market: 'Market Hub', laws: 'Laws', specialists: 'Melkist Specialist', melkist: 'MELKIST Market', tagline: 'Smart Real Estate Media', searchPlaceholder: 'Search articles, laws...', searchBtn: 'Search', login: 'Login' },
  ar: { news: 'الأخبار', library: 'المكتبة', market: 'هوش السوق', laws: 'القوانين', specialists: 'خبير ملکیست', melkist: 'سوق MELKIST', tagline: 'وسائل الإعلام العقارية الذكية', searchPlaceholder: 'البحث في المقالات والقوانين...', searchBtn: 'بحث', login: 'دخول' },
  tr: { news: 'Haberler', library: 'Kütüphane', market: 'Pazar Zekası', laws: 'Kanunlar', specialists: 'Melkist Uzmanı', melkist: 'MELKIST Pazarı', tagline: 'Akıllı Emlak Medyası', searchPlaceholder: 'Makalelerde, kanunlarda ara...', searchBtn: 'Ara', login: 'Giriş' },
  de: { news: 'Nachrichten', library: 'Bibliothek', market: 'Markt-KI', laws: 'Gesetze', specialists: 'Melkist Experte', melkist: 'MELKIST Markt', tagline: 'Intelligente Immobilien-Medien', searchPlaceholder: 'Artikel, Gesetze suchen...', searchBtn: 'Suchen', login: 'Anmelden' },
  fr: { news: 'Actualités', library: 'Bibliothèque', market: 'Intelligence Marché', laws: 'Lois', specialists: 'Spécialiste Melkist', melkist: 'Marché MELKIST', tagline: 'Média Immobilier Intelligent', searchPlaceholder: 'Rechercher articles, lois...', searchBtn: 'Chercher', login: 'Connexion' },
  ru: { news: 'Новости', library: 'Библиотека', market: 'Аналитика рынка', laws: 'Законы', specialists: 'Специалист Melkist', melkist: 'Рынок MELKIST', tagline: 'Уمные СМИ о недвижимости', searchPlaceholder: 'Поиск статей, законов...', searchBtn: 'Искать', login: 'Войти' },
  zh: { news: '新闻', library: '图书馆', market: '市场情报', laws: '法律法规', specialists: 'Melkist 专家', melkist: 'MELKIST 市场', tagline: '智能房地产媒体', searchPlaceholder: '搜索文章、法律...', searchBtn: '搜索', login: '登录' },
  es: { news: 'Noticias', library: 'Biblioteca', market: 'Inteligencia de Mercado', laws: 'Leyes', specialists: 'Especialista Melkist', melkist: 'Mercado MELKIST', tagline: 'Medio Inmobiliario Inteligente', searchPlaceholder: 'Buscar artículos, leyes...', searchBtn: 'Buscar', login: 'Acceder' },
  it: { news: 'Notizie', library: 'Biblioteca', market: 'Market Intelligence', laws: 'Leggi', specialists: 'Specialista Melkist', melkist: 'Mercato MELKIST', tagline: 'Media Immobiliare Intelligente', searchPlaceholder: 'Cerca articoli, leggi...', searchBtn: 'Cerca', login: 'Accedi' },
};

export default function SiteHeader() {
  const [user, setUser] = useState<any>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const pathSegments = pathname ? pathname.split('/') : [];
  const currentLocale = languages.some(l => l.code === pathSegments[1]) ? pathSegments[1] : 'fa';
  
  const currentLangObj = languages.find(l => l.code === currentLocale) || languages[0];
  const selectedLangLabel = currentLangObj.label;

  const t = navTranslations[currentLocale] || navTranslations.fa;

  const changeLanguage = (newLangCode: string) => {
    setLangOpen(false);
    if (!pathname) return;

    const segments = pathname.split('/');
    if (languages.some(l => l.code === segments[1])) {
      segments[1] = newLangCode;
    } else {
      segments.unshift('', newLangCode);
    }
    const newPath = segments.join('/') || `/${newLangCode}`;
    router.push(newPath);
  };

  const checkUser = () => {
    const savedUser = localStorage.getItem('melkism_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
    window.addEventListener('storage', checkUser);
    const interval = setInterval(checkUser, 1000);

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('storage', checkUser);
      clearInterval(interval);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/${currentLocale}/news?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  const getInitial = (name: string) => {
    return name ? name.trim().charAt(0).toUpperCase() : '👤';
  };

  const isActive = (path: string) => {
    if (!pathname) return false;
    return pathname.includes(path);
  };

  const getNavLinkClass = (path: string) => {
    const active = isActive(path);
    return `transition-all duration-200 py-2 flex items-center gap-1 ${
      active
        ? 'text-blue-600 font-extrabold text-base scale-105 border-b-2 border-blue-600'
        : 'text-slate-700 hover:text-blue-600 font-bold text-xs sm:text-sm'
    }`;
  };

  return (
    <header className="bg-white border-b border-slate-200 text-slate-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* سمت راست: منوی موبایل و لوگو */}
        <div className="flex items-center gap-3 lg:gap-6">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            title="منوی ناوبری"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <Link href={`/${currentLocale}`} className="flex items-center gap-2 sm:gap-3 group">
            <div className="flex items-center justify-center">
              <img 
                src="/images/melkism-logo-Mark.png" 
                alt="ملکیسم" 
                style={{ width: '36px', height: '36px', objectFit: 'contain' }}
                className="group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="text-right">
              {/* کلمه MELKISM با رنگ قرمز لوگو */}
              <span className="block text-sm sm:text-base font-black tracking-tight text-[#dc2626]">
                MELKISM
              </span>
              {/* زیرنویس لوگو: مخفی در موبایل، نمایان در تبلت و دسکتاپ */}
              <span className="hidden sm:block text-[8px] sm:text-[9px] font-medium text-slate-500">
                {t.tagline}
              </span>
            </div>
          </Link>

          {/* منوی اصلی دسکتاپ */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href={`/${currentLocale}/news`} className={getNavLinkClass('/news')}>
              {t.news}
            </Link>
            <Link href={`/${currentLocale}/library`} className={getNavLinkClass('/library')}>
              {t.library}
            </Link>
            <Link href={`/${currentLocale}/market-intelligence`} className={getNavLinkClass('/market-intelligence')}>
              {t.market}
            </Link>
            <Link href={`/${currentLocale}/laws`} className={getNavLinkClass('/laws')}>
              {t.laws}
            </Link>
            <Link href={`/${currentLocale}/specialists`} className={getNavLinkClass('/specialists')}>
              {t.specialists}
            </Link>
            <Link href={`/${currentLocale}/melkist`} className={getNavLinkClass('/melkist')}>
              {t.melkist}
            </Link>
          </nav>
        </div>

        {/* سمت چپ: جستجو، زبان و آواتار (علامت AI حذف شد) */}
        <div className="flex items-center gap-2 sm:gap-3 relative" ref={searchRef}>
          
          {/* دکمه جستجو همراه با آیکون ذره‌بین آبی ساده */}
          <div className="relative">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-[#1e40af] hover:text-blue-700 transition shadow-sm"
              title="جستجو در کل سایت"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5 stroke-[2.2]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
                />
              </svg>
            </button>

            {searchOpen && (
              <form onSubmit={handleSearchSubmit} className="absolute left-0 mt-2 w-64 sm:w-72 bg-white border border-slate-200 rounded-xl shadow-2xl p-2 z-50 flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder={t.searchPlaceholder} 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  autoFocus
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded-lg font-medium transition">
                  {t.searchBtn}
                </button>
              </form>
            )}
          </div>

          {/* دکمه انتخاب زبان */}
          <div className="relative" suppressHydrationWarning>
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-3 py-1.5 rounded-xl transition shadow-sm text-xs font-bold text-slate-800"
              title="تغییر زبان"
            >
              <span>🌐</span>
              <span className="font-mono uppercase text-slate-800">{selectedLangLabel}</span>
            </button>

            {langOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-2xl py-2 z-50 max-h-64 overflow-y-auto">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-right px-4 py-2 text-xs flex items-center justify-between transition ${selectedLangLabel === lang.label ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
                  >
                    <span>{lang.name}</span>
                    <span className="bg-slate-100 text-slate-700 border border-slate-200 text-[10px] px-1.5 py-0.5 rounded font-mono uppercase">
                      {lang.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* آواتار کاربر */}
          {user ? (
            <Link 
              href={user.role === 'admin' ? `/${currentLocale}/admin` : `/${currentLocale}/profile`}
              className="flex items-center justify-center p-1 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition shadow-sm group"
              title={user.name || user.fullName || 'پروفایل کاربری'}
            >
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name || user.fullName || 'آواتار'} 
                  className="w-8 h-8 rounded-full object-cover border-2 border-blue-500 shadow-sm"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                  {getInitial(user.name || user.fullName)}
                </div>
              )}
            </Link>
          ) : (
            <Link 
              href={`/${currentLocale}/login`}
              className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-2 py-2 transition"
            >
              {t.login}
            </Link>
          )}

        </div>

      </div>

      {/* منوی کشویی موبایل */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 px-6 py-5 flex flex-col gap-4 shadow-2xl z-50">
          <nav className="flex flex-col gap-3 text-sm font-bold text-slate-900">
            <Link href={`/${currentLocale}/news`} onClick={() => setMobileMenuOpen(false)} className={`py-2.5 border-b border-slate-100 transition flex items-center justify-between ${isActive('/news') ? 'text-blue-600 font-black text-base' : 'hover:text-blue-600'}`}>
              <span>{t.news}</span>
              <span className="text-xs">←</span>
            </Link>
            <Link href={`/${currentLocale}/library`} onClick={() => setMobileMenuOpen(false)} className={`py-2.5 border-b border-slate-100 transition flex items-center justify-between ${isActive('/library') ? 'text-blue-600 font-black text-base' : 'hover:text-blue-600'}`}>
              <span>{t.library}</span>
              <span className="text-xs">←</span>
            </Link>
            <Link href={`/${currentLocale}/market-intelligence`} onClick={() => setMobileMenuOpen(false)} className={`py-2.5 border-b border-slate-100 transition flex items-center justify-between ${isActive('/market-intelligence') ? 'text-blue-600 font-black text-base' : 'hover:text-blue-600'}`}>
              <span>{t.market}</span>
              <span className="text-xs">←</span>
            </Link>
            <Link href={`/${currentLocale}/laws`} onClick={() => setMobileMenuOpen(false)} className={`py-2.5 border-b border-slate-100 transition flex items-center justify-between ${isActive('/laws') ? 'text-blue-600 font-black text-base' : 'hover:text-blue-600'}`}>
              <span>{t.laws}</span>
              <span className="text-xs">←</span>
            </Link>
            <Link href={`/${currentLocale}/specialists`} onClick={() => setMobileMenuOpen(false)} className={`py-2.5 border-b border-slate-100 transition flex items-center justify-between ${isActive('/specialists') ? 'text-blue-600 font-black text-base' : 'hover:text-blue-600'}`}>
              <span>{t.specialists}</span>
              <span className="text-xs">←</span>
            </Link>
            <Link href={`/${currentLocale}/melkist`} onClick={() => setMobileMenuOpen(false)} className={`py-2.5 transition flex items-center justify-between ${isActive('/melkist') ? 'text-blue-600 font-black text-base' : 'hover:text-blue-600'}`}>
              <span>{t.melkist}</span>
              <span className="text-xs">←</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}