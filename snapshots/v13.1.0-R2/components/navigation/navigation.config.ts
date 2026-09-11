export type SupportedLocale = "fa" | "en" | "ar" | "tr";

export type NavigationItem = {
  key: string;
  href: string;
  labels: Record<SupportedLocale, string>;
};

export const navigationItems: NavigationItem[] = [
  {
    key: "news",
    href: "/news",
    labels: {
      fa: "اخبار",
      en: "News",
      ar: "الأخبار",
      tr: "Haberler",
    },
  },
  {
    key: "articles",
    href: "/articles",
    labels: {
      fa: "مقالات",
      en: "Articles",
      ar: "المقالات",
      tr: "Makaleler",
    },
  },
  {
    key: "research",
    href: "/research",
    labels: {
      fa: "پژوهش",
      en: "Research",
      ar: "البحوث",
      tr: "Araştırma",
    },
  },
  {
    key: "markets",
    href: "/markets",
    labels: {
      fa: "بازارها",
      en: "Markets",
      ar: "الأسواق",
      tr: "Piyasalar",
    },
  },
  {
    key: "cities",
    href: "/cities",
    labels: {
      fa: "شهرها",
      en: "Cities",
      ar: "المدن",
      tr: "Şehirler",
    },
  },
  {
    key: "countries",
    href: "/countries",
    labels: {
      fa: "کشورها",
      en: "Countries",
      ar: "الدول",
      tr: "Ülkeler",
    },
  },
  {
    key: "trends",
    href: "/trends",
    labels: {
      fa: "روندها",
      en: "Trends",
      ar: "الاتجاهات",
      tr: "Trendler",
    },
  },
  {
    key: "data",
    href: "/data",
    labels: {
      fa: "داده",
      en: "Data",
      ar: "البيانات",
      tr: "Veri",
    },
  },
  {
    key: "reports",
    href: "/reports",
    labels: {
      fa: "گزارش‌ها",
      en: "Reports",
      ar: "التقارير",
      tr: "Raporlar",
    },
  },
];
