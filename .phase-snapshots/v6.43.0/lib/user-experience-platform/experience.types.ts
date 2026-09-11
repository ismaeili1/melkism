export type ExperienceLocale =
    | "fa"
    | "en"
    | "ar"
    | "tr";

export type ExperienceDomain =
    | "discovery"
    | "search"
    | "recommendations"
    | "market"
    | "architecture"
    | "property"
    | "research"
    | "news"
    | "data";

export type ExperienceSurface =
    | "hero"
    | "search"
    | "recommendations"
    | "market"
    | "architecture"
    | "property"
    | "content"
    | "footer";

export interface ExperiencePreference {
    interests: string[];
    preferredDomains: ExperienceDomain[];
    preferredSurfaces: ExperienceSurface[];
}

export interface ExperienceFeature {
    id: string;
    title: string;
    description: string;
    domain: ExperienceDomain;
    href: string;
    priority: number;
}

export interface ExperienceHomeModel {
    locale: ExperienceLocale;
    tagline: string;
    features: ExperienceFeature[];
    preferences: ExperiencePreference;
}

export interface ExperienceResponse {
    locale: ExperienceLocale;
    generatedAt: string;
    dataStatus: "platform";
    home: ExperienceHomeModel;
}
