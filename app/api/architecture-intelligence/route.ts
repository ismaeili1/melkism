import { NextResponse } from "next/server";

import {
    getArchitectureDomains,
    getArchitectureLevels,
    queryArchitectureIntelligence,
    type ArchitectureDomain,
    type ArchitectureLocale,
    type ArchitectureQuery,
    type IntelligenceLevel,
} from "@/lib/architecture-intelligence-platform";

const LOCALES: ArchitectureLocale[] = [
    "fa",
    "en",
    "ar",
    "tr",
];

function isLocale(
    value: unknown,
): value is ArchitectureLocale {
    return (
        typeof value === "string" &&
        LOCALES.includes(
            value as ArchitectureLocale,
        )
    );
}

function isDomain(
    value: unknown,
): value is ArchitectureDomain {
    return (
        typeof value === "string" &&
        getArchitectureDomains().includes(
            value as ArchitectureDomain,
        )
    );
}

function isLevel(
    value: unknown,
): value is IntelligenceLevel {
    return (
        typeof value === "string" &&
        getArchitectureLevels().includes(
            value as IntelligenceLevel,
        )
    );
}

function normalizeLimit(
    value: string | null,
): number {
    const numeric =
        Number(value ?? "8");

    if (
        !Number.isFinite(numeric)
    ) {
        return 8;
    }

    return Math.min(
        Math.max(
            Math.trunc(numeric),
            1,
        ),
        20,
    );
}

export async function GET(
    request: Request,
) {
    const { searchParams } =
        new URL(request.url);

    const localeParam =
        searchParams.get("locale") ??
        "en";

    const domainParam =
        searchParams.get("domain");

    const levelParam =
        searchParams.get("level");

    const locale =
        isLocale(localeParam)
            ? localeParam
            : "en";

    const domain =
        isDomain(domainParam)
            ? domainParam
            : undefined;

    const level =
        isLevel(levelParam)
            ? levelParam
            : undefined;

    const query: ArchitectureQuery = {
        locale,
        domain,
        level,
        limit: normalizeLimit(
            searchParams.get(
                "limit",
            ),
        ),
    };

    const result =
        queryArchitectureIntelligence(
            query,
        );

    return NextResponse.json(
        result,
        {
            status: 200,
            headers: {
                "Cache-Control":
                    "public, max-age=60, stale-while-revalidate=300",
            },
        },
    );
}
