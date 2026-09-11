import type {
    ArchitectureDomain,
    ArchitectureInsight,
    ArchitectureIntelligenceResponse,
    ArchitectureLocale,
    ArchitectureQuery,
    ArchitectureRisk,
    IntelligenceLevel,
} from "./architecture.types";

const INSIGHTS: ArchitectureInsight[] = [
    {
        id: "design-quality",
        title: "Design Quality Intelligence",
        summary:
            "Structured assessment of design quality, composition, spatial logic and architectural coherence.",
        domain: "design",
        score: 84,
        risk: "low",
        metrics: [
            {
                id: "design-score",
                label: "Design Quality",
                value: 84,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
            {
                id: "spatial-coherence",
                label: "Spatial Coherence",
                value: 79,
                unit: "score",
                direction: "stable",
                confidence: "medium",
            },
            {
                id: "contextual-fit",
                label: "Contextual Fit",
                value: 76,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
        ],
        actions: [
            "Review spatial hierarchy",
            "Strengthen contextual response",
            "Evaluate material and form coherence",
        ],
    },
    {
        id: "building-performance",
        title: "Building Performance Intelligence",
        summary:
            "Integrated view of building performance indicators including operational efficiency and environmental response.",
        domain: "performance",
        score: 78,
        risk: "moderate",
        metrics: [
            {
                id: "performance-score",
                label: "Performance Score",
                value: 78,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
            {
                id: "energy-efficiency",
                label: "Energy Efficiency",
                value: 71,
                unit: "score",
                direction: "stable",
                confidence: "medium",
            },
            {
                id: "environmental-response",
                label: "Environmental Response",
                value: 75,
                unit: "score",
                direction: "up",
                confidence: "low",
            },
        ],
        actions: [
            "Evaluate envelope performance",
            "Review passive design strategies",
            "Compare operational efficiency scenarios",
        ],
    },
    {
        id: "sustainability-intelligence",
        title: "Sustainability Intelligence",
        summary:
            "Assessment framework for environmental performance, resource efficiency and long-term sustainability.",
        domain: "sustainability",
        score: 82,
        risk: "low",
        metrics: [
            {
                id: "sustainability-score",
                label: "Sustainability Score",
                value: 82,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
            {
                id: "resource-efficiency",
                label: "Resource Efficiency",
                value: 74,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
            {
                id: "climate-response",
                label: "Climate Response",
                value: 80,
                unit: "score",
                direction: "stable",
                confidence: "medium",
            },
        ],
        actions: [
            "Improve passive environmental strategies",
            "Evaluate material lifecycle",
            "Strengthen climate resilience",
        ],
    },
    {
        id: "urban-intelligence",
        title: "Urban Architecture Intelligence",
        summary:
            "Analysis framework connecting architecture with urban context, public realm and spatial systems.",
        domain: "urban",
        score: 73,
        risk: "moderate",
        metrics: [
            {
                id: "urban-fit",
                label: "Urban Integration",
                value: 73,
                unit: "score",
                direction: "stable",
                confidence: "medium",
            },
            {
                id: "public-realm",
                label: "Public Realm Quality",
                value: 69,
                unit: "score",
                direction: "up",
                confidence: "low",
            },
            {
                id: "connectivity",
                label: "Connectivity",
                value: 77,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
        ],
        actions: [
            "Review urban connections",
            "Evaluate public-realm interfaces",
            "Assess pedestrian accessibility",
        ],
    },
    {
        id: "bim-intelligence",
        title: "BIM Intelligence",
        summary:
            "Structured intelligence layer for BIM coordination, information quality and digital project workflows.",
        domain: "bim",
        score: 76,
        risk: "moderate",
        metrics: [
            {
                id: "bim-readiness",
                label: "BIM Readiness",
                value: 76,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
            {
                id: "information-quality",
                label: "Information Quality",
                value: 72,
                unit: "score",
                direction: "stable",
                confidence: "medium",
            },
            {
                id: "coordination",
                label: "Coordination",
                value: 80,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
        ],
        actions: [
            "Review information requirements",
            "Improve cross-discipline coordination",
            "Validate BIM data consistency",
        ],
    },
    {
        id: "site-intelligence",
        title: "Site Intelligence",
        summary:
            "Framework for evaluating site context, constraints, opportunities and environmental relationships.",
        domain: "site",
        score: 80,
        risk: "low",
        metrics: [
            {
                id: "site-response",
                label: "Site Response",
                value: 80,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
            {
                id: "context-analysis",
                label: "Context Analysis",
                value: 83,
                unit: "score",
                direction: "stable",
                confidence: "medium",
            },
            {
                id: "constraint-awareness",
                label: "Constraint Awareness",
                value: 77,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
        ],
        actions: [
            "Map site constraints",
            "Evaluate environmental opportunities",
            "Review surrounding context",
        ],
    },
    {
        id: "project-intelligence",
        title: "Architecture Project Intelligence",
        summary:
            "Project-level architecture intelligence covering quality, risk, performance and strategic alignment.",
        domain: "project",
        score: 81,
        risk: "moderate",
        metrics: [
            {
                id: "project-score",
                label: "Project Intelligence",
                value: 81,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
            {
                id: "project-risk",
                label: "Project Resilience",
                value: 74,
                unit: "score",
                direction: "stable",
                confidence: "medium",
            },
            {
                id: "strategic-alignment",
                label: "Strategic Alignment",
                value: 85,
                unit: "score",
                direction: "up",
                confidence: "high",
            },
        ],
        actions: [
            "Review project objectives",
            "Monitor architecture-performance alignment",
            "Evaluate risk and delivery dependencies",
        ],
    },
    {
        id: "architect-intelligence",
        title: "Architect Intelligence",
        summary:
            "Professional intelligence framework for architect capability, specialization and project alignment.",
        domain: "architect",
        score: 79,
        risk: "low",
        metrics: [
            {
                id: "professional-score",
                label: "Professional Intelligence",
                value: 79,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
            {
                id: "specialization",
                label: "Specialization Fit",
                value: 82,
                unit: "score",
                direction: "stable",
                confidence: "medium",
            },
            {
                id: "project-fit",
                label: "Project Fit",
                value: 76,
                unit: "score",
                direction: "up",
                confidence: "medium",
            },
        ],
        actions: [
            "Map specialization",
            "Evaluate project compatibility",
            "Review professional development needs",
        ],
    },
];

const DOMAINS: ArchitectureDomain[] = [
    "design",
    "building",
    "performance",
    "sustainability",
    "urban",
    "bim",
    "site",
    "project",
    "architect",
];

const LEVELS: IntelligenceLevel[] = [
    "basic",
    "advanced",
    "expert",
];

const DOMAIN_TRANSLATIONS: Record<
    string,
    Partial<Record<ArchitectureLocale, string>>
> = {
    "Design Quality Intelligence": {
        fa: "هوش کیفیت طراحی",
        ar: "ذكاء جودة التصميم",
        tr: "Tasarım Kalitesi Zekâsı",
    },
    "Building Performance Intelligence": {
        fa: "هوش عملکرد ساختمان",
        ar: "ذكاء أداء المبنى",
        tr: "Bina Performansı Zekâsı",
    },
    "Sustainability Intelligence": {
        fa: "هوش پایداری",
        ar: "ذكاء الاستدامة",
        tr: "Sürdürülebilirlik Zekâsı",
    },
    "Urban Architecture Intelligence": {
        fa: "هوش معماری شهری",
        ar: "ذكاء العمارة الحضرية",
        tr: "Kentsel Mimarlık Zekâsı",
    },
    "BIM Intelligence": {
        fa: "هوش BIM",
        ar: "ذكاء BIM",
        tr: "BIM Zekâsı",
    },
    "Site Intelligence": {
        fa: "هوش سایت و زمینه",
        ar: "ذكاء الموقع",
        tr: "Arazi Zekâsı",
    },
    "Architecture Project Intelligence": {
        fa: "هوش پروژه معماری",
        ar: "ذكاء مشروع العمارة",
        tr: "Mimarlık Projesi Zekâsı",
    },
    "Architect Intelligence": {
        fa: "هوش حرفه‌ای معمار",
        ar: "ذكاء المعماري",
        tr: "Mimar Zekâsı",
    },
};

function localizedTitle(
    title: string,
    locale: ArchitectureLocale,
): string {
    return (
        DOMAIN_TRANSLATIONS[title]?.[locale] ??
        title
    );
}

function localizedInsight(
    insight: ArchitectureInsight,
    locale: ArchitectureLocale,
): ArchitectureInsight {
    return {
        ...insight,
        title: localizedTitle(
            insight.title,
            locale,
        ),
    };
}

export function getArchitectureDomains(): ArchitectureDomain[] {
    return [...DOMAINS];
}

export function getArchitectureLevels(): IntelligenceLevel[] {
    return [...LEVELS];
}

export function getArchitectureInsights(): ArchitectureInsight[] {
    return INSIGHTS.map((insight) => ({
        ...insight,
        metrics: insight.metrics.map(
            (metric) => ({
                ...metric,
            }),
        ),
        actions: [...insight.actions],
    }));
}

export function queryArchitectureIntelligence(
    query: ArchitectureQuery,
): ArchitectureIntelligenceResponse {
    const limit = Math.min(
        Math.max(
            Math.trunc(query.limit ?? 8),
            1,
        ),
        20,
    );

    let results =
        getArchitectureInsights();

    if (query.domain) {
        results =
            results.filter(
                (item) =>
                    item.domain ===
                    query.domain,
            );
    }

    if (query.level) {
        const minimumScore =
            query.level === "expert"
                ? 80
                : query.level === "advanced"
                  ? 70
                  : 0;

        results =
            results.filter(
                (item) =>
                    item.score >=
                    minimumScore,
            );
    }

    results = results
        .sort(
            (a, b) =>
                b.score - a.score ||
                a.title.localeCompare(
                    b.title,
                ),
        )
        .slice(0, limit);

    return {
        locale: query.locale,
        generatedAt:
            new Date().toISOString(),
        dataStatus: "foundation",
        insights: results.map(
            (item) =>
                localizedInsight(
                    item,
                    query.locale,
                ),
        ),
        total: results.length,
    };
}

export function getArchitectureSummary(
    locale: ArchitectureLocale,
) {
    const response =
        queryArchitectureIntelligence({
            locale,
            limit: 20,
        });

    const insights =
        response.insights;

    const averageScore =
        insights.length > 0
            ? insights.reduce(
                  (
                      total,
                      item,
                  ) =>
                      total +
                      item.score,
                  0,
              ) /
              insights.length
            : 0;

    const highRiskCount =
        insights.filter(
            (item) =>
                item.risk === "high",
        ).length;

    const moderateRiskCount =
        insights.filter(
            (item) =>
                item.risk === "moderate",
        ).length;

    const lowRiskCount =
        insights.filter(
            (item) =>
                item.risk === "low",
        ).length;

    return {
        locale,
        insightCount:
            insights.length,
        averageScore:
            Number(
                averageScore.toFixed(
                    1,
                ),
            ),
        riskDistribution: {
            high: highRiskCount,
            moderate:
                moderateRiskCount,
            low: lowRiskCount,
        },
        topInsight:
            insights[0] ?? null,
    };
}
