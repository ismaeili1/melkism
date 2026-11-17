'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerTranslations: Record<string, Record<string, string>> = {
  fa: {
    tagline: 'رسانه هوشمند املاک',
    aboutDesc: 'ملکیسم نخستین رسانه تخصصی و تحلیل‌گر هوشمند بازار املاک، مستغلات و قوانین ساخت‌وساز است که با به‌کارگیری هوش مصنوعی جدیدترین اخبار و داده‌های تحلیلی را در اختیار فعالان این صنعت قرار می‌دهد.',
    aboutSub: 'پایگاه تخصصی تحلیل و پیش‌بینی بازار املاک',
    melkistTagline: 'بازار معاملات هوشمند املاک',
    melkistDesc: 'پلتفرم معاملات، مشارکت در ساخت و ثبت آگهی‌های ملکی. با استفاده از ابزارهای هوشمند احراز هویت و ارزیابی قیمتی، معاملات شفاف و مطمئن را تجربه کنید.',
    melkistSub: 'پلتفرم اختصاصی ملکیست',
    melkistBtn: 'ورود به بازار MELKIST',
    newsletterTitle: 'عضویت در خبرنامه هوشمند',
    newsletterDesc: 'برای دریافت آخرین تحلیل‌های اقتصادی بازار مسکن، تغییرات قوانین و گزارش‌های ویژه، ایمیل یا شماره موبایل خود را وارد کنید.',
    newsletterPlaceholder: 'ایمیل یا شماره موبایل...',
    newsletterBtn: 'عضویت',
    newsletterSuccess: 'عضویت شما در خبرنامه با موفقیت ثبت شد! 🎉',
    privacyNote: '🔒 اطلاعات شما نزد ملکیسم کاملاً محفوظ است.',
    quickAccess: 'دستیابی سریع',
    news: 'اخبار و تحلیل‌های روز',
    library: 'کتابخانه تخصصی معماری و ساخت',
    market: 'هوش بازار و آمار قیمت‌ها',
    laws: 'قوانین، بخشنامه‌ها و حقوق ملکی',
    ai: 'دستیار هوش مصنوعی ملکیسم ✨',
    services: 'خدمات و پشتیبانی',
    account: 'حساب کاربری و احراز هویت',
    vip: 'اشتراک ویژه (VIP)',
    aboutUs: 'درباره ما و اهداف ملکیسم',
    contactUs: 'تماس با پشتیبانی',
    faq: 'سوالات متداول',
    licensesSocial: 'مجوزهای سایت و شبکه‌های اجتماعی',
    enamad: 'نماد اعتماد الکترونیکی',
    samandehi: 'نشان ملی ثبت',
    socialFollow: 'ملکیسم در شبکه‌های اجتماعی:',
    copyright: '© ۱۴۰۵ تمامی حقوق مادی و معنوی متعلق به رسانه هوشمند ملکیسم (MELKISM) است.',
    designedBy: 'طراحی و توسعه با هوش مصنوعی ملکیسم'
  },
  en: {
    tagline: 'Smart Real Estate Media',
    aboutDesc: 'Melkism is the first specialized media and smart analyzer of the real estate market and construction laws, providing the latest news and analytical data to industry professionals using AI.',
    aboutSub: 'Specialized Real Estate Market Analysis Base',
    melkistTagline: 'Smart Real Estate Market',
    melkistDesc: 'Platform for transactions, construction partnerships, and real estate listings. Experience transparent transactions with smart verification and valuation tools.',
    melkistSub: 'Dedicated Melkist Platform',
    melkistBtn: 'Enter MELKIST Market',
    newsletterTitle: 'Smart Newsletter Subscription',
    newsletterDesc: 'Enter your email or phone number to receive the latest housing market economic analysis, law changes, and special reports.',
    newsletterPlaceholder: 'Email or phone number...',
    newsletterBtn: 'Subscribe',
    newsletterSuccess: 'Your subscription has been successfully registered! 🎉',
    privacyNote: '🔒 Your information is completely safe with Melkism.',
    quickAccess: 'Quick Access',
    news: 'Daily News & Analysis',
    library: 'Architecture & Construction Library',
    market: 'Market Intelligence & Prices',
    laws: 'Laws, Circulars & Property Rights',
    ai: 'Melkism AI Assistant ✨',
    services: 'Services & Support',
    account: 'User Account & Verification',
    vip: 'VIP Subscription',
    aboutUs: 'About Us & Melkism Goals',
    contactUs: 'Contact Support',
    faq: 'FAQ',
    licensesSocial: 'Licenses & Social Media',
    enamad: 'E-Trust Symbol',
    samandehi: 'National Registration Symbol',
    socialFollow: 'Melkism on Social Networks:',
    copyright: '© 2026 All material and intellectual rights belong to Melkism Smart Media.',
    designedBy: 'Designed and Developed with Melkism AI'
  },
  ar: {
    tagline: 'وسائل الإعلام العقارية الذكية',
    aboutDesc: 'ملكيسم هي أول وسيلة إعلامية متخصصة ومحلل ذكي لسوق العقارات وقوانين البناء، حيث تقدم أحدث الأخبار والبيانات التحليلية للمتخصصين باستخدام الذكاء الاصطناعي.',
    aboutSub: 'قاعدة متخصصة لتحليل وتوقع سوق العقارات',
    melkistTagline: 'سوق المعاملات العقارية الذكية',
    melkistDesc: 'منصة للمعاملات والمشاركة في البناء وإدراج العقارات. تجربة معاملات شفافة مع أدوات التحقق والتقييم الذكية.',
    melkistSub: 'منصة ملكيست المخصصة',
    melkistBtn: 'الدخول إلى سوق MELKIST',
    newsletterTitle: 'الاشتراك في النشرة الإخبارية الذكية',
    newsletterDesc: 'أدخل بريدك الإلكتروني أو رقم هاتفك لتلقي أحدث التحليلات الاقتصادية وتغييرات القوانين.',
    newsletterPlaceholder: 'البريد الإلكتروني أو الهاتف...',
    newsletterBtn: 'اشتراك',
    newsletterSuccess: 'تم تسجيل اشتراكك بنجاح! 🎉',
    privacyNote: '🔒 معلوماتك محفوظة بالكامل لدى ملكيسم.',
    quickAccess: 'وصول سريع',
    news: 'الأخبار والتحليلات اليومية',
    library: 'مكتبة الهندسة المعمارية والبناء',
    market: 'ذكاء السوق وإحصاءات الأسعار',
    laws: 'القوانين واللوائح والحقوق العقارية',
    ai: 'مساعد الذكاء الاصطناعي لملكيسم ✨',
    services: 'الخدمات والدعم',
    account: 'حساب المستخدم والتحقق',
    vip: 'الاشتراك الممتاز (VIP)',
    aboutUs: 'من نحن وأهداف ملكيسم',
    contactUs: 'الاتصال بالدعم',
    faq: 'الأسئلة الشائعة',
    licensesSocial: 'التراخيص ووسائل التواصل الاجتماعي',
    enamad: 'رمز الثقة الإلكترونية',
    samandehi: 'رمز التسجيل الوطني',
    socialFollow: 'ملكيسم على شبكات التواصل الاجتماعي:',
    copyright: '© ۲۰۲۶ جميع الحقوق محفوظة لوسائل الإعلام الذكية ملكيسم (MELKISM).',
    designedBy: 'تصميم وتطوير بواسطة الذكاء الاصطناعي لملكيسم'
  },
  tr: {
    tagline: 'Akıllı Emlak Medyası',
    aboutDesc: 'Melkism, yapay zeka kullanarak gayrimenkul piyasası ve inşaat kanunları hakkında en son haberleri ve analitik verileri sunan ilk uzman medya ve akıllı analiz platformudur.',
    aboutSub: 'Emlak Piyasası Analiz ve Öngörü Üssü',
    melkistTagline: 'Akıllı Emlak İşlem Pazarı',
    melkistDesc: 'İşlemler, inşaat ortaklıkları ve emlak ilanları için platform. Akıllı kimlik doğrulama ve fiyatlandırma araçlarıyla şeffaf işlemler deneyimleyin.',
    melkistSub: 'Melkist Özel Platformu',
    melkistBtn: 'MELKIST Pazarına Gir',
    newsletterTitle: 'Akıllı Bülten Aboneliği',
    newsletterDesc: 'Konut piyasası ekonomik analizlerini, kanun değişikliklerini ve özel raporları almak için e-posta veya telefon numaranızı girin.',
    newsletterPlaceholder: 'E-posta veya telefon...',
    newsletterBtn: 'Abone Ol',
    newsletterSuccess: 'Aboneliğiniz başarıyla kaydedildi! 🎉',
    privacyNote: '🔒 Bilgileriniz Melkism ile tamamen güvendedir.',
    quickAccess: 'Hızlı Erişim',
    news: 'Günlük Haberler ve Analizler',
    library: 'Mimarlık ve İnşaat Kütüphanesi',
    market: 'Pazar Zekası ve Fiyatlar',
    laws: 'Kanunlar, Genelgeler ve Mülkiyet Hakları',
    ai: 'Melkism Yapay Zeka Asistanı ✨',
    services: 'Hizmetler ve Destek',
    account: 'Kullanıcı Hesabı ve Doğrulama',
    vip: 'VIP Abonelik',
    aboutUs: 'Hakkımızda ve Melkism Hedefleri',
    contactUs: 'Destekle İletişime Geç',
    faq: 'Sıkça Sorulan Sorular',
    licensesSocial: 'Lisanslar ve Sosyal Medya',
    enamad: 'E-Güven Sembolü',
    samandehi: 'Milli Kayıt Sembolü',
    socialFollow: 'Sosyal Medyada Melkism:',
    copyright: '© 2026 Tüm hakları Melkism Akıllı Medyaya aittir.',
    designedBy: 'Melkism Yapay Zeka ile Tasarlandı ve Geliştirildi'
  },
  de: {
    tagline: 'Intelligente Immobilien-Medien',
    aboutDesc: 'Melkism ist das erste spezialisierte Medium und der intelligente Analysator des Immobilienmarktes und der Baugesetze, der Branchenexperten KI-gestützte Analysen liefert.',
    aboutSub: 'Spezialisierte Plattform für Immobilienmarktanalysen',
    melkistTagline: 'Intelligenter Immobilienmarkt',
    melkistDesc: 'Plattform für Transaktionen, Baupartnerschaften und Immobilienangebote. Erleben Sie transparente Transaktionen mit intelligenten Bewertungstools.',
    melkistSub: 'Dedizierte Melkist-Plattform',
    melkistBtn: 'MELKIST-Markt betreten',
    newsletterTitle: 'Intelligentes Newsletter-Abonnement',
    newsletterDesc: 'Geben Sie Ihre E-Mail-Adresse oder Telefonnummer ein, um die neuesten Marktanalysen und Gesetzesänderungen zu erhalten.',
    newsletterPlaceholder: 'E-Mail oder Telefonnummer...',
    newsletterBtn: 'Abonnieren',
    newsletterSuccess: 'Ihr Abonnement wurde erfolgreich registriert! 🎉',
    privacyNote: '🔒 Ihre Daten sind bei Melkism absolut sicher.',
    quickAccess: 'Schnellzugriff',
    news: 'Tägliche Nachrichten & Analysen',
    library: 'Architektur- & Baubibliothek',
    market: 'Markt-KI & Preise',
    laws: 'Gesetze & Immobilienrechte',
    ai: 'Melkism KI-Assistent ✨',
    services: 'Service & Support',
    account: 'Benutzerkonto & Verifizierung',
    vip: 'VIP-Abonnement',
    aboutUs: 'Über uns & Melkism-Ziele',
    contactUs: 'Support kontaktieren',
    faq: 'Häufig gestellte Fragen',
    licensesSocial: 'Lizenzen & Soziale Medien',
    enamad: 'E-Trust-Symbol',
    samandehi: 'Nationale Registrierung',
    socialFollow: 'Melkism in sozialen Netzwerken:',
    copyright: '© 2026 Alle Rechte vorbehalten für Melkism Smart Media.',
    designedBy: 'Entwickelt mit Melkism KI'
  },
  fr: {
    tagline: 'Média Immobilier Intelligent',
    aboutDesc: 'Melkism est le premier média spécialisé et analyseur intelligent du marché immobilier et des lois de construction, fournissant des données analytiques grâce à l’IA.',
    aboutSub: 'Base d’analyse spécialisée du marché immobilier',
    melkistTagline: 'Marché Immobilier Intelligent',
    melkistDesc: 'Plateforme de transactions, partenariats de construction et annonces immobilières. Réalisez des transactions transparentes avec nos outils intelligents.',
    melkistSub: 'Plateforme Dédiée Melkist',
    melkistBtn: 'Entrer dans le Marché MELKIST',
    newsletterTitle: 'Abonnement à la Newsletter',
    newsletterDesc: 'Saisissez votre e-mail ou téléphone pour recevoir les dernières analyses économiques et modifications de lois.',
    newsletterPlaceholder: 'E-mail ou téléphone...',
    newsletterBtn: 'S’abonner',
    newsletterSuccess: 'Votre abonnement a été enregistré avec succès ! 🎉',
    privacyNote: '🔒 Vos informations sont totalement sécurisées chez Melkism.',
    quickAccess: 'Accès Rapide',
    news: 'Actualités & Analyses',
    library: 'Bibliothèque d’Architecture',
    market: 'Intelligence Marché & Prix',
    laws: 'Lois & Droits Immobiliers',
    ai: 'Assistant IA Melkism ✨',
    services: 'Services & Support',
    account: 'Compte & Vérification',
    vip: 'Abonnement VIP',
    aboutUs: 'À propos de nous & Objectifs',
    contactUs: 'Contacter le Support',
    faq: 'Foire Aux Questions',
    licensesSocial: 'Licences & Réseaux Sociaux',
    enamad: 'Symbole E-Trust',
    samandehi: 'Symbole National',
    socialFollow: 'Melkism sur les réseaux sociaux :',
    copyright: '© 2026 Tous droits réservés à Melkism Smart Media.',
    designedBy: 'Conçu et développé avec l’IA Melkism'
  },
  ru: {
    tagline: 'Умные СМИ о недвижимости',
    aboutDesc: 'Melkism — первое специализированное СМИ и умный анализатор рынка недвижимости и строительного законодательства, предоставляющий аналитические данные на основе ИИ.',
    aboutSub: 'База анализа и прогнозирования рынка недвижимости',
    melkistTagline: 'Умный рынок недвижимости',
    melkistDesc: 'Платформа для сделок, партнерства в строительстве и объявлений о недвижимости. Прозрачные сделки с использованием умных инструментов оценки.',
    melkistSub: 'Выделенная платформа Melkist',
    melkistBtn: 'Войти на рынок MELKIST',
    newsletterTitle: 'Подписка на умную рассылку',
    newsletterDesc: 'Введите ваш email или номер телефона для получения последних экономических анализов рынка и изменений в законах.',
    newsletterPlaceholder: 'Email или телефон...',
    newsletterBtn: 'Подписаться',
    newsletterSuccess: 'Ваша подписка успешно зарегистрирована! 🎉',
    privacyNote: '🔒 Ваши данные полностью защищены с Melkism.',
    quickAccess: 'Быстрый доступ',
    news: 'Новости и аналитика',
    library: 'Архитектурная библиотека',
    market: 'Аналитика рынка и цены',
    laws: 'Законы и права на недвижимость',
    ai: 'ИИ-помощник Melkism ✨',
    services: 'Сервис и поддержка',
    account: 'Аккаунт и верификация',
    vip: 'VIP-подписка',
    aboutUs: 'О нас и цели Melkism',
    contactUs: 'Связаться с поддержкой',
    faq: 'Часто задаваемые вопросы',
    licensesSocial: 'Лицензии и социальные сети',
    enamad: 'Знак Электронного Доверия',
    samandehi: 'Знак Национальной Регистрации',
    socialFollow: 'Melkism в социальных сетях:',
    copyright: '© 2026 Все права защищены Melkism Smart Media.',
    designedBy: 'Разработано с использованием ИИ Melkism'
  },
  zh: {
    tagline: '智能房地产媒体',
    aboutDesc: 'Melkism 是首家利用人工智能分析房地产市场和建筑法律的专业媒体平台，为从业人员提供最新的新闻与分析数据。',
    aboutSub: '专业房地产市场分析与预测基地',
    melkistTagline: '智能房地产交易市场',
    melkistDesc: '房地产交易、建设合作和房源发布平台。利用智能身份验证和价格评估工具，体验透明安全的交易。',
    melkistSub: 'Melkist 专属平台',
    melkistBtn: '进入 MELKIST 市场',
    newsletterTitle: '订阅智能电子报',
    newsletterDesc: '输入您的电子邮件或电话号码，获取最新的房地产市场分析和法律法规动态。',
    newsletterPlaceholder: '电子邮件或手机号...',
    newsletterBtn: '订阅',
    newsletterSuccess: '您已成功订阅！ 🎉',
    privacyNote: '🔒 您的个人信息在 Melkism 受到严格保护。',
    quickAccess: '快速访问',
    news: '每日新闻与深度分析',
    library: '建筑与设计专业图书馆',
    market: '市场情报与价格数据',
    laws: '法律法规与房产权益',
    ai: 'Melkism AI 助手 ✨',
    services: '服务与支持',
    account: '用户账户与身份验证',
    vip: 'VIP 专属订阅',
    aboutUs: '关于我们与发展目标',
    contactUs: '联系客服支持',
    faq: '常见问题解答',
    licensesSocial: '平台认证与社交媒体',
    enamad: '电子信任标志',
    samandehi: '国家备案标志',
    socialFollow: '关注 Melkism 社交账号：',
    copyright: '© 2026 Melkism 智能媒体保留所有权利。',
    designedBy: '由 Melkism AI 驱动设计与开发'
  },
  es: {
    tagline: 'Medio Inmobiliario Inteligente',
    aboutDesc: 'Melkism es el primer medio especializado y analizador inteligente del mercado inmobiliario y leyes de construcción, ofreciendo datos analíticos con IA.',
    aboutSub: 'Base especializada en análisis del mercado inmobiliario',
    melkistTagline: 'Mercado Inmobiliario Inteligente',
    melkistDesc: 'Plataforma para transacciones, sociedades de construcción y anuncios inmobiliarios. Experimente transacciones transparentes con herramientas inteligentes.',
    melkistSub: 'Plataforma Dedicada Melkist',
    melkistBtn: 'Entrar al Mercado MELKIST',
    newsletterTitle: 'Suscripción al Boletín Inteligente',
    newsletterDesc: 'Ingrese su correo o teléfono para recibir análisis económicos del mercado inmobiliario y cambios legales.',
    newsletterPlaceholder: 'Correo o teléfono...',
    newsletterBtn: 'Suscribirse',
    newsletterSuccess: '¡Su suscripción se ha registrado con éxito! 🎉',
    privacyNote: '🔒 Su información está completamente segura con Melkism.',
    quickAccess: 'Acceso Rápido',
    news: 'Noticias y Análisis Diarios',
    library: 'Biblioteca de Arquitectura y Construcción',
    market: 'Inteligencia de Mercado y Precios',
    laws: 'Leyes, Circulares y Derechos Inmobiliarios',
    ai: 'Asistente IA de Melkism ✨',
    services: 'Servicios y Soporte',
    account: 'Cuenta de Usuario y Verificación',
    vip: 'Suscripción VIP',
    aboutUs: 'Sobre Nosotros y Objetivos',
    contactUs: 'Contactar a Soporte',
    faq: 'Preguntas Frecuentes',
    licensesSocial: 'Licencias y Redes Sociales',
    enamad: 'Sello de Confianza Electrónica',
    samandehi: 'Registro Nacional',
    socialFollow: 'Melkism en redes sociales:',
    copyright: '© 2026 Todos los derechos reservados a Melkism Smart Media.',
    designedBy: 'Diseñado y desarrollado con la IA de Melkism'
  },
  it: {
    tagline: 'Media Immobiliare Intelligente',
    aboutDesc: 'Melkism è il primo media specializzato e analizzatore intelligente del mercato immobiliare e delle leggi edilizie, fornendo analisi guidate dall’IA.',
    aboutSub: 'Piattaforma specializzata nell’analisi del mercato immobiliare',
    melkistTagline: 'Mercato Immobiliare Intelligente',
    melkistDesc: 'Piattaforma per transazioni, partnership edilizie e annunci immobiliari. Sperimenta transazioni trasparenti con strumenti intelligenti.',
    melkistSub: 'Piattaforma Dedicata Melkist',
    melkistBtn: 'Entra nel Mercato MELKIST',
    newsletterTitle: 'Iscrizione alla Newsletter Intelligente',
    newsletterDesc: 'Inserisci la tua email o il numero di telefono per ricevere le ultime analisi di mercato e aggiornamenti normativi.',
    newsletterPlaceholder: 'Email o numero di telefono...',
    newsletterBtn: 'Iscriviti',
    newsletterSuccess: 'La tua iscrizione è stata registrata con successo! 🎉',
    privacyNote: '🔒 I tuoi dati sono completamente al sicuro con Melkism.',
    quickAccess: 'Accesso Rapido',
    news: 'Notizie e Analisi Giornaliere',
    library: 'Biblioteca di Architettura e Costruzioni',
    market: 'Market Intelligence e Prezzi',
    laws: 'Leggi, Circolari e Diritti Immobiliari',
    ai: 'Assistente IA Melkism ✨',
    services: 'Servizi e Supporto',
    account: 'Account Utente e Verifica',
    vip: 'Abbonamento VIP',
    aboutUs: 'Chi Siamo e Obiettivi',
    contactUs: 'Contatta il Supporto',
    faq: 'Domande Frequenti (FAQ)',
    licensesSocial: 'Licenze e Social Media',
    enamad: 'Simbolo di Fiducia Elettronica',
    samandehi: 'Registro Nazionale',
    socialFollow: 'Melkism sui Social Network:',
    copyright: '© 2026 Tutti i diritti riservati a Melkism Smart Media.',
    designedBy: 'Progettato e Sviluppato con l’IA di Melkism'
  }
};

