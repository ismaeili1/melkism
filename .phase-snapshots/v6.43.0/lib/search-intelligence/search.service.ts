import type {
    SearchDocument,
    SearchIntent,
    SearchLanguage,
    SearchQuery,
    SearchResponse,
    SearchResult,
} from "./search.types";

const STOP_WORDS = new Set([
    "and",
    "the",
    "for",
    "with",
    "from",
    "this",
    "that",
    "در",
    "از",
    "به",
    "با",
    "برای",
    "و",
    "یا",
    "یک",
]);

const DOCUMENTS: SearchDocument[] = [
    {
        id: "core-property-discovery",
        title: "Property Discovery",
        description: "Discover properties, buying opportunities and real estate listings.",
        type: "property",
        tags: ["property", "real estate", "buy", "sell", "rent"],
        keywords: ["ملک", "املاک", "خرید", "فروش", "اجاره", "property", "real estate"],
        url: "/property",
    },
    {
        id: "market-intelligence",
        title: "Market Intelligence",
        description: "Real estate markets, prices, trends and investment intelligence.",
        type: "market",
        tags: ["market", "prices", "investment", "trends"],
        keywords: ["بازار", "قیمت", "سرمایه گذاری", "روند", "market", "investment"],
        url: "/markets",
    },
    {
        id: "architecture-intelligence",
        title: "Architecture Intelligence",
        description: "Architecture, design, buildings, urban analysis and sustainability.",
        type: "architecture",
        tags: ["architecture", "design", "building", "urban"],
        keywords: ["معماری", "طراحی", "ساختمان", "شهر", "architecture", "design"],
        url: "/architecture",
    },
    {
        id: "city-intelligence",
        title: "Cities Intelligence",
        description: "City intelligence, urban indicators and city-level knowledge.",
        type: "city",
        tags: ["city", "urban", "cities"],
        keywords: ["شهر", "شهری", "شهرها", "city", "urban"],
        url: "/cities",
    },
    {
        id: "research-reports",
        title: "Research & Reports",
        description: "Research reports, studies, evidence and knowledge resources.",
        type: "report",
        tags: ["research", "report", "study", "knowledge"],
        keywords: ["تحقیق", "گزارش", "پژوهش", "دانش", "research", "report"],
        url: "/reports",
    },
    {
        id: "news-intelligence",
        title: "Real Estate & Built Environment News",
        description: "News and current developments across real estate and the built environment.",
        type: "news",
        tags: ["news", "real estate", "architecture"],
        keywords: ["خبر", "اخبار", "news", "real estate", "architecture"],
        url: "/news",
    },
    {
        id: "data-intelligence",
        title: "Data Intelligence",
        description: "Structured real estate, market and built-environment data.",
        type: "data",
        tags: ["data", "analytics", "indicators"],
        keywords: ["داده", "شاخص", "تحلیل", "data", "analytics"],
        url: "/data",
    },
    {
        id: "knowledge-articles",
        title: "Knowledge Articles",
        description: "Articles and expert knowledge for real estate and architecture.",
        type: "article",
        tags: ["article", "knowledge", "expert"],
        keywords: ["مقاله", "دانش", "تحلیل", "article", "knowledge"],
        url: "/articles",
    },
];

const INTENT_KEYWORDS: Record<SearchIntent, string[]> = {
    property: [
        "property",
        "real estate",
        "home",
        "house",
        "apartment",
        "buy",
        "sell",
        "rent",
        "ملک",
        "املاک",
        "خانه",
        "آپارتمان",
        "خرید",
        "فروش",
        "اجاره",
    ],
    market: [
        "market",
        "price",
        "prices",
        "investment",
        "trend",
        "بازار",
        "قیمت",
        "سرمایه",
        "روند",
    ],
    architecture: [
        "architecture",
        "architect",
        "design",
        "building",
        "معماری",
        "معمار",
        "طراحی",
        "ساختمان",
    ],
    city: [
        "city",
        "cities",
        "urban",
        "شهر",
        "شهری",
        "شهرها",
    ],
    news: [
        "news",
        "خبر",
        "اخبار",
    ],
    report: [
        "report",
        "research",
        "study",
        "گزارش",
        "پژوهش",
        "تحقیق",
    ],
    data: [
        "data",
        "analytics",
        "indicator",
        "داده",
        "تحلیل",
        "شاخص",
    ],
    general: [],
};

function normalize(value: string): string {
    return value
        .toLowerCase()
        .replace(/[،؛؟!.,:()[\]{}"'`]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function tokenize(value: string): string[] {
    return normalize(value)
        .split(" ")
        .map((item) => item.trim())
        .filter((item) => item.length > 1 && !STOP_WORDS.has(item));
}

function detectIntent(query: string): SearchIntent {
    const normalized = normalize(query);

    const ranked = (
        Object.entries(INTENT_KEYWORDS) as Array<[SearchIntent, string[]]>
    )
        .filter(([intent]) => intent !== "general")
        .map(([intent, keywords]) => {
            const score = keywords.reduce(
                (total, keyword) =>
                    total + (normalized.includes(normalize(keyword)) ? 1 : 0),
                0,
            );

            return { intent, score };
        })
        .sort(
            (a, b) =>
                b.score - a.score ||
                a.intent.localeCompare(b.intent),
        );

    return ranked[0]?.score > 0
        ? ranked[0].intent
        : "general";
}

function scoreDocument(
    queryTokens: string[],
    queryIntent: SearchIntent,
    document: SearchDocument,
): SearchResult {
    const titleTokens = tokenize(document.title);
    const descriptionTokens = tokenize(document.description ?? "");
    const tagTokens = tokenize((document.tags ?? []).join(" "));
    const keywordTokens = tokenize((document.keywords ?? []).join(" "));

    const allTokens = new Set([
        ...titleTokens,
        ...descriptionTokens,
        ...tagTokens,
        ...keywordTokens,
    ]);

    const matchedTerms = queryTokens.filter((token) => allTokens.has(token));

    let score = matchedTerms.length * 10;

    for (const token of queryTokens) {
        if (titleTokens.includes(token)) score += 20;
        if (keywordTokens.includes(token)) score += 12;
        if (tagTokens.includes(token)) score += 8;
        if (descriptionTokens.includes(token)) score += 5;
    }

    if (queryIntent !== "general" && document.type === queryIntent) {
        score += 25;
    }

    const relevance =
        score >= 60
            ? "high"
            : score >= 25
              ? "medium"
              : "low";

    return {
        ...document,
        score,
        matchedTerms,
        relevance,
    };
}

export function searchIntelligence(
    input: SearchQuery,
): SearchResponse {
    const query = input.query.trim();
    const locale: SearchLanguage = input.locale;
    const limit = Math.max(1, Math.min(input.limit ?? 10, 25));

    const queryTokens = tokenize(query);

    const intent = input.intent ?? detectIntent(query);

    const results = DOCUMENTS
        .map((document) => scoreDocument(queryTokens, intent, document))
        .filter((result) => result.score > 0)
        .sort(
            (a, b) =>
                b.score - a.score ||
                a.title.localeCompare(b.title),
        )
        .slice(0, limit);

    return {
        query,
        locale,
        intent,
        results,
        total: results.length,
    };
}

export function getSearchDocuments(): SearchDocument[] {
    return [...DOCUMENTS];
}
