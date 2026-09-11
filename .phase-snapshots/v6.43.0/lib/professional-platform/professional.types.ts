export type ProfessionalLocale =
    | "fa"
    | "en"
    | "ar"
    | "tr";

export type ProfessionalRole =
    | "architect"
    | "consultant"
    | "designer"
    | "urbanist"
    | "engineer"
    | "researcher"
    | "analyst"
    | "real-estate-specialist"
    | "developer"
    | "planner";

export type ProfessionalVerification =
    | "unverified"
    | "pending"
    | "verified"
    | "trusted";

export type ProfessionalAvailability =
    | "available"
    | "limited"
    | "unavailable";

export type ProfessionalDomain =
    | "architecture"
    | "urban"
    | "real-estate"
    | "construction"
    | "sustainability"
    | "research"
    | "design"
    | "investment"
    | "data"
    | "bim";

export interface ProfessionalService {
    id: string;
    title: string;
    domain: ProfessionalDomain;
    description: string;
}

export interface ProfessionalProject {
    id: string;
    title: string;
    domain: ProfessionalDomain;
    role: ProfessionalRole;
    year?: number;
    location?: string;
    description?: string;
}

export interface ProfessionalExpertise {
    id: string;
    title: string;
    domain: ProfessionalDomain;
    level: "basic" | "advanced" | "expert";
}

export interface ProfessionalProfile {
    id: string;
    name: string;
    role: ProfessionalRole;
    locale: ProfessionalLocale;
    verification: ProfessionalVerification;
    availability: ProfessionalAvailability;
    headline: string;
    biography: string;
    location?: string;
    domains: ProfessionalDomain[];
    expertise: ProfessionalExpertise[];
    services: ProfessionalService[];
    projects: ProfessionalProject[];
    intelligenceScore: number;
}

export interface ProfessionalQuery {
    locale: ProfessionalLocale;
    role?: ProfessionalRole;
    domain?: ProfessionalDomain;
    availability?: ProfessionalAvailability;
    verification?: ProfessionalVerification;
    limit?: number;
}

export interface ProfessionalResponse {
    locale: ProfessionalLocale;
    generatedAt: string;
    dataStatus: "foundation";
    professionals: ProfessionalProfile[];
    total: number;
}
