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

type Professional = {
    id: string;
    name: string;
    role: string;
    verification:
        | "unverified"
        | "pending"
        | "verified"
        | "trusted";
    availability:
        | "available"
        | "limited"
        | "unavailable";
    headline: string;
    biography: string;
    location?: string;
    domains: string[];
    expertise: Array<{
        id: string;
        title: string;
        domain: string;
        level:
            | "basic"
            | "advanced"
            | "expert";
    }>;
    services: Array<{
        id: string;
        title: string;
        domain: string;
        description: string;
    }>;
    projects: Array<{
        id: string;
        title: string;
        domain: string;
        role: string;
        year?: number;
        location?: string;
        description?: string;
    }>;
    intelligenceScore: number;
};

type ResponseData = {
    locale: Locale;
    generatedAt: string;
    dataStatus: "foundation";
    professionals: Professional[];
    total: number;
};

const COPY: Record<
    Locale,
    {
        eyebrow: string;
        title: string;
        subtitle: string;
        role: string;
        domain: string;
        availability: string;
        verification: string;
        all: string;
        architect: string;
        consultant: string;
        designer: string;
        urbanist: string;
        researcher: string;
        analyst: string;
        realEstate: string;
        architecture: string;
        urban: string;
        realEstateDomain: string;
        sustainability: string;
        research: string;
        investment: string;
        data: string;
        bim: string;
        available: string;
        limited: string;
        verified: string;
        trusted: string;
        unverified: string;
        pending: string;
        discover: string;
        loading: string;
        noResults: string;
        score: string;
        services: string;
        projects: string;
        expertise: string;
        foundation: string;
    }
