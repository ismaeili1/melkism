'use client';

import { useTranslations } from 'next-intl';
import Link from "next/link";

interface NewsDetailPageProps {
  params: { slug: string; locale: string };
}

// تعریف پشتیبانی از جهت‌دهی زبان‌ها
const rtlLocales = ["fa", "ar"];

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const slug = params.slug;
  const locale = params.locale || "fa";
  const isRtl = rtlLocales.includes(locale);

  // پایگاه داده نمونه با پشتیبانی از ساختار چندزبانه (۱۰ زبان پروژه)
  const newsDatabase: Record<string, Record<string, { title: string; category: string; author: string; date: string; content: string; imageUrl: string }>> = {
    "market-analysis-fall-1405": {
      fa: {
        title: "تحلیل روند قیمت مسکن در مناطق ۲۲ گانه تهران - پاییز ۱۴۰۵",
        category: "تحلیل بازار",
        author: "دکتر مرتضی اسماعیلی",
        date: "۱۴۰۵/۰۷/۱۶",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        content: "بررسی آمارهای رسمی معاملات مسکن نشان‌دهنده ورود بازار به فاز تعادل نسبی است..."
      },
      en: {
        title: "Housing Price Trend Analysis in 22 Districts of Tehran - Fall 2026",
        category: "Market Analysis",
        author: "Dr. Morteza Ismaeili",
        date: "2026/10/08",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        content: "An analysis of official housing transaction statistics indicates the market is entering a phase of relative equilibrium..."
      },
      ar: {
        title: "تحليل اتجاه أسعار المساكن في المناطق الـ 22 بطهران - خريف 2026",
        category: "تحليل السوق",
        author: "د. مرتضی إسماعيلي",
        date: "2026/10/08",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        content: "تُظهر الإحصاءات الرسمية لمعاملات الإسكان أن السوق يدخل مرحلة من التوازن النسبي..."
      },
      ru: {
        title: "Анализ динамики цен на жилье в 22 округах Тегерана - Осень 2026",
        category: "Анализ рынка",
        author: "Д-р Мортеза Исмаили",
        date: "2026/10/08",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        content: "Анализ официальной статистики сделок с жильем показывает, что рынок вступает в фазу относительного равновесия..."
      },
      tr: {
        title: "Tahran'ın 22 Bölgesinde Konut Fiyatı Trend Analizi - Sonbahar 2026",
        category: "Piyasa Analizi",
        author: "Dr. Morteza Ismaeili",
        date: "2026/10/08",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        content: "Konut işlemleri resmi istatistiklerinin analizi, piyasanın göreceli bir denge aşamasına girdiğini göstermektedir..."
      },
      fr: {
        title: "Analyse des tendances des prix immobiliers dans les 22 districts de Téhéran - Automne 2026",
        category: "Analyse du marché",
        author: "Dr. Morteza Ismaeili",
        date: "2026/10/08",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        content: "L'analyse des statistiques officielles des transactions immobilières indique que le marché entre dans une phase d'équilibre relatif..."
      },
      de: {
        title: "Wohnungspreistrendanalyse in den 22 Bezirken von Teheran - Herbst 2026",
        category: "Marktanalyse",
        author: "Dr. Morteza Ismaeili",
        date: "2026/10/08",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        content: "Eine Analyse der offiziellen Transaktionsstatistiken zeigt, dass der Markt in eine Phase des relativen Gleichgewichts eintritt..."
      },
      zh: {
        title: "德黑兰22个区住房价格走势分析 - 2026年秋季",
        category: "市场分析",
        author: "莫尔蒂扎·伊斯梅利 博士",
        date: "2026/10/08",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        content: "官方住房交易统计数据的分析表明，市场正在进入相对平衡阶段..."
      },
      es: {
        title: "Análisis de tendencias de precios de vivienda en los 22 distritos de Teherán - Otoño 2026",
        category: "Análisis de mercado",
        author: "Dr. Morteza Ismaeili",
        date: "2026/10/08",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        content: "Un análisis de las estadísticas oficiales de transacciones de vivienda indica que el mercado está entrando en una fase de equilibrio relativo..."
      },
      it: {
        title: "Analisi dell'andamento dei prezzi immobiliari nei 22 quartieri di Teheran - Autunno 2026",
        category: "Analisi di mercato",
        author: "Dr. Morteza Ismaeili",
        date: "2026/10/08",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        content: "Un'analisi delle statistiche ufficiali sulle transazioni immobiliari indica che il mercato sta entrando in una fase di relativo equilibrio..."
      }
    }
  };

  // استخراج مقاله بر اساس اسلاگ و زبان فعال (با قابلیت بازگشت به فارسی یا انگلیسی در صورت عدم وجود ترجمه)
  const itemTranslations = newsDatabase[slug];
  const article = (itemTranslations && (itemTranslations[locale] || itemTranslations["fa"])) || {
    title: `Sample News ID: ${slug}`,
    category: "News & Announcements",
    author: "Melkism Editorial Team",
    date: "Today",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    content: "This content was automatically fetched from the Melkism content repository."
  };

  return (
    <div 
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 font-sans space-y-8 ${isRtl ? 'dir-rtl' : 'dir-ltr'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <Link 
            href={`/${locale}/admin/news`} 
            className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100"
          >
            {isRtl ? '← بازگشت به مدیریت اخبار' : '← Back to News Management'}
          </Link>
        </div>
        <div className="space-y-3">
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full inline-block">
            {article.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            {article.title}
          </h1>
        </div>
        {article.imageUrl && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 max-h-[400px]">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 text-sm leading-relaxed text-slate-700">
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
}