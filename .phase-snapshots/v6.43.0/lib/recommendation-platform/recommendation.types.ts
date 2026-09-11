import type {
    SearchDocument,
    SearchLanguage,
} from "@/lib/search-intelligence";

export type RecommendationContext =
    | "discovery"
    | "property"
    | "market"
    | "architecture"
    | "city"
    | "research"
    | "news"
    | "data"
    | "general";

export type RecommendationStrategy =
    | "intent"
    | "interest"
    | "cross-domain"
    | "balanced";

export type RecommendationRelevance =
    | "high"
    | "medium"
    | "low";

export interface RecommendationProfile {
    locale: SearchLanguage;
    interests?: string[];
    preferredTypes?: string[];
    recentQuery?: string;
    context?: RecommendationContext;
}

export interface RecommendationRequest {
    locale: SearchLanguage;
    profile?: RecommendationProfile;
    context?: RecommendationContext;
    limit?: number;
    strategy?: RecommendationStrategy;
}

export interface RecommendationReason {
    code:
        | "type-match"
        | "keyword-match"
        | "query-match"
        | "context-match"
        | "cross-domain"
        | "baseline";
    label: string;
}

export interface RecommendationItem extends SearchDocument {
    recommendationScore: number;
    relevance: RecommendationRelevance;
    reasons: RecommendationReason[];
}

export interface RecommendationResponse {
    locale: SearchLanguage;
    context: RecommendationContext;
    strategy: RecommendationStrategy;
    items: RecommendationItem[];
    total: number;
}