> = {
    fa: {
        eyebrow:
            "MELKISM PROFESSIONAL",
        title:
            "شبکه متخصصان ملکیسم",
        subtitle:
            "معماران، مشاوران، پژوهشگران، تحلیلگران و متخصصان محیط ساخته‌شده را بر اساس تخصص و حوزه فعالیت کشف کنید.",
        role: "نقش حرفه‌ای",
        domain: "حوزه تخصص",
        availability: "دسترسی",
        verification: "اعتبارسنجی",
        all: "همه",
        architect: "معمار",
        consultant: "مشاور",
        designer: "طراح",
        urbanist: "متخصص شهر",
        researcher: "پژوهشگر",
        analyst: "تحلیلگر",
        realEstate: "متخصص املاک",
        architecture: "معماری",
        urban: "شهر",
        realEstateDomain: "املاک",
        sustainability: "پایداری",
        research: "پژوهش",
        investment: "سرمایه‌گذاری",
        data: "داده",
        bim: "BIM",
        available: "در دسترس",
        limited: "محدود",
        verified: "تأییدشده",
        trusted: "مورداعتماد",
        unverified: "تأییدنشده",
        pending: "در انتظار",
        discover: "کشف متخصصان",
        loading:
            "در حال جستجوی متخصصان...",
        noResults:
            "متخصصی مطابق فیلترها پیدا نشد.",
        score: "امتیاز هوش حرفه‌ای",
        services: "خدمات",
        projects: "پروژه‌ها",
        expertise: "تخصص‌ها",
        foundation:
            "داده Foundation — شبکه حرفه‌ای زنده هنوز متصل نشده است.",
    },

    en: {
        eyebrow:
            "MELKISM PROFESSIONAL",
        title:
            "MELKISM Professional Network",
        subtitle:
            "Discover architects, consultants, researchers, analysts and built-environment specialists by expertise and domain.",
        role: "Professional role",
        domain: "Expertise domain",
        availability: "Availability",
        verification: "Verification",
        all: "All",
        architect: "Architect",
        consultant: "Consultant",
        designer: "Designer",
        urbanist: "Urbanist",
        researcher: "Researcher",
        analyst: "Analyst",
        realEstate:
            "Real Estate Specialist",
        architecture: "Architecture",
        urban: "Urban",
        realEstateDomain:
            "Real Estate",
        sustainability:
            "Sustainability",
        research: "Research",
        investment: "Investment",
        data: "Data",
        bim: "BIM",
        available: "Available",
        limited: "Limited",
        verified: "Verified",
        trusted: "Trusted",
        unverified: "Unverified",
        pending: "Pending",
        discover:
            "Discover professionals",
        loading:
            "Searching professionals...",
        noResults:
            "No professionals match these filters.",
        score: "Professional intelligence",
        services: "Services",
        projects: "Projects",
        expertise: "Expertise",
        foundation:
            "Foundation data — live professional network is not connected yet.",
    },

    ar: {
        eyebrow:
            "MELKISM PROFESSIONAL",
        title:
            "شبكة متخصصي ملکیسم",
        subtitle:
            "اكتشف المعماريين والاستشاريين والباحثين والمحللين والمتخصصين في البيئة المبنية حسب الخبرة والمجال.",
        role: "الدور المهني",
        domain: "مجال الخبرة",
        availability: "التوفر",
        verification: "التحقق",
        all: "الكل",
        architect: "معماري",
        consultant: "استشاري",
        designer: "مصمم",
        urbanist: "مخطط حضري",
        researcher: "باحث",
        analyst: "محلل",
        realEstate:
            "متخصص عقارات",
        architecture: "العمارة",
        urban: "حضري",
        realEstateDomain:
            "العقارات",
        sustainability: "الاستدامة",
        research: "البحث",
        investment: "الاستثمار",
        data: "البيانات",
        bim: "BIM",
        available: "متاح",
        limited: "محدود",
        verified: "موثق",
        trusted: "موثوق",
        unverified:
            "غير موثق",
        pending: "قيد الانتظار",
        discover:
            "اكتشاف المتخصصين",
        loading:
            "جارٍ البحث عن المتخصصين...",
        noResults:
            "لا توجد نتائج مطابقة.",
        score: "الذكاء المهني",
        services: "الخدمات",
        projects: "المشاريع",
        expertise: "الخبرات",
        foundation:
            "بيانات تأسيسية — لم يتم بعد ربط شبكة مهنية حية.",
    },

    tr: {
        eyebrow:
            "MELKISM PROFESSIONAL",
        title:
            "MELKISM Profesyonel Ağı",
        subtitle:
            "Mimarları, danışmanları, araştırmacıları, analistleri ve yapılı çevre uzmanlarını uzmanlık alanlarına göre keşfedin.",
        role: "Profesyonel rol",
        domain: "Uzmanlık alanı",
        availability: "Uygunluk",
        verification: "Doğrulama",
        all: "Tümü",
        architect: "Mimar",
        consultant: "Danışman",
        designer: "Tasarımcı",
        urbanist:
            "Şehir Plancısı",
        researcher:
            "Araştırmacı",
        analyst: "Analist",
        realEstate:
            "Gayrimenkul Uzmanı",
        architecture: "Mimarlık",
        urban: "Kentsel",
        realEstateDomain:
            "Gayrimenkul",
        sustainability:
            "Sürdürülebilirlik",
        research:
            "Araştırma",
        investment:
            "Yatırım",
        data: "Veri",
        bim: "BIM",
        available: "Uygun",
        limited: "Sınırlı",
        verified:
            "Doğrulanmış",
        trusted: "Güvenilir",
        unverified:
            "Doğrulanmamış",
        pending: "Beklemede",
        discover:
            "Profesyonelleri keşfet",
        loading:
            "Profesyoneller aranıyor...",
        noResults:
            "Bu filtrelerle eşleşen profesyonel yok.",
        score:
            "Profesyonel zekâ",
        services: "Hizmetler",
        projects: "Projeler",
        expertise: "Uzmanlık",
        foundation:
            "Temel veri — canlı profesyonel ağ henüz bağlı değil.",
    },
};

type Props = {
    locale: Locale;
};

function verificationText(
    value: Professional["verification"],
    copy: typeof COPY.en,
): string {
    switch (value) {
        case "verified":
            return copy.verified;

        case "trusted":
            return copy.trusted;

        case "pending":
            return copy.pending;

        default:
            return copy.unverified;
    }
}

