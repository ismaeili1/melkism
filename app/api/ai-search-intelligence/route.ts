import { NextResponse } from "next/server";
import {
    searchIntelligence,
    type SearchLanguage,
} from "@/lib/search-intelligence";

const SUPPORTED_LOCALES: SearchLanguage[] = ["fa", "en", "ar", "tr"];

function isLocale(value: unknown): value is SearchLanguage {
    return (
        typeof value === "string" &&
        SUPPORTED_LOCALES.includes(value as SearchLanguage)
    );
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const query = searchParams.get("q")?.trim() ?? "";
    const localeParam = searchParams.get("locale") ?? "en";

    if (!query) {
        return NextResponse.json(
            {
                error: "Search query is required.",
            },
            { status: 400 },
        );
    }

    const locale = isLocale(localeParam)
        ? localeParam
        : "en";

    const limitParam = Number(searchParams.get("limit") ?? "10");
    const limit = Number.isFinite(limitParam)
        ? Math.min(Math.max(Math.trunc(limitParam), 1), 25)
        : 10;

    const result = searchIntelligence({
        query,
        locale,
        limit,
    });

    return NextResponse.json(result, {
        status: 200,
        headers: {
            "Cache-Control": "public, max-age=30, stale-while-revalidate=120",
        },
    });
}
