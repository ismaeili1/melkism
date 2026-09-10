import { NextResponse } from "next/server";

import {
    getRecommendationContexts,
    getRecommendationStrategies,
    recommend,
    type RecommendationContext,
    type RecommendationRequest,
    type RecommendationStrategy,
} from "@/lib/recommendation-platform";

import type { SearchLanguage } from "@/lib/search-intelligence";

const LOCALES: SearchLanguage[] = [
    "fa",
    "en",
    "ar",
    "tr",
];

function isLocale(
    value: unknown,
): value is SearchLanguage {
    return (
        typeof value === "string" &&
        LOCALES.includes(
            value as SearchLanguage,
        )
    );
}

function isContext(
    value: unknown,
): value is RecommendationContext {
    return (
        typeof value === "string" &&
        getRecommendationContexts().includes(
            value as RecommendationContext,
        )
    );
}

function isStrategy(
    value: unknown,
): value is RecommendationStrategy {
    return (
        typeof value === "string" &&
        getRecommendationStrategies().includes(
            value as RecommendationStrategy,
        )
    );
}

function normalizeLimit(
    value: unknown,
): number {
    if (
        typeof value !== "number" ||
        !Number.isFinite(value)
    ) {
        return 8;
    }

    return Math.min(
        Math.max(
            Math.trunc(value),
            1,
        ),
        20,
    );
}

function normalizeStringArray(
    value: unknown,
): string[] | undefined {
    if (!Array.isArray(value)) {
        return undefined;
    }

    const values = value.filter(
        (item): item is string =>
            typeof item === "string",
    );

    return values.length > 0
        ? values
        : undefined;
}

function normalizeProfile(
    value: unknown,
    locale: SearchLanguage,
) {
    if (
        typeof value !== "object" ||
        value === null ||
        Array.isArray(value)
    ) {
        return undefined;
    }

    const profile =
        value as Record<string, unknown>;

    return {
        locale,
        interests: normalizeStringArray(
            profile.interests,
        ),
        preferredTypes:
            normalizeStringArray(
                profile.preferredTypes,
            ),
        recentQuery:
            typeof profile.recentQuery === "string"
                ? profile.recentQuery
                : undefined,
        context: isContext(profile.context)
            ? profile.context
            : undefined,
    };
}

export async function GET(
    request: Request,
) {
    const { searchParams } =
        new URL(request.url);

    const localeParam =
        searchParams.get("locale") ?? "en";

    const contextParam =
        searchParams.get("context");

    const strategyParam =
        searchParams.get("strategy");

    const query =
        searchParams.get("q")?.trim() ?? "";

    const rawLimit =
        Number(
            searchParams.get("limit") ?? "8",
        );

    const locale =
        isLocale(localeParam)
            ? localeParam
            : "en";

    const context =
        isContext(contextParam)
            ? contextParam
            : undefined;

    const strategy =
        isStrategy(strategyParam)
            ? strategyParam
            : "balanced";

    const recommendationRequest:
        RecommendationRequest = {
        locale,
        context,
        strategy,
        limit: normalizeLimit(
            rawLimit,
        ),
        profile: query
            ? {
                  locale,
                  recentQuery: query,
              }
            : undefined,
    };

    const result =
        recommend(
            recommendationRequest,
        );

    return NextResponse.json(
        result,
        {
            status: 200,
            headers: {
                "Cache-Control":
                    "public, max-age=30, stale-while-revalidate=120",
            },
        },
    );
}

export async function POST(
    request: Request,
) {
    let body: unknown;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            {
                error:
                    "Invalid JSON request body.",
            },
            {
                status: 400,
            },
        );
    }

    if (
        typeof body !== "object" ||
        body === null ||
        Array.isArray(body)
    ) {
        return NextResponse.json(
            {
                error:
                    "Request body must be an object.",
            },
            {
                status: 400,
            },
        );
    }

    const data =
        body as Record<string, unknown>;

    const locale =
        isLocale(data.locale)
            ? data.locale
            : "en";

    const context =
        isContext(data.context)
            ? data.context
            : undefined;

    const strategy =
        isStrategy(data.strategy)
            ? data.strategy
            : "balanced";

    const recommendationRequest:
        RecommendationRequest = {
        locale,
        context,
        strategy,
        limit: normalizeLimit(
            data.limit,
        ),
        profile: normalizeProfile(
            data.profile,
            locale,
        ),
    };

    const result =
        recommend(
            recommendationRequest,
        );

    return NextResponse.json(
        result,
        {
            status: 200,
        },
    );
}
