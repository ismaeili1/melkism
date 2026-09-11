"use client";

import {
    useState,
    type ChangeEvent,
} from "react";

type Locale =
    | "fa"
    | "en"
    | "ar"
    | "tr";

type ArchitectureMetric = {
    id: string;
    label: string;
    value: number;
    unit: string;
    direction:
        | "up"
        | "down"
        | "stable";
};

type ArchitectureInsight = {
    id: string;
    title: string;
    summary: string;
    domain: string;
    score: number;
    risk:
        | "low"
        | "moderate"
        | "high";
    metrics: ArchitectureMetric[];
    actions: string[];
};

type ResponseData = {
    locale: Locale;
    generatedAt: string;
    dataStatus: "foundation";
    insights: ArchitectureInsight[];
    total: number;
};

const COPY: Record<
    Locale,
    {
        eyebrow: string;
        title: string;
        subtitle: string;
        domain: string;
        level: string;
        all: string;
        basic: string;
        advanced: string;
        expert: string;
        analyze: string;
        loading: string;
        status: string;
        score: string;
        risk: string;
        metrics: string;
        actions: string;
        noResults: string;
        foundation: string;
        low: string;
        moderate: string;
        high: string;
        domainLabels: Record<
            string,
            string
        >;
    }
> = {
    fa: {
        eyebrow:
            "MELKISM ARCHITECTURE INTELLIGENCE",
        title: "هوش معماری",
        subtitle:
            "تحلیل یکپارچهٔ طراحی، ساختمان، عملکرد، پایداری، BIM، سایت، شهر، پروژه و تخصص حرفه‌ای معماری.",
        domain: "حوزه تحلیل",
        level: "سطح هوش",
        all: "همه",
        basic: "پایه",
        advanced: "پیشرفته",
        expert: "حرفه‌ای",
        analyze: "تحلیل معماری",
        loading:
            "در حال تحلیل معماری...",
        status: "وضعیت داده",
        score: "امتیاز",
        risk: "ریسک",
        metrics: "شاخص‌ها",
        actions: "اقدامات پیشنهادی",
        noResults:
            "نتیجه‌ای برای این فیلتر وجود ندارد.",
        foundation:
            "دادهٔ Foundation — هنوز منبع زندهٔ پروژه نیست.",
        low: "پایین",
        moderate: "متوسط",
        high: "بالا",
        domainLabels: {
            design: "طراحی",
            building: "ساختمان",
            performance: "عملکرد",
            sustainability: "پایداری",
            urban: "شهری",
            bim: "BIM",
            site: "سایت",
            project: "پروژه",
            architect: "معمار",
        },
    },

    en: {
        eyebrow:
            "MELKISM ARCHITECTURE INTELLIGENCE",
        title: "Architecture Intelligence",
        subtitle:
            "Integrated intelligence across design, buildings, performance, sustainability, BIM, site, urban systems, projects and professional expertise.",
        domain: "Analysis domain",
        level: "Intelligence level",
        all: "All",
        basic: "Basic",
        advanced: "Advanced",
        expert: "Expert",
        analyze: "Analyze architecture",
        loading:
            "Analyzing architecture...",
        status: "Data status",
        score: "Score",
        risk: "Risk",
        metrics: "Metrics",
        actions: "Recommended actions",
        noResults:
            "No results match this filter.",
        foundation:
            "Foundation data — not yet a live project source.",
        low: "Low",
        moderate: "Moderate",
        high: "High",
        domainLabels: {
            design: "Design",
            building: "Building",
            performance: "Performance",
            sustainability: "Sustainability",
            urban: "Urban",
            bim: "BIM",
            site: "Site",
            project: "Project",
            architect: "Architect",
        },
    },

    ar: {
        eyebrow:
            "MELKISM ARCHITECTURE INTELLIGENCE",
        title: "ذكاء العمارة",
        subtitle:
            "ذكاء متكامل للتصميم والمباني والأداء والاستدامة وBIM والموقع والأنظمة الحضرية والمشاريع والخبرة المهنية.",
        domain: "مجال التحليل",
        level: "مستوى الذكاء",
        all: "الكل",
        basic: "أساسي",
        advanced: "متقدم",
        expert: "احترافي",
        analyze: "تحليل العمارة",
        loading:
            "جارٍ تحليل العمارة...",
        status: "حالة البيانات",
        score: "الدرجة",
        risk: "المخاطر",
        metrics: "المؤشرات",
        actions: "الإجراءات المقترحة",
        noResults:
            "لا توجد نتائج مطابقة.",
        foundation:
            "بيانات تأسيسية — ليست بعد مصدراً مباشراً لمشروع حي.",
        low: "منخفض",
        moderate: "متوسط",
        high: "مرتفع",
        domainLabels: {
            design: "التصميم",
            building: "المبنى",
            performance: "الأداء",
            sustainability: "الاستدامة",
            urban: "حضري",
            bim: "BIM",
            site: "الموقع",
            project: "المشروع",
            architect: "المعماري",
        },
    },

    tr: {
        eyebrow:
            "MELKISM ARCHITECTURE INTELLIGENCE",
        title: "Mimarlık İstihbaratı",
        subtitle:
            "Tasarım, bina performansı, sürdürülebilirlik, BIM, arazi, kentsel sistemler, projeler ve profesyonel uzmanlık için bütünleşik istihbarat.",
        domain: "Analiz alanı",
        level: "Zekâ seviyesi",
        all: "Tümü",
        basic: "Temel",
        advanced: "İleri",
        expert: "Uzman",
        analyze:
            "Mimarlığı analiz et",
        loading:
            "Mimarlık analiz ediliyor...",
        status: "Veri durumu",
        score: "Skor",
        risk: "Risk",
        metrics: "Metrikler",
        actions: "Önerilen aksiyonlar",
        noResults:
            "Bu filtreyle eşleşen sonuç yok.",
        foundation:
            "Temel veri — henüz canlı proje kaynağı değil.",
        low: "Düşük",
        moderate: "Orta",
        high: "Yüksek",
        domainLabels: {
            design: "Tasarım",
            building: "Bina",
            performance: "Performans",
            sustainability: "Sürdürülebilirlik",
            urban: "Kentsel",
            bim: "BIM",
            site: "Arazi",
            project: "Proje",
            architect: "Mimar",
        },
    },
};