export default function SiteFooter() {
  const [newsletterInput, setNewsletterInput] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  const pathname = usePathname();
  const pathSegments = pathname ? pathname.split('/') : [];
  const currentLocale = footerTranslations[pathSegments[1]] ? pathSegments[1] : 'fa';
  const t = footerTranslations[currentLocale] || footerTranslations.fa;
  const dir = ['fa', 'ar'].includes(currentLocale) ? 'rtl' : 'ltr';

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterInput.trim()) {
      setNewsletterStatus(t.newsletterSuccess);
      setNewsletterInput('');
      setTimeout(() => setNewsletterStatus(''), 4000);
    }
  };

  return (
    <footer className={`bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-12 pb-8 px-4 sm:px-6 lg:px-8 font-sans ${dir === 'rtl' ? 'dir-rtl' : 'dir-ltr'}`} dir={dir}>
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= ردیف بالا: ۳ باکس کارتی ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* الف: درباره ملکیسم */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-slate-700 transition">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/melkism-logo-Mark-White1.png" 
                  alt="ملکیسم" 
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/melkism-logo-Mark.png';
                  }}
                />
                <div>
                  <span className="block text-lg font-black text-orange-500 tracking-wider">MELKISM</span>
                  <span className="block text-[10px] text-blue-400 font-bold">{t.tagline}</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.aboutDesc}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 text-[11px] text-white">
              {t.aboutSub}
            </div>
          </div>

          {/* ب: بازار MELKIST */}
          <div className="bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900 border border-blue-500/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-blue-500/50 transition">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/melkist-logo-Mark-white1.png" 
                  alt="بازار MELKIST" 
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/melkism-logo-Mark.png';
                  }}
                />
                <div>
                  <span className="block text-lg font-black text-orange-500 tracking-wider">MELKIST</span>
                  <span className="block text-[10px] text-blue-400 font-bold">{t.melkistTagline}</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.melkistDesc}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-white font-medium">{t.melkistSub}</span>
              <Link 
                href={`/${currentLocale}/melkist`} 
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-lg shadow-blue-600/30 flex items-center gap-1"
              >
                <span>{t.melkistBtn}</span>
                <span>{dir === 'rtl' ? '←' : '→'}</span>
              </Link>
            </div>
          </div>

          {/* ج: خبرنامه */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-slate-700 transition">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <img 
                  src="/images/FGA.png" 
                  alt="خبرنامه هوشمند" 
                  className="w-7 h-7 object-contain"
                />
                <h3 className="text-sm font-bold text-orange-500">{t.newsletterTitle}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.newsletterDesc}
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-1">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder={t.newsletterPlaceholder} 
                    value={newsletterInput}
                    onChange={(e) => setNewsletterInput(e.target.value)}
                    required
                    className={`w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition font-mono ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                    dir="ltr"
                  />
                  <button 
                    type="submit" 
                    className={`absolute ${dir === 'rtl' ? 'left-1.5' : 'right-1.5'} top-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition`}
                  >
                    {t.newsletterBtn}
                  </button>
                </div>
                {newsletterStatus && (
                  <p className="text-[11px] text-emerald-400 font-medium text-center">{newsletterStatus}</p>
                )}
              </form>
            </div>
            <div className="pt-3 border-t border-slate-800/80 text-[10px] text-white">
              {t.privacyNote}
            </div>
          </div>

        </div>

        {/* ================= ردیف پایین: ۳ ستون لینک‌ها و مجوزها ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-slate-800/80">
          
          {/* الف: دسترسی سریع */}
          <div className="space-y-3">
            <h4 className={`text-xs font-black text-blue-400 uppercase tracking-wider border-r-2 border-blue-500 pr-2 ${dir === 'rtl' ? 'border-r-2 border-l-0' : 'border-l-2 border-r-0 pl-2 pr-0'}`}>
              {t.quickAccess}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href={`/${currentLocale}/news`} className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[10px] text-blue-500">▪</span>
                  <span>{t.news}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/library`} className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[10px] text-blue-500">▪</span>
                  <span>{t.library}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/market-intelligence`} className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[10px] text-blue-500">▪</span>
                  <span>{t.market}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/laws`} className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[10px] text-blue-500">▪</span>
                  <span>{t.laws}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/ai-assistant`} className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[10px] text-blue-500">▪</span>
                  <span>{t.ai}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ب: منوهای خدمات و پشتیبانی */}
          <div className="space-y-3">
            <h4 className={`text-xs font-black text-blue-400 uppercase tracking-wider ${dir === 'rtl' ? 'border-r-2 border-l-0 pr-2' : 'border-l-2 border-r-0 pl-2'} border-blue-500`}>
              {t.services}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href={`/${currentLocale}/profile`} className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[10px] text-blue-500">▪</span>
                  <span>{t.account}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/profile`} className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[10px] text-blue-500">▪</span>
                  <span>{t.vip}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/about`} className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[10px] text-blue-500">▪</span>
                  <span>{t.aboutUs}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/contact`} className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[10px] text-blue-500">▪</span>
                  <span>{t.contactUs}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/faq`} className="hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[10px] text-blue-500">▪</span>
                  <span>{t.faq}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ج: مجوزها و شبکه‌های اجتماعی */}
          <div className="space-y-4">
            <h4 className={`text-xs font-black text-blue-400 uppercase tracking-wider ${dir === 'rtl' ? 'border-r-2 border-l-0 pr-2' : 'border-l-2 border-r-0 pl-2'} border-blue-500`}>
              {t.licensesSocial}
            </h4>
            
            {/* لوگوی مجوزها / نمادها */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center p-2 text-[10px] text-slate-500 text-center shadow">
                {t.enamad}
              </div>
              <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center p-2 text-[10px] text-slate-500 text-center shadow">
                {t.samandehi}
              </div>
            </div>

            {/* شبکه‌های اجتماعی */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] text-slate-400 block font-medium">{t.socialFollow}</span>
              <div className="flex items-center gap-2 flex-wrap">
                {/* اینستاگرام */}
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()} 
                  title="Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition shadow group"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* تلگرام */}
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()} 
                  title="Telegram"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-sky-500 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition shadow group"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.128.832.941z"/>
                  </svg>
                </a>

                {/* واتس‌اپ */}
                <a 
                  href="#" 
                  onClick={(e) => e.preventDefault()} 
                  title="WhatsApp"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-500 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition shadow group"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.146-.667.149"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* کپی‌رایت پایین صفحه */}
        <div className="pt-6 border-t border-slate-800/80 text-center text-xs text-slate-500 space-y-1">
          <p>{t.copyright}</p>
          <p className="text-[11px] text-blue-400 font-medium">{t.designedBy}</p>
        </div>

      </div>
    </footer>
  );
}