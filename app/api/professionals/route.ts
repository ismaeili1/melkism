import { NextResponse } from "next/server";

import {
    getProfessionalAvailabilities,
    getProfessionalDomains,
    getProfessionalRoles,
    getProfessionalVerifications,
    queryProfessionals,
    type ProfessionalAvailability,
    type ProfessionalDomain,
    type ProfessionalLocale,
    type ProfessionalQuery,
    type ProfessionalRole,
    type ProfessionalVerification,
} from "@/lib/professional-platform";

const LOCALES: ProfessionalLocale[] = [
    "fa",
    "en",
    "ar",
    "tr",
];

function isLocale(
    value: unknown,
): value is ProfessionalLocale {
    return (
        typeof value === "string" &&
        LOCALES.includes(
            value as ProfessionalLocale,
        )
    );
}

function isRole(
    value: unknown,
): value is ProfessionalRole {
    return (
        typeof value === "string" &&
        getProfessionalRoles().includes(
            value as ProfessionalRole,
        )
    );
}

function isDomain(
    value: unknown,
): value is ProfessionalDomain {
    return (
        typeof value === "string" &&
        getProfessionalDomains().includes(
            value as ProfessionalDomain,
        )
    );
}

function isAvailability(
    value: unknown,
): value is ProfessionalAvailability {
    return (
        typeof value === "string" &&
        getProfessionalAvailabilities().includes(
            value as ProfessionalAvailability,
        )
    );
}

function isVerification(
    value: unknown,
): value is ProfessionalVerification {
    return (
        typeof value === "string" &&
        getProfessionalVerifications().includes(
            value as ProfessionalVerification,
        )
    );
}

function normalizeLimit(
    value: string | null,
): number {
    const numeric =
        Number(value ?? "12");

    if (!Number.isFinite(numeric)) {
        return 12;
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

    const roleParam =
        searchParams.get("role");

    const domainParam =
        searchParams.get("domain");

    const availabilityParam =
        searchParams.get(
            "availability",
        );

    const verificationParam =
        searchParams.get(
            "verification",
        );

    const locale =
        isLocale(localeParam)
            ? localeParam
            : "en";

    const role =
        isRole(roleParam)
            ? roleParam
            : undefined;

    const domain =
        isDomain(domainParam)
            ? domainParam
            : undefined;

    const availability =
        isAvailability(
            availabilityParam,
        )
            ? availabilityParam
            : undefined;

    const verification =
        isVerification(
            verificationParam,
        )
            ? verificationParam
            : undefined;

    const query: ProfessionalQuery = {
        locale,
        role,
        domain,
        availability,
        verification,
        limit:
            normalizeLimit(
                searchParams.get(
                    "limit",
                ),
            ),
    };

    const result =
        queryProfessionals(query);

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
