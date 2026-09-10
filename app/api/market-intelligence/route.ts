import { NextResponse } from "next/server";

import {
    getMarketSegments,
    queryMarketIntelligence,
    type MarketLocale,
    type MarketSegment,
} from "@/lib/market-intelligence-platform";

const LOCALES: MarketLocale[] = [
    "fa",
    "en",
    "ar",
    "tr",
];

function isLocale(
    value: unknown,
): value is MarketLocale {
    return (
        typeof value === "string" &&
        LOCALES.includes(
            value as MarketLocale,
        )
    );
}

function isSegment(
    value: unknown,
): value is MarketSegment {
    return (
        typeof value === "string" &&
        getMarketSegments().includes(
            value as MarketSegment,
        )
    );
}

function normalizeLimit(
    value: string | null,
): number {
    const numeric =
        Number(value ?? "8");

    if (
        !Number.isFinite(numeric)
    ) {
        return 8;
    }

    return Math.min(
        Math.max(
            Math.trunc(
                numeric,
            ),
            1,
        ),
        20,
    );
}

export async function GET(
    request: Request,
) {
    const { searchParams } =
        new URL(request.url);

    const localeParam =
        searchParams.get(
            "locale",
        ) ?? "en";

    const segmentParam =
        searchParams.get(
            "segment",
        );

    const investmentParam =
        searchParams.get(
            "minInvestmentScore",
        );

    const locale =
        isLocale(localeParam)
            ? localeParam
            : "en";

    const segment =
        isSegment(segmentParam)
            ? segmentParam
            : undefined;

    const investmentValue =
        investmentParam === null
            ? undefined
            : Number(
                  investmentParam,
              );

    const minInvestmentScore =
        typeof investmentValue ===
            "number" &&
        Number.isFinite(
            investmentValue,
        )
            ? Math.min(
                  Math.max(
                      Math.trunc(
                          investmentValue,
                      ),
                      0,
                  ),
                  100,
              )
            : undefined;

    const result =
        queryMarketIntelligence({
            locale,
            segment,
            minInvestmentScore,
            limit: normalizeLimit(
                searchParams.get(
                    "limit",
                ),
            ),
        });

    return NextResponse.json(
        result,
        {
            status: 200,
            headers: {
                "Cache-Control":
                    "public, max-age=60, stale-while-revalidate=300",
            },
        },
    );
}
