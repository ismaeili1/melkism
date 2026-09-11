import type {
    ProfessionalAvailability,
    ProfessionalDomain,
    ProfessionalLocale,
    ProfessionalProfile,
    ProfessionalQuery,
    ProfessionalRole,
    ProfessionalVerification,
    ProfessionalResponse,
} from "./professional.types";

const PROFESSIONALS: ProfessionalProfile[] = [
    {
        id: "professional-architect-001",
        name: "MELKISM Architecture Specialist",
        role: "architect",
        locale: "en",
        verification: "verified",
        availability: "available",
        headline:
            "Architecture and built-environment specialist",
        biography:
            "Professional foundation profile for architecture, design, building performance and sustainable built-environment services.",
        location: "Global",
        domains: [
            "architecture",
            "design",
            "sustainability",
            "bim",
        ],
        expertise: [
            {
                id: "expertise-architecture",
                title: "Architectural Design",
                domain: "architecture",
                level: "expert",
            },
            {
                id: "expertise-sustainability",
                title: "Sustainable Design",
                domain: "sustainability",
                level: "advanced",
            },
            {
                id: "expertise-bim",
                title: "BIM Coordination",
                domain: "bim",
                level: "advanced",
            },
        ],
        services: [
            {
                id: "service-architecture",
                title: "Architecture Design",
                domain: "architecture",
                description:
                    "Architecture and design consulting.",
            },
            {
                id: "service-performance",
                title: "Building Performance",
                domain: "sustainability",
                description:
                    "Performance-oriented architecture assessment.",
            },
            {
                id: "service-bim",
                title: "BIM Advisory",
                domain: "bim",
                description:
                    "BIM and digital project coordination.",
            },
        ],
        projects: [
            {
                id: "project-architecture-intelligence",
                title:
                    "Architecture Intelligence Platform",
                domain: "architecture",
                role: "architect",
                year: 2026,
                location: "Global",
                description:
                    "Architecture intelligence platform development.",
            },
        ],
        intelligenceScore: 88,
    },

    {
        id: "professional-market-001",
        name: "MELKISM Market Intelligence Specialist",
        role: "analyst",
        locale: "en",
        verification: "verified",
        availability: "available",
        headline:
            "Real-estate market and investment intelligence analyst",
        biography:
            "Professional foundation profile for market research, real-estate analytics and investment intelligence.",
        location: "Global",
        domains: [
            "real-estate",
            "investment",
            "data",
            "research",
        ],
        expertise: [
            {
                id: "expertise-market",
                title: "Real Estate Market Analysis",
                domain: "real-estate",
                level: "expert",
            },
            {
                id: "expertise-investment",
                title: "Investment Intelligence",
                domain: "investment",
                level: "advanced",
            },
            {
                id: "expertise-market-data",
                title: "Market Data Analysis",
                domain: "data",
                level: "advanced",
            },
        ],
        services: [
            {
                id: "service-market",
                title: "Market Analysis",
                domain: "real-estate",
                description:
                    "Market structure and trend analysis.",
            },
            {
                id: "service-investment",
                title: "Investment Intelligence",
                domain: "investment",
                description:
                    "Investment-oriented market intelligence.",
            },
        ],
        projects: [
            {
                id: "project-market-intelligence",
                title:
                    "Market Intelligence Platform",
                domain: "real-estate",
                role: "analyst",
                year: 2026,
                location: "Global",
            },
        ],
        intelligenceScore: 86,
    },

    {
        id: "professional-urban-001",
        name: "MELKISM Urban Intelligence Specialist",
        role: "urbanist",
        locale: "en",
        verification: "trusted",
        availability: "limited",
        headline:
            "Urban systems and city intelligence specialist",
        biography:
            "Professional foundation profile for urban analysis, city systems and spatial intelligence.",
        location: "Global",
        domains: [
            "urban",
            "architecture",
            "data",
            "research",
        ],
        expertise: [
            {
                id: "expertise-urban",
                title: "Urban Analysis",
                domain: "urban",
                level: "expert",
            },
            {
                id: "expertise-urban-data",
                title: "Urban Data",
                domain: "data",
                level: "advanced",
            },
        ],
        services: [
            {
                id: "service-urban",
                title: "Urban Analysis",
                domain: "urban",
                description:
                    "Urban context and spatial systems analysis.",
            },
            {
                id: "service-city",
                title: "City Intelligence",
                domain: "data",
                description:
                    "City-level intelligence and indicators.",
            },
        ],
        projects: [
            {
                id: "project-city-intelligence",
                title:
                    "City Intelligence Framework",
                domain: "urban",
                role: "urbanist",
                year: 2026,
                location: "Global",
            },
        ],
        intelligenceScore: 84,
    },

    {
        id: "professional-research-001",
        name: "MELKISM Built Environment Researcher",
        role: "researcher",
        locale: "en",
        verification: "verified",
        availability: "available",
        headline:
            "Built-environment research and knowledge specialist",
        biography:
            "Professional foundation profile for evidence-based research and knowledge development.",
        location: "Global",
        domains: [
            "research",
            "architecture",
            "sustainability",
            "data",
        ],
        expertise: [
            {
                id: "expertise-research",
                title: "Built Environment Research",
                domain: "research",
                level: "expert",
            },
            {
                id: "expertise-sustainability-research",
                title: "Sustainability Research",
                domain: "sustainability",
                level: "advanced",
            },
        ],
        services: [
            {
                id: "service-research",
                title: "Research Consulting",
                domain: "research",
                description:
                    "Research design and evidence analysis.",
            },
            {
                id: "service-knowledge",
                title: "Knowledge Development",
                domain: "research",
                description:
                    "Built-environment knowledge development.",
            },
        ],
        projects: [
            {
                id: "project-research-intelligence",
                title:
                    "Built Environment Research Intelligence",
                domain: "research",
                role: "researcher",
                year: 2026,
                location: "Global",
            },
        ],
        intelligenceScore: 82,
    },
];

