"use client";

import {
    useState,
    type FormEvent,
} from "react";

type Locale =
    | "fa"
    | "en"
    | "ar"
    | "tr";

type RecommendationItem = {
    id: string;
    title: string;
    description?: string;
    type: string;
    url?: string;
    recommendationScore: number;
    relevance: "high" | "medium" | "low";
    reasons: Array<{
        code: string;
        label: string;
    }>;
};

type RecommendationResponse = {
    locale: Locale;
    context: string;
    strategy: string;
    items: RecommendationItem[];
    total: number;
};

const COPY: Record<
    Locale,
    {
        eyebrow: string;
        title: string;
        subtitle: string;
        queryPlaceholder: string;
        queryButton: string;
        context: string;
        strategy: string;
        loading: string;
        resultTitle: string;
        noResults: string;
        reason: string;
        contexts: Record<string, string>;
        strategies: Record<string, string>;
        error: string;
    }
> = {
    fa: {
        eyebrow: "MELKISM AI",
        title: "پیشنهادهای هوشمند",
        subtitle:
            "محتوا، بازار، املاک، معماری، شهرها و داده‌های مرتبط با مسیر جستجوی خود را کشف کنید.",
        queryPlaceholder:
            "مثلاً معماری پایدار، بازار مسکن یا سرمایه‌گذاری...",
        queryButton: "دریافت پیشنهاد",
        context: "حوزه",
        strategy: "راهبرد",
        loading: "در حال تولید پیشنهادها...",
        resultTitle: "پیشنهادهای مرتبط",
        noResults:
            "در این مرحله پیشنهادی پیدا نشد.",
        reason: "دلیل پیشنهاد",
        error:
            "امکان دریافت پیشنهادها وجود ندارد.",
        contexts: {
            discovery: "اکتشاف",
            property: "املاک",
            market: "بازار",
            architecture: "معماری",
            city: "شهر",
            research: "پژوهش",
            news: "اخبار",
            data: "داده",
            general: "عمومی",
        },
        strategies: {
            intent: "بر اساس نیت",
            interest: "بر اساس علاقه",
            "cross-domain":
                "بین‌حوزه‌ای",
            balanced: "متعادل",
        },
    },
    en: {
        eyebrow: "MELKISM AI",
        title: "Intelligent Recommendations",
        subtitle:
            "Discover content, markets, properties, architecture, cities and data related to your search journey.",
        queryPlaceholder:
            "For example: sustainable architecture, housing market or investment...",
        queryButton: "Get recommendations",
        context: "Context",
        strategy: "Strategy",
        loading:
            "Generating recommendations...",
        resultTitle:
            "Recommended for you",
        noResults:
            "No recommendations were found.",
        reason: "Why this was recommended",
        error:
            "Unable to retrieve recommendations.",
        contexts: {
            discovery: "Discovery",
            property: "Property",
            market: "Market",
            architecture: "Architecture",
            city: "City",
            research: "Research",
            news: "News",
            data: "Data",
            general: "General",
        },
        strategies: {
            intent: "Intent",
            interest: "Interest",
            "cross-domain":
                "Cross-domain",
            balanced: "Balanced",
        },
    },
    ar: {
        eyebrow: "MELKISM AI",
        title: "التوصيات الذكية",
        subtitle:
            "اكتشف المحتوى والأسواق والعقارات والعمارة والمدن والبيانات المرتبطة بمسار البحث.",
        queryPlaceholder:
            "مثال: العمارة المستدامة أو سوق الإسكان أو الاستثمار...",
        queryButton: "الحصول على التوصيات",
        context: "السياق",
        strategy: "الاستراتيجية",
        loading:
            "جارٍ إنشاء التوصيات...",
        resultTitle: "التوصيات المرتبطة",
        noResults:
            "لم يتم العثور على توصيات.",
        reason: "سبب التوصية",
        error:
            "تعذر الحصول على التوصيات.",
        contexts: {
            discovery: "اكتشاف",
            property: "عقارات",
            market: "سوق",
            architecture: "عمارة",
            city: "مدينة",
            research: "بحث",
            news: "أخبار",
            data: "بيانات",
            general: "عام",
        },
        strategies: {
            intent: "حسب النية",
            interest: "حسب الاهتمام",
            "cross-domain":
                "متعدد المجالات",
            balanced: "متوازن",
        },
    },
    tr: {
        eyebrow: "MELKISM AI",
        title: "Akıllı Öneriler",
        subtitle:
            "Arama yolculuğunuzla ilişkili içerikleri, pazarları, gayrimenkulleri, mimariyi, şehirleri ve verileri keşfedin.",
        queryPlaceholder:
            "Örneğin sürdürülebilir mimarlık, konut piyasası veya yatırım...",
        queryButton: "Önerileri getir",
        context: "Bağlam",
        strategy: "Strateji",
        loading:
            "Öneriler hazırlanıyor...",
        resultTitle:
            "Sizin için öneriler",
        noResults:
            "Öneri bulunamadı.",
        reason: "Öneri nedeni",
        error:
            "Öneriler alınamadı.",
        contexts: {
            discovery: "Keşif",
            property: "Gayrimenkul",
            market: "Pazar",
            architecture: "Mimarlık",
            city: "Şehir",
            research: "Araştırma",
            news: "Haber",
            data: "Veri",
            general: "Genel",
        },
        strategies: {
            intent: "Niyet",
            interest: "İlgi",
            "cross-domain":
                "Alanlar arası",
            balanced: "Dengeli",
        },
    },
};

