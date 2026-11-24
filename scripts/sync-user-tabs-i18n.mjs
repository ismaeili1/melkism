import fs from "fs";
import path from "path";

const extraUserKeys = {
  fa: {
    tabOverview: "نمای کلی حساب",
    tabListings: "آگهی‌های شخصی ({count})",
    tabSaved: "نشان‌شده‌ها ({count})",
    tabRequests: "درخواست‌ها ({count})",
    summaryCounts: "{listings} آگهی • {saved} نشان‌شده • {requests} درخواست",
    quickAccessTitle: "دسترسی سریع به ماژول‌های ملکیسم",
    modMarketplaceTitle: "بازار ملکیست",
    modMarketplaceDesc: "جستجو و بررسی فایل‌ها و آگهی‌های ملکی",
    modExpertsTitle: "متخصص ملکیست",
    modExpertsDesc: "ارتباط با مهندسان، مشاوران و کارشناسان",
    modMarketHubTitle: "هوش بازار",
    modMarketHubDesc: "تحلیل داده‌ها و شاخص‌های بازار مسکن",
    modLibraryTitle: "کتابخانه و قوانین",
    modLibraryDesc: "منابع تخصصی، خبرها و مقررات ساختمانی"
  },
  ar: {
    tabOverview: "نظرة عامة على الحساب",
    tabListings: "إعلاناتي الشخصية ({count})",
    tabSaved: "المحفوظات ({count})",
    tabRequests: "الطلبات ({count})",
    summaryCounts: "{listings} إعلان • {saved} محفوظ • {requests} طلب",
    quickAccessTitle: "وصول سريع إلى أقسام ملكيسم",
    modMarketplaceTitle: "سوق ملكيست",
    modMarketplaceDesc: "تصفح والبحث في العقارات والإعلانات",
    modExpertsTitle: "خبراء ملكيست",
    modExpertsDesc: "التواصل مع المهندسين والمستشارين والخبراء",
    modMarketHubTitle: "ذكاء السوق",
    modMarketHubDesc: "تحليل البيانات ومؤشرات السوق العقاري",
    modLibraryTitle: "المكتبة والقوانين",
    modLibraryDesc: "مراجع متخصصة وأخبار ولوائح البناء"
  },
  en: {
    tabOverview: "Account Overview",
    tabListings: "My Listings ({count})",
    tabSaved: "Saved Items ({count})",
    tabRequests: "Requests ({count})",
    summaryCounts: "{listings} listings • {saved} saved • {requests} requests",
    quickAccessTitle: "Quick Access to MELKISM Modules",
    modMarketplaceTitle: "MELKIST Marketplace",
    modMarketplaceDesc: "Browse property listings",
    modExpertsTitle: "MELKIST Experts",
    modExpertsDesc: "Connect with specialists",
    modMarketHubTitle: "Market Intelligence",
    modMarketHubDesc: "Market trends & indicators",
    modLibraryTitle: "Library & Regulations",
    modLibraryDesc: "Resources, news & rules"
  },
  de: {
    tabOverview: "Kontoübersicht",
    tabListings: "Meine Anzeigen ({count})",
    tabSaved: "Gespeichert ({count})",
    tabRequests: "Anfragen ({count})",
    summaryCounts: "{listings} Anzeigen • {saved} Gespeichert • {requests} Anfragen",
    quickAccessTitle: "Schnellzugriff auf MELKISM-Module",
    modMarketplaceTitle: "MELKIST Marktplatz",
    modMarketplaceDesc: "Immobilienangebote durchsuchen",
    modExpertsTitle: "MELKIST Experten",
    modExpertsDesc: "Mit Fachleuten und Beratern verbinden",
    modMarketHubTitle: "Marktintelligenz",
    modMarketHubDesc: "Markttrends & Kennzahlen",
    modLibraryTitle: "Bibliothek & Vorschriften",
    modLibraryDesc: "Ressourcen, Nachrichten & Regeln"
  },
  fr: {
    tabOverview: "Aperçu du compte",
    tabListings: "Mes annonces ({count})",
    tabSaved: "Enregistrés ({count})",
    tabRequests: "Demandes ({count})",
    summaryCounts: "{listings} annonces • {saved} enregistrés • {requests} demandes",
    quickAccessTitle: "Accès rapide aux modules MELKISM",
    modMarketplaceTitle: "Marché MELKIST",
    modMarketplaceDesc: "Parcourir les annonces immobilières",
    modExpertsTitle: "Experts MELKIST",
    modExpertsDesc: "Contacter des spécialistes",
    modMarketHubTitle: "Intelligence de marché",
    modMarketHubDesc: "Tendances et indicateurs du marché",
    modLibraryTitle: "Bibliothèque & réglementations",
    modLibraryDesc: "Ressources, actualités et règles"
  },
  es: {
    tabOverview: "Resumen de cuenta",
    tabListings: "Mis anuncios ({count})",
    tabSaved: "Guardados ({count})",
    tabRequests: "Solicitudes ({count})",
    summaryCounts: "{listings} anuncios • {saved} guardados • {requests} solicitudes",
    quickAccessTitle: "Acceso rápido a módulos de MELKISM",
    modMarketplaceTitle: "Mercado MELKIST",
    modMarketplaceDesc: "Explorar listados inmobiliarios",
    modExpertsTitle: "Expertos MELKIST",
    modExpertsDesc: "Conectar con especialistas",
    modMarketHubTitle: "Inteligencia de mercado",
    modMarketHubDesc: "Tendencias e indicadores del mercado",
    modLibraryTitle: "Biblioteca y normativas",
    modLibraryDesc: "Recursos, noticias y normas"
  },
  tr: {
    tabOverview: "Hesap Özeti",
    tabListings: "İlanlarım ({count})",
    tabSaved: "Kaydedilenler ({count})",
    tabRequests: "Taleplerim ({count})",
    summaryCounts: "{listings} ilan • {saved} kayıtlı • {requests} talep",
    quickAccessTitle: "MELKISM Modüllerine Hızlı Erişim",
    modMarketplaceTitle: "MELKIST Pazaryeri",
    modMarketplaceDesc: "Emlak ilanlarını inceleyin",
    modExpertsTitle: "MELKIST Uzmanları",
    modExpertsDesc: "Uzmanlarla bağlantı kurun",
    modMarketHubTitle: "Pazar İstihbaratı",
    modMarketHubDesc: "Pazar eğilimleri ve göstergeleri",
    modLibraryTitle: "Kütüphane ve Mevzuat",
    modLibraryDesc: "Kaynaklar, haberler ve kurallar"
  },
  ru: {
    tabOverview: "Обзор аккаунта",
    tabListings: "Мои объявления ({count})",
    tabSaved: "Сохранённое ({count})",
    tabRequests: "Запросы ({count})",
    summaryCounts: "{listings} объявл. • {saved} сохр. • {requests} запросов",
    quickAccessTitle: "Быстрый доступ к модулям MELKISM",
    modMarketplaceTitle: "Маркетплейс MELKIST",
    modMarketplaceDesc: "Просмотр объявлений недвижимости",
    modExpertsTitle: "Эксперты MELKIST",
    modExpertsDesc: "Связь со специалистами",
    modMarketHubTitle: "Аналитика рынка",
    modMarketHubDesc: "Тренды и показатели рынка",
    modLibraryTitle: "Библиотека и законы",
    modLibraryDesc: "Материалы, новости и нормы"
  },
  zh: {
    tabOverview: "账户概览",
    tabListings: "我的信息 ({count})",
    tabSaved: "已收藏 ({count})",
    tabRequests: "我的申请 ({count})",
    summaryCounts: "{listings} 条信息 • {saved} 条收藏 • {requests} 条申请",
    quickAccessTitle: "快速访问 MELKISM 模块",
    modMarketplaceTitle: "MELKIST 市场",
    modMarketplaceDesc: "浏览房源与信息列表",
    modExpertsTitle: "MELKIST 专家",
    modExpertsDesc: "联系专业人士与顾问",
    modMarketHubTitle: "市场情报",
    modMarketHubDesc: "市场趋势与指标分析",
    modLibraryTitle: "资料库与法规",
    modLibraryDesc: "专业资料、资讯与规范"
  },
  it: {
    tabOverview: "Panoramica account",
    tabListings: "I miei annunci ({count})",
    tabSaved: "Salvati ({count})",
    tabRequests: "Richieste ({count})",
    summaryCounts: "{listings} annunci • {saved} salvati • {requests} richieste",
    quickAccessTitle: "Accesso rapido ai moduli MELKISM",
    modMarketplaceTitle: "Marketplace MELKIST",
    modMarketplaceDesc: "Sfoglia gli annunci immobiliari",
    modExpertsTitle: "Esperti MELKIST",
    modExpertsDesc: "Connettiti con specialisti",
    modMarketHubTitle: "Market Intelligence",
    modMarketHubDesc: "Tendenze e indicatori di mercato",
    modLibraryTitle: "Biblioteca e normative",
    modLibraryDesc: "Risorse, notizie e regole"
  }
};

for (const [lang, keys] of Object.entries(extraUserKeys)) {
  const filePath = path.join("messages", `${lang}.json`);
  const raw = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
  const data = JSON.parse(raw);
  data.UserDashboardHome = { ...(data.UserDashboardHome || {}), ...keys };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(`Updated extra UserDashboardHome keys in messages/${lang}.json`);
}