const ROLES: ProfessionalRole[] = [
    "architect",
    "consultant",
    "designer",
    "urbanist",
    "engineer",
    "researcher",
    "analyst",
    "real-estate-specialist",
    "developer",
    "planner",
];

const DOMAINS: ProfessionalDomain[] = [
    "architecture",
    "urban",
    "real-estate",
    "construction",
    "sustainability",
    "research",
    "design",
    "investment",
    "data",
    "bim",
];

const VERIFICATIONS: ProfessionalVerification[] = [
    "unverified",
    "pending",
    "verified",
    "trusted",
];

const AVAILABILITIES: ProfessionalAvailability[] = [
    "available",
    "limited",
    "unavailable",
];

const ROLE_LABELS: Record<
    ProfessionalRole,
    Record<ProfessionalLocale, string>
> = {
    architect: {
        fa: "معمار",
        en: "Architect",
        ar: "معماري",
        tr: "Mimar",
    },
    consultant: {
        fa: "مشاور",
        en: "Consultant",
        ar: "مستشار",
        tr: "Danışman",
    },
    designer: {
        fa: "طراح",
        en: "Designer",
        ar: "مصمم",
        tr: "Tasarımcı",
    },
    urbanist: {
        fa: "متخصص شهر",
        en: "Urbanist",
        ar: "مخطط حضري",
        tr: "Şehir Plancısı",
    },
    engineer: {
        fa: "مهندس",
        en: "Engineer",
        ar: "مهندس",
        tr: "Mühendis",
    },
    researcher: {
        fa: "پژوهشگر",
        en: "Researcher",
        ar: "باحث",
        tr: "Araştırmacı",
    },
    analyst: {
        fa: "تحلیلگر",
        en: "Analyst",
        ar: "محلل",
        tr: "Analist",
    },
    "real-estate-specialist": {
        fa: "متخصص املاک",
        en: "Real Estate Specialist",
        ar: "متخصص عقارات",
        tr: "Gayrimenkul Uzmanı",
    },
    developer: {
        fa: "توسعه‌دهنده",
        en: "Developer",
        ar: "مطور",
        tr: "Geliştirici",
    },
    planner: {
        fa: "برنامه‌ریز",
        en: "Planner",
        ar: "مخطط",
        tr: "Planlamacı",
    },
};

