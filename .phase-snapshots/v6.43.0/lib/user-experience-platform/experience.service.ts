import type {
    ExperienceDomain,
    ExperienceFeature,
    ExperienceHomeModel,
    ExperienceLocale,
    ExperiencePreference,
    ExperienceResponse,
} from "./experience.types";

const FEATURES: ExperienceFeature[] = [
    {
        id: "ai-search",
        title: "AI Search",
        description:
            "Search across the MELKISM knowledge and intelligence ecosystem.",
        domain: "search",
        href: "/search",
        priority: 100,
    },
    {
        id: "recommendations",
        title: "Intelligent Recommendations",
        description:
            "Discover relevant content and intelligence based on context and interests.",
        domain: "recommendations",
        href: "/recommendations",
        priority: 95,
    },
    {
        id: "market-intelligence",
        title: "Market Intelligence",
        description:
            "Explore market price, demand, supply, transaction and investment signals.",
        domain: "market",
        href: "/market-intelligence",
        priority: 90,
    },
    {
        id: "architecture-intelligence",
        title: "Architecture Intelligence",
        description:
            "Explore architecture, design, performance, sustainability and BIM intelligence.",
        domain: "architecture",
        href: "/architecture-intelligence",
        priority: 85,
    },
    {
        id: "properties",
        title: "Property Discovery",
        description:
            "Explore property-oriented experiences across the real estate ecosystem.",
        domain: "property",
        href: "/property",
        priority: 80,
    },
    {
        id: "research",
        title: "Research & Reports",
        description:
            "Discover research, reports and evidence-based built-environment knowledge.",
        domain: "research",
        href: "/reports",
        priority: 75,
    },
    {
        id: "news",
        title: "News Intelligence",
        description:
            "Explore developments across real estate and the built environment.",
        domain: "news",
        href: "/news",
        priority: 70,
    },
    {
        id: "data",
        title: "Data Intelligence",
        description:
            "Explore structured indicators and built-environment data.",
        domain: "data",
        href: "/data",
        priority: 65,
    },
];

const TAGLINE: Record<
    ExperienceLocale,
    string
> = {
    fa: "رسانه، دانش و هوش برای املاک و محیط ساخته‌شده",
    en: "Media, Knowledge and Intelligence for Real Estate and the Built Environment.",
    ar: "الإعلام والمعرفة والذكاء للعقارات والبيئة المبنية",
    tr: "Gayrimenkul ve Yapılı Çevre için Medya, Bilgi ve Zekâ",
};

const DOMAIN_TRANSLATIONS: Record<
    ExperienceDomain,
    Partial<Record<ExperienceLocale, string>>
> = {
    discovery: {
        fa: "اکتشاف",
        ar: "اكتشاف",
        tr: "Keşif",
    },
    search: {
        fa: "جستجو",
        ar: "بحث",
        tr: "Arama",
    },
    recommendations: {
        fa: "پیشنهادها",
        ar: "التوصيات",
        tr: "Öneriler",
    },
    market: {
        fa: "بازار",
        ar: "السوق",
        tr: "Piyasa",
    },
    architecture: {
        fa: "معماری",
        ar: "العمارة",
        tr: "Mimarlık",
    },
    property: {
        fa: "املاک",
        ar: "العقارات",
        tr: "Gayrimenkul",
    },
    research: {
        fa: "پژوهش",
        ar: "البحث",
        tr: "Araştırma",
    },
    news: {
        fa: "اخبار",
        ar: "الأخبار",
        tr: "Haberler",
    },
    data: {
        fa: "داده",
        ar: "البيانات",
        tr: "Veri",
    },
};

function localizeDomain(
    domain: ExperienceDomain,
    locale: ExperienceLocale,
): string {
    return (
        DOMAIN_TRANSLATIONS[domain]?.[locale] ??
        domain
    );
}

function localizeFeatures(
    locale: ExperienceLocale,
): ExperienceFeature[] {
    return FEATURES.map(
        (feature) => ({
            ...feature,
            title:
                locale === "en"
                    ? feature.title
                    : `${localizeDomain(
                          feature.domain,
                          locale,
                      )} — ${feature.title}`,
        }),
    ).sort(
        (a, b) =>
            b.priority -
            a.priority,
    );
}

export function getExperienceDomains(): ExperienceDomain[] {
    return [
        "discovery",
        "search",
        "recommendations",
        "market",
        "architecture",
        "property",
        "research",
        "news",
        "data",
    ];
}

export function getExperienceHome(
    locale: ExperienceLocale,
): ExperienceHomeModel {
    const features =
        localizeFeatures(locale);

    const preferences:
        ExperiencePreference = {
        interests: [],
        preferredDomains: [
            "discovery",
            "search",
            "recommendations",
            "market",
            "architecture",
        ],
        preferredSurfaces: [
            "hero",
            "search",
            "recommendations",
            "market",
            "architecture",
            "content",
            "footer",
        ],
    };

    return {
        locale,
        tagline: TAGLINE[locale],
        features,
        preferences,
    };
}

export function getExperience(
    locale: ExperienceLocale,
): ExperienceResponse {
    return {
        locale,
        generatedAt:
            new Date().toISOString(),
        dataStatus: "platform",
        home:
            getExperienceHome(
                locale,
            ),
    };
}
