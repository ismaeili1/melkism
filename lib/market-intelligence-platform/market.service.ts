import type {
    MarketConfidence,
    MarketDirection,
    MarketIntelligenceResponse,
    MarketLocale,
    MarketQuery,
    MarketRisk,
    MarketSegment,
    MarketSnapshot,
} from "./market.types";

const MARKETS: MarketSnapshot[] = [
    {
        id: "global-residential",
        name: "Global Residential Market",
        locale: "en",
        countryCode: "GLOBAL",
        currency: "USD",
        segment: "residential",
        priceIndex: 100,
        annualChangePercent: 2.8,
        transactionActivity: 64,
        demandIndex: 68,
        supplyIndex: 57,
        investmentScore: 73,
        risk: "moderate",
        direction: "up",
        metrics: [
            {
                id: "global-residential-price",
                name: "Residential Price Index",
                value: 100,
                unit: "index",
                direction: "up",
                changePercent: 2.8,
                confidence: "medium",
                sourceStatus: "foundation",
            },
            {
                id: "global-residential-demand",
                name: "Demand Index",
                value: 68,
                unit: "index",
                direction: "up",
                changePercent: 3.4,
                confidence: "medium",
                sourceStatus: "foundation",
            },
            {
                id: "global-residential-supply",
                name: "Supply Index",
                value: 57,
                unit: "index",
                direction: "stable",
                changePercent: 0.6,
                confidence: "medium",
                sourceStatus: "foundation",
            },
        ],
        updatedAt: "foundation",
    },
    {
        id: "urban-investment",
        name: "Urban Investment Market",
        locale: "en",
        countryCode: "GLOBAL",
        currency: "USD",
        segment: "commercial",
        priceIndex: 104,
        annualChangePercent: 3.6,
        transactionActivity: 61,
        demandIndex: 65,
        supplyIndex: 60,
        investmentScore: 78,
        risk: "moderate",
        direction: "up",
        metrics: [
            {
                id: "urban-investment-price",
                name: "Commercial Price Index",
                value: 104,
                unit: "index",
                direction: "up",
                changePercent: 3.6,
                confidence: "medium",
                sourceStatus: "foundation",
            },
            {
                id: "urban-investment-demand",
                name: "Investment Demand",
                value: 65,
                unit: "index",
                direction: "up",
                changePercent: 2.2,
                confidence: "medium",
                sourceStatus: "foundation",
            },
            {
                id: "urban-investment-activity",
                name: "Transaction Activity",
                value: 61,
                unit: "index",
                direction: "stable",
                changePercent: -0.4,
                confidence: "medium",
                sourceStatus: "foundation",
            },
        ],
        updatedAt: "foundation",
    },
    {
        id: "sustainable-development",
        name: "Sustainable Development Market",
        locale: "en",
        countryCode: "GLOBAL",
        currency: "USD",
        segment: "land",
        priceIndex: 98,
        annualChangePercent: 4.2,
        transactionActivity: 58,
        demandIndex: 72,
        supplyIndex: 49,
        investmentScore: 81,
        risk: "moderate",
        direction: "up",
        metrics: [
            {
                id: "sustainable-development-price",
                name: "Development Price Index",
                value: 98,
                unit: "index",
                direction: "up",
                changePercent: 4.2,
                confidence: "medium",
                sourceStatus: "foundation",
            },
            {
                id: "sustainable-development-demand",
                name: "Sustainable Demand Index",
                value: 72,
                unit: "index",
                direction: "up",
                changePercent: 5.1,
                confidence: "medium",
                sourceStatus: "foundation",
            },
            {
                id: "sustainable-development-supply",
                name: "Sustainable Supply Index",
                value: 49,
                unit: "index",
                direction: "up",
                changePercent: 2.7,
                confidence: "low",
                sourceStatus: "foundation",
            },
        ],
        updatedAt: "foundation",
    },
    {
        id: "tehran-residential",
        name: "Tehran Residential Market",
        locale: "fa",
        countryCode: "IR",
        currency: "IRR",
        segment: "residential",
        priceIndex: 100,
        annualChangePercent: 0,
        transactionActivity: 52,
        demandIndex: 61,
        supplyIndex: 54,
        investmentScore: 67,
        risk: "high",
        direction: "stable",
        metrics: [
            {
                id: "tehran-price",
                name: "شاخص قیمت مسکن",
                value: 100,
                unit: "index",
                direction: "stable",
                changePercent: 0,
                confidence: "low",
                sourceStatus: "foundation",
            },
            {
                id: "tehran-demand",
                name: "شاخص تقاضا",
                value: 61,
                unit: "index",
                direction: "stable",
                changePercent: 1.1,
                confidence: "low",
                sourceStatus: "foundation",
            },
            {
                id: "tehran-transaction",
                name: "فعالیت معاملات",
                value: 52,
                unit: "index",
                direction: "down",
                changePercent: -2.3,
                confidence: "low",
                sourceStatus: "foundation",
            },
        ],
        updatedAt: "foundation",
    },
];

