import {
    getSearchDocuments,
    type SearchDocument,
    type SearchLanguage,
} from "@/lib/search-intelligence";

import type {
    RecommendationContext,
    RecommendationItem,
    RecommendationProfile,
    RecommendationRequest,
    RecommendationResponse,
    RecommendationReason,
    RecommendationStrategy,
} from "./recommendation.types";

const CONTEXT_TYPES: Record<
    RecommendationContext,
    string[]
> = {
    discovery: [
        "property",
        "market",
        "architecture",
        "city",
        "article",
        "report",
        "news",
        "data",
    ],
    property: ["property", "market"],
    market: ["market", "data", "report"],
    architecture: ["architecture", "article", "report"],
    city: ["city", "architecture", "data"],
    research: ["report", "article", "data"],
    news: ["news", "market", "property", "architecture"],
    data: ["data", "market", "city", "report"],
    general: [
        "property",
        "market",
        "architecture",
        "city",
        "article",
        "report",
        "news",
        "data",
    ],
};

const CONTEXT_KEYWORDS: Record<
    RecommendationContext,
    string[]
> = {
    discovery: [],
    property: [
        "property",
        "real estate",
        "home",
        "house",
        "apartment",
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
        "سرمایه گذاری",
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
        "شهرسازی",
    ],
    research: [
        "research",
        "study",
        "knowledge",
        "پژوهش",
        "تحقیق",
        "دانش",
        "مطالعه",
    ],
    news: [
        "news",
        "خبر",
        "اخبار",
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

const STRATEGIES: RecommendationStrategy[] = [
    "intent",
    "interest",
    "cross-domain",
    "balanced",
];

const CONTEXTS: RecommendationContext[] = [
    "discovery",
    "property",
    "market",
    "architecture",
    "city",
    "research",
    "news",
    "data",
    "general",
];

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
        .map((token) => token.trim())
        .filter((token) => token.length > 1);
}

function detectContext(
    profile?: RecommendationProfile,
    explicitContext?: RecommendationContext,
): RecommendationContext {
    if (explicitContext) {
        return explicitContext;
    }

    if (profile?.context) {
        return profile.context;
    }

    const query = profile?.recentQuery?.trim();

    if (!query) {
        return "discovery";
    }

    const normalizedQuery = normalize(query);

    const ranked = CONTEXTS
        .filter((context) => context !== "general")
        .map((context) => {
            const score = CONTEXT_KEYWORDS[context].reduce(
                (total, keyword) =>
                    total +
                    (
                        normalizedQuery.includes(
                            normalize(keyword),
                        )
                            ? 1
                            : 0
                    ),
                0,
            );

            return {
                context,
                score,
            };
        })
        .sort(
            (a, b) =>
                b.score - a.score ||
                a.context.localeCompare(b.context),
        );

    return ranked[0]?.score > 0
        ? ranked[0].context
        : "discovery";
}

function getProfileTerms(
    profile?: RecommendationProfile,
): string[] {
    if (!profile) {
        return [];
    }

    return [
        ...(profile.interests ?? []),
        ...(profile.recentQuery
            ? [profile.recentQuery]
            : []),
    ].flatMap(tokenize);
}

function buildDocumentText(
    document: SearchDocument,
): string {
    return normalize(
        [
            document.title,
            document.description ?? "",
            ...(document.tags ?? []),
            ...(document.keywords ?? []),
        ].join(" "),
    );
}

function makeReasons(
    document: SearchDocument,
    context: RecommendationContext,
    profileTerms: string[],
    preferredTypes: string[],
    strategy: RecommendationStrategy,
): RecommendationReason[] {
    const reasons: RecommendationReason[] = [];

    const contextTypes = CONTEXT_TYPES[context];

    if (contextTypes.includes(document.type)) {
        reasons.push({
            code: "type-match",
            label: "Matches the selected domain",
        });
    }

    if (
        preferredTypes.length > 0 &&
        preferredTypes.includes(document.type)
    ) {
        reasons.push({
            code: "context-match",
            label: "Matches preferred content type",
        });
    }

    const text = buildDocumentText(document);

    const keywordMatched =
        profileTerms.length > 0 &&
        profileTerms.some((term) =>
            text.includes(normalize(term)),
        );

    if (keywordMatched) {
        reasons.push({
            code: "keyword-match",
            label: "Matches your interests or recent search",
        });
    }

    const titleMatched =
        profileTerms.length > 0 &&
        profileTerms.some((term) =>
            normalize(document.title).includes(
                normalize(term),
            ),
        );

    if (titleMatched) {
        reasons.push({
            code: "query-match",
            label: "Strong title relevance",
        });
    }

    if (
        strategy === "cross-domain" &&
        !contextTypes.includes(document.type)
    ) {
        reasons.push({
            code: "cross-domain",
            label: "Provides a complementary domain",
        });
    }

    if (reasons.length === 0) {
        reasons.push({
            code: "baseline",
            label: "Relevant to the MELKISM knowledge ecosystem",
        });
    }

    return reasons;
}

function calculateScore(
    document: SearchDocument,
    context: RecommendationContext,
    profileTerms: string[],
    preferredTypes: string[],
    strategy: RecommendationStrategy,
): number {
    const contextTypes = CONTEXT_TYPES[context];

    let score = 10;

    if (contextTypes.includes(document.type)) {
        score += 35;
    }

    if (preferredTypes.includes(document.type)) {
        score += 30;
    }

    const text = buildDocumentText(document);
    const title = normalize(document.title);

    for (const term of profileTerms) {
        const normalizedTerm = normalize(term);

        if (!normalizedTerm) {
            continue;
        }

        if (text.includes(normalizedTerm)) {
            score += 15;
        }

        if (title.includes(normalizedTerm)) {
            score += 20;
        }
    }

    if (
        strategy === "cross-domain" &&
        !contextTypes.includes(document.type)
    ) {
        score += 12;
    }

    if (
        strategy === "balanced" &&
        contextTypes.includes(document.type)
    ) {
        score += 8;
    }

    if (
        strategy === "intent" &&
        profileTerms.length > 0
    ) {
        score += 5;
    }

    if (
        strategy === "interest" &&
        profileTerms.length > 0
    ) {
        score += 8;
    }

    return score;
}

function relevanceFromScore(
    score: number,
): RecommendationItem["relevance"] {
    if (score >= 75) {
        return "high";
    }

    if (score >= 40) {
        return "medium";
    }

    return "low";
}

export function recommend(
    request: RecommendationRequest,
): RecommendationResponse {
    const limit = Math.min(
        Math.max(
            Math.trunc(request.limit ?? 8),
            1,
        ),
        20,
    );

    const strategy =
        request.strategy ?? "balanced";

    const context = detectContext(
        request.profile,
        request.context,
    );

    const profileTerms = getProfileTerms(
        request.profile,
    );

    const preferredTypes =
        request.profile?.preferredTypes ?? [];

    const documents = getSearchDocuments();

    const items = documents
        .map((document) => {
            const score = calculateScore(
                document,
                context,
                profileTerms,
                preferredTypes,
                strategy,
            );

            const reasons = makeReasons(
                document,
                context,
                profileTerms,
                preferredTypes,
                strategy,
            );

            return {
                ...document,
                recommendationScore: score,
                relevance:
                    relevanceFromScore(score),
                reasons,
            };
        })
        .sort(
            (a, b) =>
                b.recommendationScore -
                    a.recommendationScore ||
                a.title.localeCompare(
                    b.title,
                ),
        )
        .slice(0, limit);

    return {
        locale: request.locale,
        context,
        strategy,
        items,
        total: items.length,
    };
}

export function recommendForQuery(
    query: string,
    locale: SearchLanguage,
    limit = 8,
): RecommendationResponse {
    return recommend({
        locale,
        limit,
        strategy: "intent",
        profile: {
            locale,
            recentQuery: query,
        },
    });
}

export function getRecommendationContexts(): RecommendationContext[] {
    return [...CONTEXTS];
}

export function getRecommendationStrategies(): RecommendationStrategy[] {
    return [...STRATEGIES];
}
