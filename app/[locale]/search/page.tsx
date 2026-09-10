"use client";

import { FormEvent, useMemo, useState } from "react";

type Locale = "fa" | "en" | "ar" | "tr";

type SearchResult = {
    id: string;
    title: string;
    description?: string;
    type: string;
    url?: string;
    score: number;
    relevance: "high" | "medium" | "low";
};

type SearchResponse = {
    query: string;
    locale: Locale;
    intent: string;
    results: SearchResult[];
    total: number;
};

const COPY: Record<
    Locale,
    {
        title: string;
        subtitle: string;
        placeholder: string;
        button: string;
        results: string;
        noResults: string;
        thinking: string;
        intent: string;
    }
> = {
    fa: {
        title: "جستجوی هوشمند ملکیسم",
        subtitle:
            "در میان دانش، بازار، املاک، معماری، شهرها، گزارش‌ها و داده‌های ملکیسم جستجو کنید.",
        placeholder: "مثلاً قیمت مسکن، معماری پایدار یا بازار سرمایه‌گذاری...",
        button: "جستجو",
        results: "نتایج جستجو",
        noResults: "نتیجه‌ای برای این عبارت پیدا نشد.",
        thinking: "در حال تحلیل پرس‌وجو...",
        intent: "نوع جستجو",
    },
    en: {
        title: "MELKISM Intelligent Search",
        subtitle:
            "Search across knowledge, markets, properties, architecture, cities, reports and data.",
        placeholder:
            "Try: housing prices, sustainable architecture, investment market...",
        button: "Search",
        results: "Search results",
        noResults: "No results found for this query.",
        thinking: "Analyzing your query...",
        intent: "Detected intent",
    },
    ar: {
        title: "البحث الذكي في ملکیسم",
        subtitle:
            "ابحث في المعرفة والأسواق والعقارات والعمارة والمدن والتقارير والبيانات.",
        placeholder:
            "مثال: أسعار العقارات، العمارة المستدامة، سوق الاستثمار...",
        button: "بحث",
        results: "نتائج البحث",
        noResults: "لم يتم العثور على نتائج.",
        thinking: "جارٍ تحليل الاستعلام...",
        intent: "نوع البحث",
    },
    tr: {
        title: "MELKISM Akıllı Arama",
        subtitle:
            "Bilgi, pazarlar, gayrimenkul, mimarlık, şehirler, raporlar ve veriler arasında arayın.",
        placeholder:
            "Örnek: konut fiyatları, sürdürülebilir mimarlık, yatırım piyasası...",
        button: "Ara",
        results: "Arama sonuçları",
        noResults: "Sonuç bulunamadı.",
        thinking: "Sorgunuz analiz ediliyor...",
        intent: "Arama amacı",
    },
};

type Props = {
    params: Promise<{ locale: string }>;
};

