"use client";

import {
    useEffect,
    useState,
} from "react";

type Locale =
    | "fa"
    | "en"
    | "ar"
    | "tr";

type Feature = {
    id: string;
    title: string;
    description: string;
    domain: string;
    href: string;
    priority: number;
};

type ExperienceData = {
    locale: Locale;
    tagline: string;
    features: Feature[];
    preferences: {
        interests: string[];
        preferredDomains: string[];
        preferredSurfaces: string[];
    };
};

type ApiResponse = {
    locale: Locale;
    generatedAt: string;
    dataStatus: "platform";
    home: ExperienceData;
};

const COPY: Record<
    Locale,
    {
        eyebrow: string;
        title: string;
        subtitle: string;
        explore: string;
        loading: string;
        error: string;
        platform: string;
        domains: Record<
            string,
            string
        >;
    }
> = {
    fa: {
        eyebrow:
            "MELKISM EXPERIENCE",
        title:
            "مرکز تجربهٔ ملکیسم",
        subtitle:
            "همهٔ قابلیت‌های اصلی ملکیسم را از یک تجربهٔ یکپارچه کشف و استفاده کنید.",
        explore: "ورود",
        loading:
            "در حال آماده‌سازی تجربه...",
        error:
            "بارگذاری تجربه انجام نشد.",
        platform: "پلتفرم تجربه",
        domains: {
            search: "جستجو",
            recommendations:
                "پیشنهادها",
            market: "بازار",
            architecture:
                "معماری",
            property: "املاک",
            research:
                "پژوهش",
            news: "اخبار",
            data: "داده",
        },
    },

    en: {
        eyebrow:
            "MELKISM EXPERIENCE",
        title:
            "MELKISM Experience Hub",
        subtitle:
            "Discover and use MELKISM's core capabilities through one unified experience.",
        explore: "Open",
        loading:
            "Preparing your experience...",
        error:
            "Unable to load the experience.",
        platform:
            "Experience Platform",
        domains: {
            search: "Search",
            recommendations:
                "Recommendations",
            market: "Market",
            architecture:
                "Architecture",
            property: "Property",
            research:
                "Research",
            news: "News",
            data: "Data",
        },
    },

    ar: {
        eyebrow:
            "MELKISM EXPERIENCE",
        title:
            "مركز تجربة ملکیسم",
        subtitle:
            "اكتشف واستخدم القدرات الأساسية لمنصة ملکیسم من خلال تجربة موحدة.",
        explore: "فتح",
        loading:
            "جارٍ إعداد التجربة...",
        error:
            "تعذر تحميل التجربة.",
        platform:
            "منصة التجربة",
        domains: {
            search: "بحث",
            recommendations:
                "التوصيات",
            market: "السوق",
            architecture:
                "العمارة",
            property:
                "العقارات",
            research:
                "البحث",
            news: "الأخبار",
            data: "البيانات",
        },
    },

    tr: {
        eyebrow:
            "MELKISM EXPERIENCE",
        title:
            "MELKISM Deneyim Merkezi",
        subtitle:
            "MELKISM'in temel yeteneklerini tek ve bütünleşik bir deneyim üzerinden keşfedin.",
        explore: "Aç",
        loading:
            "Deneyim hazırlanıyor...",
        error:
            "Deneyim yüklenemedi.",
        platform:
            "Deneyim Platformu",
        domains: {
            search: "Arama",
            recommendations:
                "Öneriler",
            market: "Piyasa",
            architecture:
                "Mimarlık",
            property:
                "Gayrimenkul",
            research:
                "Araştırma",
            news: "Haberler",
            data: "Veri",
        },
    },
};

type Props = {
    locale: Locale;
};

