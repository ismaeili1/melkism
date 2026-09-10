import { NextResponse } from "next/server";

import {
    getExperience,
    type ExperienceLocale,
} from "@/lib/user-experience-platform";

const LOCALES: ExperienceLocale[] = [
    "fa",
    "en",
    "ar",
    "tr",
];

function isLocale(
    value: unknown,
): value is ExperienceLocale {
    return (
        typeof value === "string" &&
        LOCALES.includes(
            value as ExperienceLocale,
        )
    );
}

export async function GET(
    request: Request,
) {
    const { searchParams } =
        new URL(request.url);

    const localeParam =
        searchParams.get(
            "locale",
        ) ?? "en";

    const locale =
        isLocale(localeParam)
            ? localeParam
            : "en";

    return NextResponse.json(
        getExperience(locale),
        {
            status: 200,
            headers: {
                "Cache-Control":
                    "public, max-age=60, stale-while-revalidate=300",
            },
        },
    );
}