export default function SearchPage({ params }: Props) {
    const [locale, setLocale] = useState<Locale>("en");
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useMemo(() => {
        params.then((value) => {
            if (
                value.locale === "fa" ||
                value.locale === "en" ||
                value.locale === "ar" ||
                value.locale === "tr"
            ) {
                setLocale(value.locale);
            }
        });
    }, [params]);

    const copy = COPY[locale];
    const direction = locale === "fa" || locale === "ar" ? "rtl" : "ltr";

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmed = query.trim();

        if (!trimmed) {
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                `/api/ai-search-intelligence?q=${encodeURIComponent(
                    trimmed,
                )}&locale=${encodeURIComponent(locale)}&limit=10`,
                {
                    method: "GET",
                    cache: "no-store",
                },
            );

            if (!response.ok) {
                throw new Error("Search request failed.");
            }

            const data = (await response.json()) as SearchResponse;

            setResults(data);
        } catch {
            setResults(null);
            setError("Unable to complete search.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main
            dir={direction}
            style={{
                minHeight: "100vh",
                background: "#f7f8fa",
                padding: "48px 20px 80px",
            }}
        >
            <section
                style={{
                    width: "100%",
                    maxWidth: 1080,
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
                            letterSpacing: 0.5,
                            textTransform: "uppercase",
                            opacity: 0.65,
                            marginBottom: 10,
                        }}
                    >
                        MELKISM AI
                    </div>

                    <h1
                        style={{
                            margin: 0,
                            fontSize: "clamp(32px, 5vw, 56px)",
                            lineHeight: 1.05,
                            fontWeight: 800,
                        }}
                    >
                        {copy.title}
                    </h1>

                    <p
                        style={{
                            maxWidth: 780,
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
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        gap: 12,
                        flexDirection: "column",
                        background: "#ffffff",
                        padding: 16,
                        borderRadius: 20,
                        boxShadow:
                            "0 12px 40px rgba(15,23,42,0.08)",
                    }}
                >
                    <input
                        value={query}
                        onChange={(event) =>
                            setQuery(event.target.value)
                        }
                        placeholder={copy.placeholder}
                        aria-label={copy.placeholder}
                        style={{
                            width: "100%",
                            border: "1px solid #d8dce3",
                            borderRadius: 14,
                            padding: "16px 18px",
                            fontSize: 16,
                            outline: "none",
                            background: "#fff",
                        }}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            border: "none",
                            borderRadius: 14,
                            padding: "14px 22px",
                            fontWeight: 700,
                            fontSize: 15,
                            cursor: loading ? "wait" : "pointer",
                            background: "#111827",
                            color: "#ffffff",
                        }}
                    >
                        {loading ? copy.thinking : copy.button}
                    </button>
                </form>

                {error ? (
                    <p
                        role="alert"
                        style={{
                            marginTop: 18,
                            color: "#b42318",
                        }}
                    >
                        {error}
                    </p>
                ) : null}

                {results ? (
                    <section style={{ marginTop: 34 }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: 16,
                                marginBottom: 16,
                                flexWrap: "wrap",
                            }}
                        >
                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: 24,
                                }}
                            >
                                {copy.results}
                            </h2>

                            <div
                                style={{
                                    fontSize: 13,
                                    opacity: 0.65,
                                }}
                            >
                                {copy.intent}:{" "}
                                <strong>{results.intent}</strong>
                            </div>
                        </div>

                        {results.results.length === 0 ? (
                            <div
                                style={{
                                    background: "#fff",
                                    borderRadius: 18,
                                    padding: 28,
                                    border:
                                        "1px solid #e4e7ec",
                                }}
                            >
                                {copy.noResults}
                            </div>
                        ) : (
                            <div
                                style={{
                                    display: "grid",
                                    gap: 14,
                                }}
                            >
                                {results.results.map((result) => (
                                    <article
                                        key={result.id}
                                        style={{
                                            background: "#fff",
                                            borderRadius: 18,
                                            padding: 22,
                                            border:
                                                "1px solid #e4e7ec",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent:
                                                    "space-between",
                                                alignItems: "flex-start",
                                                gap: 16,
                                            }}
                                        >
                                            <div>
                                                <div
                                                    style={{
                                                        fontSize: 12,
                                                        opacity: 0.55,
                                                        textTransform:
                                                            "uppercase",
                                                        marginBottom: 6,
                                                    }}
                                                >
                                                    {result.type}
                                                </div>

                                                <h3
                                                    style={{
                                                        margin: 0,
                                                        fontSize: 20,
                                                    }}
                                                >
                                                    {result.url ? (
                                                        <a
                                                            href={result.url}
                                                            style={{
                                                                color:
                                                                    "inherit",
                                                                textDecoration:
                                                                    "none",
                                                            }}
                                                        >
                                                            {
                                                                result.title
                                                            }
                                                        </a>
                                                    ) : (
                                                        result.title
                                                    )}
                                                </h3>

                                                {result.description ? (
                                                    <p
                                                        style={{
                                                            margin:
                                                                "9px 0 0",
                                                            lineHeight:
                                                                1.65,
                                                            opacity: 0.75,
                                                        }}
                                                    >
                                                        {
                                                            result.description
                                                        }
                                                    </p>
                                                ) : null}
                                            </div>

                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    whiteSpace:
                                                        "nowrap",
                                                    opacity: 0.6,
                                                }}
                                            >
                                                {result.relevance}
                                            </span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </section>
                ) : null}
            </section>
        </main>
    );
}