function cloneProfessional(
    professional: ProfessionalProfile,
): ProfessionalProfile {
    return {
        ...professional,
        domains: [
            ...professional.domains,
        ],
        expertise: professional.expertise.map(
            (item) => ({
                ...item,
            }),
        ),
        services: professional.services.map(
            (item) => ({
                ...item,
            }),
        ),
        projects: professional.projects.map(
            (item) => ({
                ...item,
            }),
        ),
    };
}

export function getProfessionalRoles(): ProfessionalRole[] {
    return [...ROLES];
}

export function getProfessionalDomains(): ProfessionalDomain[] {
    return [...DOMAINS];
}

export function getProfessionalVerifications(): ProfessionalVerification[] {
    return [...VERIFICATIONS];
}

export function getProfessionalAvailabilities(): ProfessionalAvailability[] {
    return [...AVAILABILITIES];
}

export function getProfessionals(): ProfessionalProfile[] {
    return PROFESSIONALS.map(
        cloneProfessional,
    );
}

export function queryProfessionals(
    query: ProfessionalQuery,
): ProfessionalResponse {
    const limit = Math.min(
        Math.max(
            Math.trunc(
                query.limit ?? 12,
            ),
            1,
        ),
        20,
    );

    let results =
        getProfessionals();

    if (query.role) {
        results =
            results.filter(
                (professional) =>
                    professional.role ===
                    query.role,
            );
    }

    if (query.domain) {
        results =
            results.filter(
                (professional) =>
                    professional.domains.includes(
                        query.domain!,
                    ),
            );
    }

    if (query.availability) {
        results =
            results.filter(
                (professional) =>
                    professional.availability ===
                    query.availability,
            );
    }

    if (query.verification) {
        results =
            results.filter(
                (professional) =>
                    professional.verification ===
                    query.verification,
            );
    }

    results = results
        .sort(
            (a, b) =>
                b.intelligenceScore -
                    a.intelligenceScore ||
                a.name.localeCompare(
                    b.name,
                ),
        )
        .slice(0, limit);

    return {
        locale: query.locale,
        generatedAt:
            new Date().toISOString(),
        dataStatus: "foundation",
        professionals: results,
        total: results.length,
    };
}

export function getProfessionalSummary(
    locale: ProfessionalLocale,
) {
    const professionals =
        queryProfessionals({
            locale,
            limit: 20,
        }).professionals;

    const averageScore =
        professionals.length > 0
            ? professionals.reduce(
                  (
                      total,
                      professional,
                  ) =>
                      total +
                      professional.intelligenceScore,
                  0,
              ) /
              professionals.length
            : 0;

    const verifiedCount =
        professionals.filter(
            (professional) =>
                professional.verification ===
                    "verified" ||
                professional.verification ===
                    "trusted",
        ).length;

    const availableCount =
        professionals.filter(
            (professional) =>
                professional.availability ===
                "available",
        ).length;

    return {
        locale,
        professionalCount:
            professionals.length,
        averageIntelligenceScore:
            Number(
                averageScore.toFixed(
                    1,
                ),
            ),
        verifiedCount,
        availableCount,
        topProfessional:
            professionals[0] ??
            null,
    };
}

export function getProfessionalRoleLabel(
    role: ProfessionalRole,
    locale: ProfessionalLocale,
): string {
    return ROLE_LABELS[role][locale];
}
