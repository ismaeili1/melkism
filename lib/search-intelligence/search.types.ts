export type SearchIntent =
    | "property"
    | "market"
    | "architecture"
    | "city"
    | "news"
    | "report"
    | "data"
    | "general";

export type SearchLanguage = "fa" | "en" | "ar" | "tr";

export type SearchDocumentType =
    | "property"
    | "article"
    | "report"
    | "news"
    | "market"
    | "city"
    | "architecture"
    | "data";

export interface SearchDocument {
    id: string;
    title: string;
    description?: string;
    type: SearchDocumentType;
    locale?: SearchLanguage;
    tags?: string[];
    keywords?: string[];
    url?: string;
}

export interface SearchQuery {
    query: string;
    locale: SearchLanguage;
    limit?: number;
    intent?: SearchIntent;
}

export interface SearchResult extends SearchDocument {
    score: number;
    matchedTerms: string[];
    relevance: "high" | "medium" | "low";
}

export interface SearchResponse {
    query: string;
    locale: SearchLanguage;
    intent: SearchIntent;
    results: SearchResult[];
    total: number;
}
