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

type Market = {
    id: string;
    name: string;
    currency: string;
    segment: string;
    priceIndex: number;
    annualChangePercent: number;
    transactionActivity: number;
    demandIndex: number;
    supplyIndex: number;
    investmentScore: number;
    risk: "low" | "moderate" | "high";
    direction: "up" | "down" | "stable";
};

type ResponseData = {
    locale: Locale;
    generatedAt: string;
    dataStatus: "foundation";
    markets: Market[];
    total: number;
};

const COPY: Record<
    Locale,
    {
        eyebrow: string;
        title: string;
        subtitle: string;
        segment: string;
        all: string;
        residential: string;
        commercial: string;
        land: string;
        load: string;
        loading: string;
        status: string;
        price: string;
        demand: string;
        supply: string;
        investment: string;
        activity: string;
        risk: string;
        noResults: string;
        foundation: string;
    }
> = {
    fa: {
        eyebrow: "MELKISM INTELLIGENCE",
        title: "هوش بازار املاک",
        subtitle:
            "تصویری یکپارچه از شاخص‌های قیمت، تقاضا، عرضه، فعالیت معاملات و ظرفیت سرمایه‌گذاری بازارها.",
        segment: "بخش بازار",
        all: "همه",
        residential: "مسکونی",
        commercial: "تجاری",
        land: "زمین",
        load: "نمایش بازار",
        loading: "در حال تحلیل بازار...",
        status: "وضعیت داده",
        price: "شاخص قیمت",
        demand: "تقاضا",
        supply: "عرضه",
        investment: "امتیاز سرمایه‌گذاری",
        activity: "فعالیت معاملات",
        risk: "ریسک",
        noResults: "داده‌ای برای این فیلتر پیدا نشد.",
        foundation:
            "Foundation data — not a live market feed",
    },
    en: {
        eyebrow: "MELKISM INTELLIGENCE",
        title: "Market Intelligence",
        subtitle:
            "An integrated view of price, demand, supply, transaction activity and investment potential.",
        segment: "Market segment",
        all: "All",
        residential: "Residential",
        commercial: "Commercial",
        land: "Land",
        load: "Analyze market",
        loading: "Analyzing market...",
        status: "Data status",
        price: "Price index",
        demand: "Demand",
        supply: "Supply",
        investment: "Investment score",
        activity: "Transaction activity",
        risk: "Risk",
        noResults:
            "No market data matches this filter.",
        foundation:
            "Foundation data — not a live market feed",
    },
    ar: {
        eyebrow: "MELKISM INTELLIGENCE",
        title: "ذكاء السوق العقاري",
        subtitle:
            "رؤية متكاملة للأسعار والطلب والعرض ونشاط المعاملات وإمكانات الاستثمار.",
        segment: "قطاع السوق",
        all: "الكل",
        residential: "سكني",
        commercial: "تجاري",
        land: "أراضٍ",
        load: "تحليل السوق",
        loading: "جارٍ تحليل السوق...",
        status: "حالة البيانات",
        price: "مؤشر السعر",
        demand: "الطلب",
        supply: "العرض",
        investment: "درجة الاستثمار",
        activity: "نشاط المعاملات",
        risk: "المخاطر",
        noResults:
            "لا توجد بيانات مطابقة.",
        foundation:
            "بيانات تأسيسية — ليست تغذية سوق مباشرة",
    },
    tr: {
        eyebrow: "MELKISM INTELLIGENCE",
        title: "Piyasa İstihbaratı",
        subtitle:
            "Fiyat, talep, arz, işlem aktivitesi ve yatırım potansiyeline ilişkin bütünleşik görünüm.",
        segment: "Piyasa segmenti",
        all: "Tümü",
        residential: "Konut",
        commercial: "Ticari",
        land: "Arsa",
        load: "Piyasayı analiz et",
        loading: "Piyasa analiz ediliyor...",
        status: "Veri durumu",
        price: "Fiyat endeksi",
        demand: "Talep",
        supply: "Arz",
        investment: "Yatırım skoru",
        activity: "İşlem aktivitesi",
        risk: "Risk",
        noResults:
            "Bu filtreyle eşleşen veri yok.",
        foundation:
            "Temel veri — canlı piyasa akışı değil",
    },
};

type Props = {
    locale: Locale;
};

function riskLabel(
    risk: Market["risk"],
    locale: Locale,
) {
    const labels: Record<
        Locale,
        Record<Market["risk"], string>
    > = {
        fa: {
            low: "پایین",
            moderate: "متوسط",
            high: "بالا",
        },
        en: {
            low: "Low",
            moderate: "Moderate",
            high: "High",
        },
        ar: {
            low: "منخفض",
            moderate: "متوسط",
            high: "مرتفع",
        },
        tr: {
            low: "Düşük",
            moderate: "Orta",
            high: "Yüksek",
        },
    };

    return labels[locale][risk];
}

