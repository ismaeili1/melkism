export type MarketLocale =
    | "fa"
    | "en"
    | "ar"
    | "tr";

export type MarketSegment =
    | "residential"
    | "commercial"
    | "industrial"
    | "land"
    | "office"
    | "retail"
    | "hospitality";

export type MarketDirection =
    | "up"
    | "down"
    | "stable";

export type MarketRisk =
    | "low"
    | "moderate"
    | "high";

export type MarketConfidence =
    | "low"
    | "medium"
    | "high";

export interface MarketMetric {
    id: string;
    name: string;
    value: number;
    unit: string;
    direction: MarketDirection;
    changePercent: number;
    confidence: MarketConfidence;
    sourceStatus: "foundation";
}

export interface MarketSnapshot {
    id: string;
    name: string;
    locale: MarketLocale;
    countryCode: string;
    currency: string;
    segment: MarketSegment;
    priceIndex: number;
    annualChangePercent: number;
    transactionActivity: number;
    demandIndex: number;
    supplyIndex: number;
    investmentScore: number;
    risk: MarketRisk;
    direction: MarketDirection;
    metrics: MarketMetric[];
    updatedAt: string;
}

export interface MarketQuery {
    locale: MarketLocale;
    segment?: MarketSegment;
    minInvestmentScore?: number;
    limit?: number;
}

export interface MarketIntelligenceResponse {
    locale: MarketLocale;
    generatedAt: string;
    dataStatus: "foundation";
    markets: MarketSnapshot[];
    total: number;
}

/**
 * Backward-compatible indicator model.
 *
 * MarketMetric is the canonical v5.3 metric representation.
 * MarketIndicator is retained for pre-existing market services
 * that depend on this name.
 */
export type MarketIndicator = MarketMetric;

/**
 * Backward-compatible market trend model.
 *
 * The model intentionally supports both point-based and
 * period-based trend consumers used by the existing platform.
 */
/**
 * Market trend information.
 *
 * The core fields support the existing trend service.
 * Additional analytical fields remain optional so existing
 * and future trend consumers can coexist without breaking
 * the platform contract.
 */
export interface MarketTrend {
    /**
     * Existing trend indicator identifier.
     */
    indicator: string;

    /**
     * Direction of the observed trend.
     */
    direction: MarketDirection;

    /**
     * Optional analytical identity.
     */
    id?: string;

    /**
     * Optional human-readable trend name.
     */
    name?: string;

    /**
     * Optional analysis period.
     */
    period?: string;

    /**
     * Optional current value.
     */
    value?: number;

    /**
     * Optional starting value.
     */
    startValue?: number;

    /**
     * Optional ending value.
     */
    endValue?: number;

    /**
     * Optional percentage change.
     */
    changePercent?: number;

    /**
     * Optional confidence level.
     */
    confidence?: MarketConfidence;

    /**
     * Optional measurement unit.
     */
    unit?: string;

    /**
     * Optional descriptive explanation.
     */
    description?: string;
}


