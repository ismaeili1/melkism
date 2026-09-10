import { NextResponse } from "next/server";

import {
  searchPropertyMarketplace,
  type PropertyMarketplaceQuery,
} from "@/lib/property-marketplace-platform";

function parseNumber(
  value: string | null,
): number | undefined {
  if (
    value === null ||
    value.trim() === ""
  ) {
    return undefined;
  }

  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : undefined;
}

function parseListingType(
  value: string | null,
): PropertyMarketplaceQuery["listingType"] {
  if (
    value === "sale" ||
    value === "rent" ||
    value === "lease" ||
    value === "investment"
  ) {
    return value;
  }

  return undefined;
}

function parseCategory(
  value: string | null,
): PropertyMarketplaceQuery["category"] {
  if (
    value === "apartment" ||
    value === "villa" ||
    value === "office" ||
    value === "retail" ||
    value === "land" ||
    value === "industrial" ||
    value === "mixed-use"
  ) {
    return value;
  }

  return undefined;
}

function normalizeBody(
  body: unknown,
): PropertyMarketplaceQuery {
  if (
    body === null ||
    typeof body !== "object" ||
    Array.isArray(body)
  ) {
    return {};
  }

  const source =
    body as Record<string, unknown>;

  const result: PropertyMarketplaceQuery = {};

  if (typeof source.query === "string") {
    result.query = source.query;
  }

  if (
    source.locale === "fa" ||
    source.locale === "en" ||
    source.locale === "ar" ||
    source.locale === "tr"
  ) {
    result.locale = source.locale;
  }

  if (
    source.listingType === "sale" ||
    source.listingType === "rent" ||
    source.listingType === "lease" ||
    source.listingType === "investment"
  ) {
    result.listingType =
      source.listingType;
  }

  if (
    source.category === "apartment" ||
    source.category === "villa" ||
    source.category === "office" ||
    source.category === "retail" ||
    source.category === "land" ||
    source.category === "industrial" ||
    source.category === "mixed-use"
  ) {
    result.category =
      source.category;
  }

  if (typeof source.city === "string") {
    result.city = source.city;
  }

  if (
    typeof source.minPrice === "number" &&
    Number.isFinite(source.minPrice)
  ) {
    result.minPrice =
      source.minPrice;
  }

  if (
    typeof source.maxPrice === "number" &&
    Number.isFinite(source.maxPrice)
  ) {
    result.maxPrice =
      source.maxPrice;
  }

  if (
    typeof source.minAreaM2 === "number" &&
    Number.isFinite(source.minAreaM2)
  ) {
    result.minAreaM2 =
      source.minAreaM2;
  }

  if (
    typeof source.maxAreaM2 === "number" &&
    Number.isFinite(source.maxAreaM2)
  ) {
    result.maxAreaM2 =
      source.maxAreaM2;
  }

  if (
    typeof source.verifiedOnly === "boolean"
  ) {
    result.verifiedOnly =
      source.verifiedOnly;
  }

  if (
    typeof source.featuredOnly === "boolean"
  ) {
    result.featuredOnly =
      source.featuredOnly;
  }

  if (
    typeof source.limit === "number" &&
    Number.isFinite(source.limit)
  ) {
    result.limit =
      source.limit;
  }

  return result;
}

export async function GET(
  request: Request,
) {
  const url =
    new URL(request.url);

  const result =
    searchPropertyMarketplace({
      query:
        url.searchParams.get(
          "query",
        ) ?? undefined,

      city:
        url.searchParams.get(
          "city",
        ) ?? undefined,

      listingType:
        parseListingType(
          url.searchParams.get(
            "listingType",
          ),
        ),

      category:
        parseCategory(
          url.searchParams.get(
            "category",
          ),
        ),

      verifiedOnly:
        url.searchParams.get(
          "verifiedOnly",
        ) === "true",

      featuredOnly:
        url.searchParams.get(
          "featuredOnly",
        ) === "true",

      minPrice:
        parseNumber(
          url.searchParams.get(
            "minPrice",
          ),
        ),

      maxPrice:
        parseNumber(
          url.searchParams.get(
            "maxPrice",
          ),
        ),

      minAreaM2:
        parseNumber(
          url.searchParams.get(
            "minAreaM2",
          ),
        ),

      maxAreaM2:
        parseNumber(
          url.searchParams.get(
            "maxAreaM2",
          ),
        ),

      limit:
        parseNumber(
          url.searchParams.get(
            "limit",
          ),
        ),
    });

  return NextResponse.json(
    result,
  );
}

export async function POST(
  request: Request,
) {
  try {
    const body =
      await request.json();

    const result =
      searchPropertyMarketplace(
        normalizeBody(body),
      );

    return NextResponse.json(
      result,
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Invalid marketplace request payload.",
      },
      {
        status: 400,
      },
    );
  }
}
