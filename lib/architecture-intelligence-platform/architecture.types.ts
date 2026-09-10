export type ArchitectureLocale =
    | "fa"
    | "en"
    | "ar"
    | "tr";

export type ArchitectureDomain =
    | "design"
    | "building"
    | "performance"
    | "sustainability"
    | "urban"
    | "bim"
    | "site"
    | "project"
    | "architect";

export type IntelligenceLevel =
    | "basic"
    | "advanced"
    | "expert";

export type PerformanceDirection =
    | "up"
    | "down"
    | "stable";

export type ArchitectureRisk =
    | "low"
    | "moderate"
    | "high";

export interface ArchitectureMetric {
    id: string;
    label: string;
    value: number;
    unit: string;
    direction: PerformanceDirection;
    confidence: "low" | "medium" | "high";
}

export interface ArchitectureInsight {
    id: string;
    title: string;
    summary: string;
    domain: ArchitectureDomain;
    score: number;
    risk: ArchitectureRisk;
    metrics: ArchitectureMetric[];
    actions: string[];
}

export interface ArchitectureQuery {
    locale: ArchitectureLocale;
    domain?: ArchitectureDomain;
    level?: IntelligenceLevel;
    limit?: number;
}

export interface ArchitectureIntelligenceResponse {
    locale: ArchitectureLocale;
    generatedAt: string;
    dataStatus: "foundation";
    insights: ArchitectureInsight[];
    total: number;
}