const CONTEXTS = [
    "discovery",
    "property",
    "market",
    "architecture",
    "city",
    "research",
    "news",
    "data",
    "general",
];

const STRATEGIES = [
    "intent",
    "interest",
    "cross-domain",
    "balanced",
];

type Props = {
    locale: Locale;
};

export default function RecommendationPanel({
    locale,
}: Props) {
    const copy = COPY[locale];

    const direction =
        locale === "fa" ||
        locale === "ar"
            ? "rtl"
            : "ltr";

    const [query, setQuery] =
        useState("");

    const [context, setContext] =
        useState("discovery");

    const [strategy, setStrategy] =
        useState("balanced");

    const [data, setData] =
        useState<RecommendationResponse | null>(
            null,
        );

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    async function submit(
        event?: FormEvent<HTMLFormElement>,
    ) {
        event?.preventDefault();

        setLoading(true);
        setError("");

        try {
            const response =
                await fetch(
                    "/api/recommendations",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body:
                            JSON.stringify({
                                locale,
                                context,
                                strategy,
                                limit: 8,
                                profile:
                                    query.trim()
                                        ? {
                                              locale,
                                              recentQuery:
                                                  query.trim(),
                                          }
                                        : {
                                              locale,
                                          },
                            }),
                    },
                );

            if (!response.ok) {
                throw new Error(
                    "Recommendation request failed.",
                );
            }

            const result =
                (await response.json()) as RecommendationResponse;

            setData(result);
        } catch {
            setData(null);
            setError(copy.error);
        } finally {
            setLoading(false);
        }
    }



    return (
        <main
            dir={direction}
            style={{
                minHeight: "100vh",
                background:
                    "#f7f8fa",
                padding:
                    "48px 20px 80px",
            }}
        >
            <section
                style={{
                    width: "100%",
                    maxWidth: 1120,
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
                            opacity: 0.62,
                            marginBottom: 10,
                        }}
                    >
                        {copy.eyebrow}
                    </div>

                    <h1
                        style={{
                            margin: 0,
                            fontSize:
                                "clamp(34px,5vw,58px)",
                            lineHeight: 1.05,
                            fontWeight: 800,
                        }}
                    >
                        {copy.title}
                    </h1>

                    <p
                        style={{
                            maxWidth: 820,
                            fontSize: 18,
                            lineHeight: 1.7,
                            opacity: 0.78,
                            marginTop: 18,
                        }}
                    >
                        {copy.subtitle}
                    </p>
                </header>

                <form
                    onSubmit={submit}
                    style={{
                        background: "#ffffff",
                        padding: 18,
                        borderRadius: 20,
                        boxShadow:
                            "0 12px 40px rgba(15,23,42,.08)",
                        marginBottom: 30,
                    }}
                >
                    <input
                        value={query}
                        onChange={(event) =>
                            setQuery(
                                event.target
                                    .value,
                            )
                        }
                        placeholder={
                            copy.queryPlaceholder
                        }
                        aria-label={
                            copy.queryPlaceholder
                        }
                        style={{
                            width: "100%",
                            boxSizing:
                                "border-box",
                            border:
                                "1px solid #d8dce3",
                            borderRadius: 14,
                            padding:
                                "15px 17px",
                            fontSize: 16,
                            outline: "none",
                        }}
                    />

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit,minmax(220px,1fr))",
                            gap: 12,
                            marginTop: 12,
                        }}
                    >
                        <label
                            style={{
                                display:
                                    "grid",
                                gap: 6,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    opacity: 0.6,
                                }}
                            >
                                {copy.context}
                            </span>

                            <select
                                value={context}
                                onChange={(
                                    event,
                                ) =>
                                    setContext(
                                        event
                                            .target
                                            .value,
                                    )
                                }
                                style={{
                                    padding:
                                        "13px 14px",
                                    border:
                                        "1px solid #d8dce3",
                                    borderRadius: 12,
                                    background:
                                        "#fff",
                                    fontSize: 14,
                                }}
                            >
                                {CONTEXTS.map(
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
                                                    .contexts[
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
                                display:
                                    "grid",
                                gap: 6,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    opacity: 0.6,
                                }}
                            >
                                {copy.strategy}
                            </span>

                            <select
                                value={strategy}
                                onChange={(
                                    event,
                                ) =>
                                    setStrategy(
                                        event
                                            .target
                                            .value,
                                    )
                                }
                                style={{
                                    padding:
                                        "13px 14px",
                                    border:
                                        "1px solid #d8dce3",
                                    borderRadius: 12,
                                    background:
                                        "#fff",
                                    fontSize: 14,
                                }}
                            >
                                {STRATEGIES.map(
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
                                                    .strategies[
                                                    item
                                                ]
                                            }
                                        </option>
                                    ),
                                )}
                            </select>
                        </label>

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                alignSelf:
                                    "end",
                                minHeight:
                                    46,
                                border: 0,
                                borderRadius:
                                    12,
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
                                : copy.queryButton}
                        </button>
                    </div>
                </form>

                {error ? (
                    <div
                        role="alert"
                        style={{
                            background:
                                "#fff",
                            borderRadius:
                                14,
                            padding:
                                18,
                            marginBottom:
                                20,
                            border:
                                "1px solid #f0c7c7",
                            color:
                                "#a61b1b",
                        }}
                    >
                        {error}
                    </div>
                ) : null}

                {data ? (
                    <section>
                        <div
                            style={{
                                display:
                                    "flex",
                                justifyContent:
                                    "space-between",
                                alignItems:
                                    "center",
                                gap: 12,
                                flexWrap:
                                    "wrap",
                                marginBottom:
                                    16,
                            }}
                        >
                            <h2
                                style={{
                                    margin: 0,
                                    fontSize:
                                        25,
                                }}
                            >
                                {
                                    copy.resultTitle
                                }
                            </h2>

                            <div
                                style={{
                                    fontSize: 13,
                                    opacity:
                                        0.65,
                                }}
                            >
                                {
                                    copy.contexts[
                                        data
                                            .context
                                    ]
                                }{" "}
                                ·{" "}
                                {
                                    copy
                                        .strategies[
                                        data
                                            .strategy
                                    ]
                                }
                            </div>
                        </div>

                        {data.items.length ===
                        0 ? (
                            <div
                                style={{
                                    background:
                                        "#fff",
                                    borderRadius:
                                        18,
                                    padding:
                                        28,
                                    border:
                                        "1px solid #e4e7ec",
                                }}
                            >
                                {
                                    copy.noResults
                                }
                            </div>
                        ) : (
                            <div
                                style={{
                                    display:
                                        "grid",
                                    gridTemplateColumns:
                                        "repeat(auto-fit,minmax(280px,1fr))",
                                    gap: 16,
                                }}
                            >
                                {data.items.map(
                                    (item) => (
                                        <article
                                            key={
                                                item.id
                                            }
                                            style={{
                                                background:
                                                    "#fff",
                                                borderRadius:
                                                    18,
                                                padding:
                                                    22,
                                                border:
                                                    "1px solid #e4e7ec",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize:
                                                        11,
                                                    fontWeight:
                                                        700,
                                                    textTransform:
                                                        "uppercase",
                                                    opacity:
                                                        0.55,
                                                    marginBottom:
                                                        8,
                                                }}
                                            >
                                                {
                                                    item.type
                                                }
                                            </div>

                                            <h3
                                                style={{
                                                    margin:
                                                        0,
                                                    fontSize:
                                                        20,
                                                }}
                                            >
                                                {item.url ? (
                                                    <a
                                                        href={
                                                            item.url
                                                        }
                                                        style={{
                                                            color:
                                                                "inherit",
                                                            textDecoration:
                                                                "none",
                                                        }}
                                                    >
                                                        {
                                                            item.title
                                                        }
                                                    </a>
                                                ) : (
                                                    item.title
                                                )}
                                            </h3>

                                            {item.description ? (
                                                <p
                                                    style={{
                                                        margin:
                                                            "9px 0 15px",
                                                        lineHeight:
                                                            1.65,
                                                        opacity:
                                                            0.72,
                                                    }}
                                                >
                                                    {
                                                        item.description
                                                    }
                                                </p>
                                            ) : null}

                                            <div
                                                style={{
                                                    fontSize:
                                                        12,
                                                    fontWeight:
                                                        700,
                                                    opacity:
                                                        0.65,
                                                    marginBottom:
                                                        8,
                                                }}
                                            >
                                                {
                                                    copy.reason
                                                }
                                            </div>

                                            <div
                                                style={{
                                                    display:
                                                        "flex",
                                                    flexWrap:
                                                        "wrap",
                                                    gap: 6,
                                                }}
                                            >
                                                {item.reasons.map(
                                                    (
                                                        reason,
                                                    ) => (
                                                        <span
                                                            key={`${item.id}-${reason.code}`}
                                                            style={{
                                                                border:
                                                                    "1px solid #e1e5ea",
                                                                borderRadius:
                                                                    999,
                                                                padding:
                                                                    "5px 9px",
                                                                fontSize:
                                                                    11,
                                                                opacity:
                                                                    0.78,
                                                            }}
                                                        >
                                                            {
                                                                reason.label
                                                            }
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        </article>
                                    ),
                                )}
                            </div>
                        )}
                    </section>
                ) : null}
            </section>
        </main>
    );
}