export default function ExperienceHub({
    locale,
}: Props) {
    const copy = COPY[locale];

    const direction =
        locale === "fa" ||
        locale === "ar"
            ? "rtl"
            : "ltr";

    const [data, setData] =
        useState<ApiResponse | null>(
            null,
        );

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {
        let active = true;

        async function load() {
            try {
                const response =
                    await fetch(
                        `/api/experience?locale=${locale}`,
                        {
                            cache:
                                "no-store",
                        },
                    );

                if (!response.ok) {
                    throw new Error(
                        "Experience request failed.",
                    );
                }

                const result =
                    (await response.json()) as ApiResponse;

                if (active) {
                    setData(result);
                }
            } catch {
                if (active) {
                    setError(
                        copy.error,
                    );
                }
            } finally {
                if (active) {
                    setLoading(
                        false,
                    );
                }
            }
        }

        void load();

        return () => {
            active = false;
        };
    }, [locale, copy.error]);

    return (
        <main
            dir={direction}
            style={{
                minHeight:
                    "100vh",
                background:
                    "#f7f8fa",
                padding:
                    "48px 20px 80px",
            }}
        >
            <section
                style={{
                    width:
                        "100%",
                    maxWidth:
                        1180,
                    margin:
                        "0 auto",
                }}
            >
                <header
                    style={{
                        marginBottom:
                            30,
                    }}
                >
                    <div
                        style={{
                            fontSize:
                                13,
                            fontWeight:
                                700,
                            letterSpacing:
                                0.6,
                            opacity:
                                0.6,
                            marginBottom:
                                10,
                        }}
                    >
                        {
                            copy.eyebrow
                        }
                    </div>

                    <h1
                        style={{
                            margin:
                                0,
                            fontSize:
                                "clamp(36px,5vw,62px)",
                            lineHeight:
                                1.04,
                            fontWeight:
                                800,
                        }}
                    >
                        {
                            copy.title
                        }
                    </h1>

                    <p
                        style={{
                            maxWidth:
                                820,
                            fontSize:
                                19,
                            lineHeight:
                                1.7,
                            opacity:
                                0.76,
                            marginTop:
                                18,
                        }}
                    >
                        {
                            copy.subtitle
                        }
                    </p>
                </header>

                {loading ? (
                    <div
                        style={{
                            background:
                                "#ffffff",
                            borderRadius:
                                20,
                            border:
                                "1px solid #e4e7ec",
                            padding:
                                30,
                        }}
                    >
                        {
                            copy.loading
                        }
                    </div>
                ) : null}

                {error ? (
                    <div
                        role="alert"
                        style={{
                            background:
                                "#ffffff",
                            borderRadius:
                                20,
                            border:
                                "1px solid #f0c7c7",
                            padding:
                                24,
                            color:
                                "#a61b1b",
                        }}
                    >
                        {
                            error
                        }
                    </div>
                ) : null}

                {!loading &&
                !error &&
                data ? (
                    <>
                        <div
                            style={{
                                display:
                                    "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit,minmax(260px,1fr))",
                                gap:
                                    16,
                            }}
                        >
                            {data.home.features.map(
                                (
                                    feature,
                                ) => (
                                    <article
                                        key={
                                            feature.id
                                        }
                                        style={{
                                            background:
                                                "#ffffff",
                                            borderRadius:
                                                20,
                                            border:
                                                "1px solid #e4e7ec",
                                            padding:
                                                24,
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize:
                                                    11,
                                                fontWeight:
                                                    700,
                                                letterSpacing:
                                                    0.4,
                                                textTransform:
                                                    "uppercase",
                                                opacity:
                                                    0.52,
                                                marginBottom:
                                                    10,
                                            }}
                                        >
                                            {
                                                copy
                                                    .domains[
                                                    feature
                                                        .domain
                                                ] ??
                                                feature
                                                    .domain
                                            }
                                        </div>

                                        <h2
                                            style={{
                                                margin:
                                                    0,
                                                fontSize:
                                                    22,
                                                lineHeight:
                                                    1.2,
                                            }}
                                        >
                                            {
                                                feature.title
                                            }
                                        </h2>

                                        <p
                                            style={{
                                                margin:
                                                    "10px 0 20px",
                                                lineHeight:
                                                    1.65,
                                                opacity:
                                                    0.7,
                                            }}
                                        >
                                            {
                                                feature.description
                                            }
                                        </p>

                                        <a
                                            href={
                                                `/${locale}${feature.href}`
                                            }
                                            style={{
                                                display:
                                                    "inline-flex",
                                                alignItems:
                                                    "center",
                                                minHeight:
                                                    42,
                                                padding:
                                                    "0 15px",
                                                borderRadius:
                                                    11,
                                                background:
                                                    "#111827",
                                                color:
                                                    "#ffffff",
                                                textDecoration:
                                                    "none",
                                                fontSize:
                                                    13,
                                                fontWeight:
                                                    700,
                                            }}
                                        >
                                            {
                                                copy.explore
                                            }
                                        </a>
                                    </article>
                                ),
                            )}
                        </div>

                        <div
                            style={{
                                marginTop:
                                    24,
                                fontSize:
                                    12,
                                opacity:
                                    0.5,
                            }}
                        >
                            {
                                copy.platform
                            }{" "}
                            ·{" "}
                            {
                                data
                                    .generatedAt
                            }
                        </div>
                    </>
                ) : null}
            </section>
        </main>
    );
}