export default function MarketIntelligencePanel({
    locale,
}: Props) {
    const copy = COPY[locale];

    const direction =
        locale === "fa" ||
        locale === "ar"
            ? "rtl"
            : "ltr";

    const [segment, setSegment] =
        useState("");

    const [data, setData] =
        useState<ResponseData | null>(
            null,
        );

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    async function loadMarkets(
        selectedSegment: string,
    ) {
        setLoading(true);
        setError("");

        try {
            const params =
                new URLSearchParams({
                    locale,
                    limit: "8",
                });

            if (selectedSegment) {
                params.set(
                    "segment",
                    selectedSegment,
                );
            }

            const response =
                await fetch(
                    `/api/market-intelligence?${params.toString()}`,
                    {
                        cache: "no-store",
                    },
                );

            if (!response.ok) {
                throw new Error(
                    "Market request failed.",
                );
            }

            const result =
                (await response.json()) as ResponseData;

            setData(result);
        } catch {
            setData(null);
            setError(
                "Unable to load market intelligence.",
            );
        } finally {
            setLoading(false);
        }
    }function handleSegmentChange(
        event: ChangeEvent<HTMLSelectElement>,
    ) {
        const next =
            event.target.value;

        setSegment(next);
        void loadMarkets(next);
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
                            maxWidth: 840,
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
                            "minmax(220px,360px) auto",
                        gap: 14,
                        alignItems: "end",
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
                                opacity: 0.65,
                            }}
                        >
                            {copy.segment}
                        </span>

                        <select
                            value={segment}
                            onChange={
                                handleSegmentChange
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
                            <option value="residential">
                                {copy.residential}
                            </option>
                            <option value="commercial">
                                {copy.commercial}
                            </option>
                            <option value="land">
                                {copy.land}
                            </option>
                        </select>
                    </label>

                    <div
                        style={{
                            minHeight: 46,
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <div
                            style={{
                                minHeight: 46,
                                display: "flex",
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "flex-start",
                                padding: "0 14px",
                                borderRadius: 12,
                                background: "#ffffff",
                                border: "1px solid #e4e7ec",
                                fontSize: 12,
                                opacity: 0.72,
                            }}
                        >
                            {copy.status}:{" "}
                            <strong
                                style={{
                                    marginInlineStart: 6,
                                }}
                            >
                                Foundation
                            </strong>
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                void loadMarkets(segment)
                            }
                            disabled={loading}
                            style={{
                                minHeight: 46,
                                border: 0,
                                borderRadius: 12,
                                padding: "0 16px",
                                background: "#111827",
                                color: "#ffffff",
                                fontSize: 13,
                                fontWeight: 700,
                                cursor:
                                    loading
                                        ? "wait"
                                        : "pointer",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {loading
                                ? copy.loading
                                : copy.load}
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div
                        style={{
                            background:
                                "#ffffff",
                            borderRadius:
                                18,
                            padding: 28,
                            border:
                                "1px solid #e4e7ec",
                        }}
                    >
                        {copy.loading}
                    </div>
                ) : null}

                {error ? (
                    <div
                        role="alert"
                        style={{
                            background:
                                "#ffffff",
                            borderRadius:
                                18,
                            padding: 22,
                            color:
                                "#a61b1b",
                            border:
                                "1px solid #f0c7c7",
                        }}
                    >
                        {error}
                    </div>
                ) : null}

                {!loading &&
                !error &&
                data &&
                data.markets.length ===
                    0 ? (
                    <div
                        style={{
                            background:
                                "#ffffff",
                            borderRadius:
                                18,
                            padding: 28,
                            border:
                                "1px solid #e4e7ec",
                        }}
                    >
                        {copy.noResults}
                    </div>
                ) : null}

                {!loading &&
                !error &&
                data &&
                data.markets.length > 0 ? (
                    <>
                        <div
                            style={{
                                display:
                                    "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit,minmax(260px,1fr))",
                                gap: 16,
                            }}
                        >
                            {data.markets.map(
                                (market) => (
                                    <article
                                        key={
                                            market.id
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
                                                    16,
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
                                                        market.segment
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
                                                        market.name
                                                    }
                                                </h2>
                                            </div>

                                            <span
                                                style={{
                                                    fontSize:
                                                        12,
                                                    fontWeight:
                                                        700,
                                                    opacity:
                                                        0.65,
                                                }}
                                            >
                                                {riskLabel(
                                                    market.risk,
                                                    locale,
                                                )}
                                            </span>
                                        </div>

                                        <div
                                            style={{
                                                display:
                                                    "grid",
                                                gridTemplateColumns:
                                                    "repeat(2,1fr)",
                                                gap: 9,
                                            }}
                                        >
                                            {[
                                                [
                                                    copy.price,
                                                    market.priceIndex,
                                                ],
                                                [
                                                    copy.demand,
                                                    market.demandIndex,
                                                ],
                                                [
                                                    copy.supply,
                                                    market.supplyIndex,
                                                ],
                                                [
                                                    copy.investment,
                                                    market.investmentScore,
                                                ],
                                                [
                                                    copy.activity,
                                                    market.transactionActivity,
                                                ],
                                            ].map(
                                                (
                                                    pair,
                                                ) => (
                                                    <div
                                                        key={
                                                            pair[0]
                                                        }
                                                        style={{
                                                            border:
                                                                "1px solid #edf0f3",
                                                            borderRadius:
                                                                12,
                                                            padding:
                                                                12,
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                fontSize:
                                                                    11,
                                                                opacity:
                                                                    0.58,
                                                                marginBottom:
                                                                    5,
                                                            }}
                                                        >
                                                            {
                                                                pair[0]
                                                            }
                                                        </div>

                                                        <strong
                                                            style={{
                                                                fontSize:
                                                                    21,
                                                            }}
                                                        >
                                                            {
                                                                pair[1]
                                                            }
                                                        </strong>
                                                    </div>
                                                ),
                                            )}
                                        </div>

                                        <div
                                            style={{
                                                marginTop:
                                                    14,
                                                fontSize:
                                                    13,
                                                opacity:
                                                    0.66,
                                            }}
                                        >
                                            {copy.status}:{" "}
                                            {copy.foundation}
                                        </div>
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
                    </>
                ) : null}
            </section>
        </main>
    );
}