function localizedName(
    market: MarketSnapshot,
    locale: MarketLocale,
): string {
    if (locale === market.locale) {
        return market.name;
    }

    const translations: Record<
        string,
        Partial<Record<MarketLocale, string>>
    > = {
        "Global Residential Market": {
            fa: "بازار مسکن جهانی",
            ar: "سوق الإسكان العالمي",
            tr: "Küresel Konut Pazarı",
        },
        "Urban Investment Market": {
            fa: "بازار سرمایه‌گذاری شهری",
            ar: "سوق الاستثمار الحضري",
            tr: "Kentsel Yatırım Pazarı",
        },
        "Sustainable Development Market": {
            fa: "بازار توسعه پایدار",
            ar: "سوق التنمية المستدامة",
            tr: "Sürdürülebilir Kalkınma Pazarı",
        },
        "Tehran Residential Market": {
            en: "Tehran Residential Market",
            ar: "سوق الإسكان في طهران",
            tr: "Tahran Konut Pazarı",
        },
    };

    return (
        translations[market.name]?.[locale] ??
        market.name
    );
}

function localizedMarket(
    market: MarketSnapshot,
    locale: MarketLocale,
): MarketSnapshot {
    return {
        ...market,
        locale,
        name: localizedName(market, locale),
    };
}

export function getMarkets(): MarketSnapshot[] {
    return MARKETS.map((market) => ({
        ...market,
        metrics: market.metrics.map((metric) => ({
            ...metric,
        })),
    }));
}

export function getMarketSegments(): MarketSegment[] {
    return [
        "residential",
        "commercial",
        "industrial",
        "land",
        "office",
        "retail",
        "hospitality",
    ];
}

export function getMarketRiskLevels(): MarketRisk[] {
    return [
        "low",
        "moderate",
        "high",
    ];
}

export function getMarketDirections(): MarketDirection[] {
    return [
        "up",
        "down",
        "stable",
    ];
}

export function getMarketConfidences(): MarketConfidence[] {
    return [
        "low",
        "medium",
        "high",
    ];
}

export function queryMarketIntelligence(
    query: MarketQuery,
): MarketIntelligenceResponse {
    const locale =
        query.locale;

    const limit = Math.min(
        Math.max(
            Math.trunc(
                query.limit ?? 8,
            ),
            1,
        ),
        20,
    );

    let results = MARKETS;

    if (query.segment) {
        results =
            results.filter(
                (market) =>
                    market.segment ===
                    query.segment,
            );
    }

    if (
        typeof query.minInvestmentScore ===
        "number"
    ) {
        results =
            results.filter(
                (market) =>
                    market.investmentScore >=
                    query.minInvestmentScore!,
            );
    }

    results = results
        .slice()
        .sort(
            (a, b) =>
                b.investmentScore -
                a.investmentScore ||
                b.demandIndex -
                a.demandIndex,
        )
        .slice(0, limit);

    return {
        locale,
        generatedAt:
            new Date().toISOString(),
        dataStatus: "foundation",
        markets:
            results.map(
                (market) =>
                    localizedMarket(
                        market,
                        locale,
                    ),
            ),
        total: results.length,
    };
}

export function getMarketSummary(
    locale: MarketLocale,
) {
    const response =
        queryMarketIntelligence({
            locale,
            limit: 8,
        });

    const markets =
        response.markets;

    const averagePriceIndex =
        markets.length > 0
            ? markets.reduce(
                  (
                      total,
                      market,
                  ) =>
                      total +
                      market.priceIndex,
                  0,
              ) / markets.length
            : 0;

    const averageDemand =
        markets.length > 0
            ? markets.reduce(
                  (
                      total,
                      market,
                  ) =>
                      total +
                      market.demandIndex,
                  0,
              ) / markets.length
            : 0;

    const averageSupply =
        markets.length > 0
            ? markets.reduce(
                  (
                      total,
                      market,
                  ) =>
                      total +
                      market.supplyIndex,
                  0,
              ) / markets.length
            : 0;

    const averageInvestment =
        markets.length > 0
            ? markets.reduce(
                  (
                      total,
                      market,
                  ) =>
                      total +
                      market.investmentScore,
                  0,
              ) / markets.length
            : 0;

    return {
        locale,
        marketCount:
            markets.length,
        averagePriceIndex:
            Number(
                averagePriceIndex.toFixed(
                    1,
                ),
            ),
        averageDemand:
            Number(
                averageDemand.toFixed(
                    1,
                ),
            ),
        averageSupply:
            Number(
                averageSupply.toFixed(
                    1,
                ),
            ),
        averageInvestment:
            Number(
                averageInvestment.toFixed(
                    1,
                ),
            ),
        topMarket:
            markets[0] ?? null,
    };
}