export default function ProfessionalDiscovery({
    locale,
}: Props) {
    const copy = COPY[locale];

    const direction =
        locale === "fa" ||
        locale === "ar"
            ? "rtl"
            : "ltr";

    const [role, setRole] =
        useState("");

    const [domain, setDomain] =
        useState("");

    const [availability, setAvailability] =
        useState("");

    const [verification, setVerification] =
        useState("");

    const [data, setData] =
        useState<ResponseData | null>(
            null,
        );

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    async function discover(
        selectedRole = role,
        selectedDomain = domain,
        selectedAvailability =
            availability,
        selectedVerification =
            verification,
    ) {
        setLoading(true);
        setError("");

        try {
            const params =
                new URLSearchParams({
                    locale,
                    limit: "20",
                });

            if (selectedRole) {
                params.set(
                    "role",
                    selectedRole,
                );
            }

            if (selectedDomain) {
                params.set(
                    "domain",
                    selectedDomain,
                );
            }

            if (selectedAvailability) {
                params.set(
                    "availability",
                    selectedAvailability,
                );
            }

            if (selectedVerification) {
                params.set(
                    "verification",
                    selectedVerification,
                );
            }

            const response =
                await fetch(
                    `/api/professionals?${params.toString()}`,
                    {
                        cache:
                            "no-store",
                    },
                );

            if (!response.ok) {
                throw new Error(
                    "Professional request failed.",
                );
            }

            const result =
                (await response.json()) as ResponseData;

            setData(result);
        } catch {
            setData(null);
            setError(
                "Unable to load professionals.",
            );
        } finally {
            setLoading(false);
        }
    }

    function handleRole(
        event: ChangeEvent<HTMLSelectElement>,
    ) {
        const next =
            event.target.value;

        setRole(next);

        void discover(
            next,
            domain,
            availability,
            verification,
        );
    }

    function handleDomain(
        event: ChangeEvent<HTMLSelectElement>,
    ) {
        const next =
            event.target.value;

        setDomain(next);

        void discover(
            role,
            next,
            availability,
            verification,
        );
    }

    function handleAvailability(
        event: ChangeEvent<HTMLSelectElement>,
    ) {
        const next =
            event.target.value;

        setAvailability(next);

        void discover(
            role,
            domain,
            next,
            verification,
        );
    }

    function handleVerification(
        event: ChangeEvent<HTMLSelectElement>,
    ) {
        const next =
            event.target.value;

        setVerification(next);

        void discover(
            role,
            domain,
            availability,
            next,
        );
    }

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
                    width: "100%",
                    maxWidth: 1200,
                    margin: "0 auto",
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
                            fontSize: 13,
                            fontWeight: 700,
                            letterSpacing: 0.6,
                            opacity: 0.6,
                            marginBottom: 10,
                        }}
                    >
                        {
                            copy.eyebrow
                        }
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
                        {
                            copy.title
                        }
                    </h1>

                    <p
                        style={{
                            maxWidth:
                                860,
                            fontSize: 18,
                            lineHeight: 1.7,
                            opacity: 0.76,
                            marginTop: 18,
                        }}
                    >
                        {
                            copy.subtitle
                        }
                    </p>
                </header>

                <div
                    style={{
                        display:
                            "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit,minmax(210px,1fr))",
                        gap: 12,
                        marginBottom:
                            24,
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
                                fontSize:
                                    12,
                                fontWeight:
                                    700,
                                opacity:
                                    0.62,
                            }}
                        >
                            {
                                copy.role
                            }
                        </span>

                        <select
                            value={role}
                            onChange={
                                handleRole
                            }
                            style={{
                                minHeight:
                                    46,
                                border:
                                    "1px solid #d8dce3",
                                borderRadius:
                                    12,
                                padding:
                                    "0 13px",
                                background:
                                    "#ffffff",
                            }}
                        >
                            <option value="">
                                {
                                    copy.all
                                }
                            </option>

                            <option value="architect">
                                {
                                    copy.architect
                                }
                            </option>

                            <option value="consultant">
                                {
                                    copy.consultant
                                }
                            </option>

                            <option value="designer">
                                {
                                    copy.designer
                                }
                            </option>

                            <option value="urbanist">
                                {
                                    copy.urbanist
                                }
                            </option>

                            <option value="researcher">
                                {
                                    copy.researcher
                                }
                            </option>

                            <option value="analyst">
                                {
                                    copy.analyst
                                }
                            </option>

                            <option value="real-estate-specialist">
                                {
                                    copy.realEstate
                                }
                            </option>
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
                                fontSize:
                                    12,
                                fontWeight:
                                    700,
                                opacity:
                                    0.62,
                            }}
                        >
                            {
                                copy.domain
                            }
                        </span>

                        <select
                            value={domain}
                            onChange={
                                handleDomain
                            }
                            style={{
                                minHeight:
                                    46,
                                border:
                                    "1px solid #d8dce3",
                                borderRadius:
                                    12,
                                padding:
                                    "0 13px",
                                background:
                                    "#ffffff",
                            }}
                        >
                            <option value="">
                                {
                                    copy.all
                                }
                            </option>

                            <option value="architecture">
                                {
                                    copy.architecture
                                }
                            </option>

                            <option value="urban">
                                {
                                    copy.urban
                                }
                            </option>

                            <option value="real-estate">
                                {
                                    copy.realEstateDomain
                                }
                            </option>

                            <option value="sustainability">
                                {
                                    copy.sustainability
                                }
                            </option>

                            <option value="research">
                                {
                                    copy.research
                                }
                            </option>

                            <option value="investment">
                                {
                                    copy.investment
                                }
                            </option>

                            <option value="data">
                                {
                                    copy.data
                                }
                            </option>

                            <option value="bim">
                                {
                                    copy.bim
                                }
                            </option>
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
                                fontSize:
                                    12,
                                fontWeight:
                                    700,
                                opacity:
                                    0.62,
                            }}
                        >
                            {
                                copy.availability
                            }
                        </span>

                        <select
                            value={
                                availability
                            }
                            onChange={
                                handleAvailability
                            }
                            style={{
                                minHeight:
                                    46,
                                border:
                                    "1px solid #d8dce3",
                                borderRadius:
                                    12,
                                padding:
                                    "0 13px",
                                background:
                                    "#ffffff",
                            }}
                        >
                            <option value="">
                                {
                                    copy.all
                                }
                            </option>

                            <option value="available">
                                {
                                    copy.available
                                }
                            </option>

                            <option value="limited">
                                {
                                    copy.limited
                                }
                            </option>
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
                                fontSize:
                                    12,
                                fontWeight:
                                    700,
                                opacity:
                                    0.62,
                            }}
                        >
                            {
                                copy.verification
                            }
                        </span>

                        <select
                            value={
                                verification
                            }
                            onChange={
                                handleVerification
                            }
                            style={{
                                minHeight:
                                    46,
                                border:
                                    "1px solid #d8dce3",
                                borderRadius:
                                    12,
                                padding:
                                    "0 13px",
                                background:
                                    "#ffffff",
                            }}
                        >
                            <option value="">
                                {
                                    copy.all
                                }
                            </option>

                            <option value="verified">
                                {
                                    copy.verified
                                }
                            </option>

                            <option value="trusted">
                                {
                                    copy.trusted
                                }
                            </option>

                            <option value="pending">
                                {
                                    copy.pending
                                }
                            </option>

                            <option value="unverified">
                                {
                                    copy.unverified
                                }
                            </option>
                        </select>
                    </label>

                    <button
                        type="button"
                        onClick={() =>
                            void discover()
                        }
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
                            fontWeight:
                                700,
                            cursor:
                                loading
                                    ? "wait"
                                    : "pointer",
                        }}
                    >
                        {
                            loading
                                ? copy.loading
                                : copy.discover
                        }
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

                {data &&
                data.professionals.length >
                    0 ? (
                    <div
                        style={{
                            display:
                                "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit,minmax(300px,1fr))",
                            gap:
                                16,
                        }}
                    >
                        {data.professionals.map(
                            (
                                professional,
                            ) => (
                                <article
                                    key={
                                        professional.id
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
                                            justifyContent:
                                                "space-between",
                                            alignItems:
                                                "flex-start",
                                            gap:
                                                14,
                                            marginBottom:
                                                14,
                                        }}
                                    >
                                        <div>
                                            <div
                                                style={{
                                                    fontSize:
                                                        11,
                                                    fontWeight:
                                                        700,
                                                    textTransform:
                                                        "uppercase",
                                                    opacity:
                                                        0.5,
                                                    marginBottom:
                                                        7,
                                                }}
                                            >
                                                {
                                                    professional.role
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
                                                    professional.name
                                                }
                                            </h2>
                                        </div>

                                        <strong
                                            style={{
                                                fontSize:
                                                    24,
                                            }}
                                        >
                                            {
                                                professional.intelligenceScore
                                            }
                                        </strong>
                                    </div>

                                    <p
                                        style={{
                                            margin:
                                                "0 0 14px",
                                            fontWeight:
                                                600,
                                        }}
                                    >
                                        {
                                            professional.headline
                                        }
                                    </p>

                                    <p
                                        style={{
                                            margin:
                                                "0 0 16px",
                                            lineHeight:
                                                1.65,
                                            opacity:
                                                0.7,
                                        }}
                                    >
                                        {
                                            professional.biography
                                        }
                                    </p>

                                    <div
                                        style={{
                                            display:
                                                "flex",
                                            flexWrap:
                                                "wrap",
                                            gap:
                                                7,
                                            marginBottom:
                                                16,
                                        }}
                                    >
                                        <span
                                            style={{
                                                border:
                                                    "1px solid #e1e5ea",
                                                borderRadius:
                                                    999,
                                                padding:
                                                    "5px 9px",
                                                fontSize:
                                                    11,
                                            }}
                                        >
                                            {
                                                verificationText(
                                                    professional.verification,
                                                    copy,
                                                )
                                            }
                                        </span>

                                        <span
                                            style={{
                                                border:
                                                    "1px solid #e1e5ea",
                                                borderRadius:
                                                    999,
                                                padding:
                                                    "5px 9px",
                                                fontSize:
                                                    11,
                                            }}
                                        >
                                            {
                                                professional.availability ===
                                                "available"
                                                    ? copy.available
                                                    : professional.availability ===
                                                        "limited"
                                                      ? copy.limited
                                                      : copy.unverified
                                            }
                                        </span>
                                    </div>

                                    <div
                                        style={{
                                            fontSize:
                                                12,
                                            fontWeight:
                                                700,
                                            opacity:
                                                0.62,
                                            marginBottom:
                                                8,
                                        }}
                                    >
                                        {
                                            copy.expertise
                                        }
                                    </div>

                                    <div
                                        style={{
                                            display:
                                                "flex",
                                            flexWrap:
                                                "wrap",
                                            gap:
                                                6,
                                            marginBottom:
                                                16,
                                        }}
                                    >
                                        {professional.expertise.map(
                                            (
                                                item,
                                            ) => (
                                                <span
                                                    key={
                                                        item.id
                                                    }
                                                    style={{
                                                        border:
                                                            "1px solid #edf0f3",
                                                        borderRadius:
                                                            999,
                                                        padding:
                                                            "5px 9px",
                                                        fontSize:
                                                            11,
                                                    }}
                                                >
                                                    {
                                                        item.title
                                                    }
                                                </span>
                                            ),
                                        )}
                                    </div>

                                    <div
                                        style={{
                                            fontSize:
                                                12,
                                            fontWeight:
                                                700,
                                            opacity:
                                                0.62,
                                            marginBottom:
                                                8,
                                        }}
                                    >
                                        {
                                            copy.services
                                        }
                                    </div>

                                    <div
                                        style={{
                                            display:
                                                "grid",
                                            gap:
                                                8,
                                            marginBottom:
                                                16,
                                        }}
                                    >
                                        {professional.services
                                            .slice(
                                                0,
                                                3,
                                            )
                                            .map(
                                                (
                                                    service,
                                                ) => (
                                                    <div
                                                        key={
                                                            service.id
                                                        }
                                                        style={{
                                                            border:
                                                                "1px solid #edf0f3",
                                                            borderRadius:
                                                                10,
                                                            padding:
                                                                "9px 11px",
                                                            fontSize:
                                                                12,
                                                        }}
                                                    >
                                                        {
                                                            service.title
                                                        }
                                                    </div>
                                                ),
                                            )}
                                    </div>

                                    <div
                                        style={{
                                            fontSize:
                                                12,
                                            fontWeight:
                                                700,
                                            opacity:
                                                0.62,
                                            marginBottom:
                                                8,
                                        }}
                                    >
                                        {
                                            copy.projects
                                        }
                                    </div>

                                    {professional.projects
                                        .slice(
                                            0,
                                            2,
                                        )
                                        .map(
                                            (
                                                project,
                                            ) => (
                                                <div
                                                    key={
                                                        project.id
                                                    }
                                                    style={{
                                                        fontSize:
                                                            12,
                                                        lineHeight:
                                                            1.55,
                                                        marginBottom:
                                                            6,
                                                    }}
                                                >
                                                    {
                                                        project.title
                                                    }
                                                </div>
                                            ),
                                        )}

                                    <div
                                        style={{
                                            marginTop:
                                                16,
                                            fontSize:
                                                12,
                                            opacity:
                                                0.52,
                                        }}
                                    >
                                        {
                                            copy.score
                                        }
                                        :{" "}
                                        {
                                            professional.intelligenceScore
                                        }
                                    </div>
                                </article>
                            ),
                        )}
                    </div>
                ) : null}

                {data &&
                data.professionals.length ===
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
                        {
                            copy.noResults
                        }
                    </div>
                ) : null}

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
                        copy.foundation
                    }
                </div>
            </section>
        </main>
    );
}