const DOMAINS = [
    "design",
    "performance",
    "sustainability",
    "urban",
    "bim",
    "site",
    "project",
    "architect",
];

const LEVELS = [
    "basic",
    "advanced",
    "expert",
];

type Props = {
    locale: Locale;
};

function riskText(
    risk: ArchitectureInsight["risk"],
    locale: Locale,
) {
    const copy = COPY[locale];

    return risk === "low"
        ? copy.low
        : risk === "high"
          ? copy.high
          : copy.moderate;
}

export default function ArchitectureIntelligencePanel({
    locale,
}: Props) {
    const copy = COPY[locale];

    const direction =
        locale === "fa" ||
        locale === "ar"
            ? "rtl"
            : "ltr";

    const [domain, setDomain] =
        useState("");

    const [level, setLevel] =
        useState("");

    const [data, setData] =
        useState<ResponseData | null>(
            null,
        );

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    async function analyze(
        selectedDomain: string =
            domain,
        selectedLevel: string =
            level,
    ) {
        setLoading(true);
        setError("");

        try {
            const params =
                new URLSearchParams({
                    locale,
                    limit: "20",
                });

            if (selectedDomain) {
                params.set(
                    "domain",
                    selectedDomain,
                );
            }

            if (selectedLevel) {
                params.set(
                    "level",
                    selectedLevel,
                );
            }

            const response =
                await fetch(
                    `/api/architecture-intelligence?${params.toString()}`,
                    {
                        cache: "no-store",
                    },
                );

            if (!response.ok) {
                throw new Error(
                    "Architecture analysis failed.",
                );
            }

            const result =
                (await response.json()) as ResponseData;

            setData(result);
        } catch {
            setData(null);
            setError(
                "Unable to load architecture intelligence.",
            );
        } finally {
            setLoading(false);
        }
    }

    function handleDomain(
        event: ChangeEvent<HTMLSelectElement>,
    ) {
        const next =
            event.target.value;

        setDomain(next);
        void analyze(
            next,
            level,
        );
    }

    function handleLevel(
        event: ChangeEvent<HTMLSelectElement>,
    ) {
        const next =
            event.target.value;

        setLevel(next);
        void analyze(
            domain,
            next,
        );
    }

    return (
        <main
            dir={direction}
            style={{
                minHeight: "100vh",
                background: "#f7f8fa",
                padding:
                    "48px 20px 80px",
            }}
        >
            <section
                style={{
                    width: "100%",
                    maxWidth: 1180,
                    margin: "0 auto",
                }}
            >
                <header
                    style={{
                        marginBottom: 28,
                    }}
                >
                    <div
                        style={{
                            fontSize: 13,
                            fontWeight: 700,
                            letterSpacing: 0.6,
                            opacity: 0.6,
                            marginBottom: 10,
                        }}
                    >
                        {copy.eyebrow}
                    </div>

                    <h1
                        style={{
                            margin: 0,
                            fontSize:
                                "clamp(36px,5vw,60px)",
                            lineHeight: 1.04,
                            fontWeight: 800,
                        }}
                    >
                        {copy.title}
                    </h1>

                    <p
                        style={{
                            maxWidth: 860,
                            fontSize: 18,
                            lineHeight: 1.7,
                            opacity: 0.76,
                            marginTop: 18,
                        }}
                    >
                        {copy.subtitle}
                    </p>
                </header>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit,minmax(220px,1fr))",
                        gap: 12,
                        marginBottom: 24,
                    }}
                >
                    <label
                        style={{
                            display: "grid",
                            gap: 7,
                        }}
                    >
                        <span
                            style={{
                                fontSize: 12,
                                fontWeight: 700,
                                opacity: 0.62,
                            }}
                        >
                            {copy.domain}
                        </span>

                        <select
                            value={domain}
                            onChange={
                                handleDomain
                            }
                            style={{
                                minHeight: 46,
                                padding:
                                    "0 14px",
                                border:
                                    "1px solid #d8dce3",
                                borderRadius: 12,
                                background:
                                    "#ffffff",
                                fontSize: 14,
                            }}
                        >
                            <option value="">
                                {copy.all}
                            </option>

                            {DOMAINS.map(
                                (item) => (
                                    <option
                                        key={
                                            item
                                        }
                                        value={
                                            item
                                        }
                                    >
                                        {
                                            copy
                                                .domainLabels[
                                                item
                                            ]
                                        }
                                    </option>
                                ),
                            )}
                        </select>
                    </label>

                    <label
                        style={{
                            display: "grid",
                            gap: 7,
                        }}
                    >
                        <span
                            style={{
                                fontSize: 12,
                                fontWeight: 700,
                                opacity: 0.62,
                            }}
                        >
                            {copy.level}
                        </span>

                        <select
                            value={level}
                            onChange={
                                handleLevel
                            }
                            style={{
                                minHeight: 46,
                                padding:
                                    "0 14px",
                                border:
                                    "1px solid #d8dce3",
                                borderRadius: 12,
                                background:
                                    "#ffffff",
                                fontSize: 14,
                            }}
                        >
                            <option value="">
                                {copy.all}
                            </option>

                            <option value="basic">
                                {copy.basic}
                            </option>

                            <option value="advanced">
                                {copy.advanced}
                            </option>

                            <option value="expert">
                                {copy.expert}
                            </option>
                        </select>
                    </label>

                    <button
                        type="button"
                        onClick={() =>
                            void analyze()
                        }
                        disabled={loading}
                        style={{
                            alignSelf: "end",
                            minHeight: 46,
                            border: 0,
                            borderRadius: 12,
                            padding:
                                "0 18px",
                            background:
                                "#111827",
                            color:
                                "#ffffff",
                            fontSize: 14,
                            fontWeight: 700,
                            cursor:
                                loading
                                    ? "wait"
                                    : "pointer",
                        }}
                    >
                        {loading
                            ? copy.loading
                            : copy.analyze}
                    </button>
                </div>

                {error ? (
                    <div
                        role="alert"
                        style={{
                            background:
                                "#ffffff",
                            borderRadius:
                                18,
                            padding:
                                20,
                            color:
                                "#a61b1b",
                            border:
                                "1px solid #f0c7c7",
                            marginBottom:
                                20,
                        }}
                    >
                        {error}
                    </div>
                ) : null}

                {loading && !data ? (
                    <div
                        style={{
                            background:
                                "#ffffff",
                            borderRadius:
                                18,
                            padding:
                                28,
                            border:
                                "1px solid #e4e7ec",
                        }}
                    >
                        {copy.loading}
                    </div>
                ) : null}

                {data &&
                data.insights.length ===
                    0 ? (
                    <div
                        style={{
                            background:
                                "#ffffff",
                            borderRadius:
                                18,
                            padding:
                                28,
                            border:
                                "1px solid #e4e7ec",
                        }}
                    >
                        {copy.noResults}
                    </div>
                ) : null}

                {data &&
                data.insights.length > 0 ? (
                    <section>
                        <div
                            style={{
                                display:
                                    "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit,minmax(280px,1fr))",
                                gap: 16,
                            }}
                        >
                            {data.insights.map(
                                (insight) => (
                                    <article
                                        key={
                                            insight.id
                                        }
                                        style={{
                                            background:
                                                "#ffffff",
                                            borderRadius:
                                                20,
                                            border:
                                                "1px solid #e4e7ec",
                                            padding:
                                                22,
                                        }}
                                    >
                                        <div
                                            style={{
                                                display:
                                                    "flex",
                                                alignItems:
                                                    "flex-start",
                                                justifyContent:
                                                    "space-between",
                                                gap: 12,
                                                marginBottom:
                                                    14,
                                            }}
                                        >
                                            <div>
                                                <div
                                                    style={{
                                                        fontSize:
                                                            11,
                                                        textTransform:
                                                            "uppercase",
                                                        fontWeight:
                                                            700,
                                                        opacity:
                                                            0.5,
                                                        marginBottom:
                                                            7,
                                                    }}
                                                >
                                                    {
                                                        copy
                                                            .domainLabels[
                                                            insight
                                                                .domain
                                                        ] ??
                                                        insight.domain
                                                    }
                                                </div>

                                                <h2
                                                    style={{
                                                        margin:
                                                            0,
                                                        fontSize:
                                                            21,
                                                        lineHeight:
                                                            1.2,
                                                    }}
                                                >
                                                    {
                                                        insight.title
                                                    }
                                                </h2>
                                            </div>

                                            <div
                                                style={{
                                                    fontSize:
                                                        24,
                                                    fontWeight:
                                                        800,
                                                }}
                                            >
                                                {
                                                    insight.score
                                                }
                                            </div>
                                        </div>

                                        <p
                                            style={{
                                                margin:
                                                    "0 0 15px",
                                                lineHeight:
                                                    1.65,
                                                opacity:
                                                    0.72,
                                            }}
                                        >
                                            {
                                                insight.summary
                                            }
                                        </p>

                                        <div
                                            style={{
                                                display:
                                                    "flex",
                                                justifyContent:
                                                    "space-between",
                                                gap: 12,
                                                fontSize:
                                                    12,
                                                opacity:
                                                    0.64,
                                                marginBottom:
                                                    14,
                                            }}
                                        >
                                            <span>
                                                {
                                                    copy.risk
                                                }
                                                :{" "}
                                                <strong>
                                                    {riskText(
                                                        insight.risk,
                                                        locale,
                                                    )}
                                                </strong>
                                            </span>

                                            <span>
                                                {
                                                    copy.status
                                                }
                                                :{" "}
                                                <strong>
                                                    Foundation
                                                </strong>
                                            </span>
                                        </div>

                                        <div
                                            style={{
                                                fontSize:
                                                    12,
                                                fontWeight:
                                                    700,
                                                marginBottom:
                                                    8,
                                                opacity:
                                                    0.62,
                                            }}
                                        >
                                            {
                                                copy.metrics
                                            }
                                        </div>

                                        <div
                                            style={{
                                                display:
                                                    "grid",
                                                gap: 8,
                                            }}
                                        >
                                            {insight.metrics.map(
                                                (
                                                    metric,
                                                ) => (
                                                    <div
                                                        key={
                                                            metric.id
                                                        }
                                                        style={{
                                                            display:
                                                                "flex",
                                                            justifyContent:
                                                                "space-between",
                                                            gap: 12,
                                                            border:
                                                                "1px solid #edf0f3",
                                                            borderRadius:
                                                                11,
                                                            padding:
                                                                "10px 12px",
                                                            fontSize:
                                                                13,
                                                        }}
                                                    >
                                                        <span>
                                                            {
                                                                metric.label
                                                            }
                                                        </span>

                                                        <strong>
                                                            {
                                                                metric.value
                                                            }
                                                        </strong>
                                                    </div>
                                                ),
                                            )}
                                        </div>

                                        <div
                                            style={{
                                                marginTop:
                                                    16,
                                                fontSize:
                                                    12,
                                                fontWeight:
                                                    700,
                                                opacity:
                                                    0.62,
                                            }}
                                        >
                                            {
                                                copy.actions
                                            }
                                        </div>

                                        <ul
                                            style={{
                                                margin:
                                                    "8px 0 0",
                                                paddingInlineStart:
                                                    18,
                                                lineHeight:
                                                    1.7,
                                                fontSize:
                                                    13,
                                                opacity:
                                                    0.76,
                                            }}
                                        >
                                            {insight.actions.map(
                                                (
                                                    action,
                                                ) => (
                                                    <li
                                                        key={
                                                            action
                                                        }
                                                    >
                                                        {
                                                            action
                                                        }
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </article>
                                ),
                            )}
                        </div>

                        <div
                            style={{
                                marginTop: 20,
                                fontSize: 12,
                                opacity: 0.52,
                            }}
                        >
                            {copy.foundation}
                        </div>
                    </section>
                ) : null}
            </section>
        </main>
    );
}

