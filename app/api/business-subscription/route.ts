import { NextResponse } from "next/server";

import {
  getBusinessSubscriptionData,
  type BusinessSubscriptionQuery,
} from "@/lib/business-subscription-platform";

function parseLocale(
  value: string | null,
): BusinessSubscriptionQuery["locale"] {
  if (
    value === "fa" ||
    value === "en" ||
    value === "ar" ||
    value === "tr"
  ) {
    return value;
  }

  return undefined;
}

function parseAccountType(
  value: string | null,
): BusinessSubscriptionQuery["accountType"] {
  if (
    value === "individual" ||
    value === "professional" ||
    value === "agency" ||
    value === "developer" ||
    value === "enterprise"
  ) {
    return value;
  }

  return undefined;
}

export async function GET(
  request: Request,
) {
  const url = new URL(request.url);

  const result =
    getBusinessSubscriptionData({
      locale:
        parseLocale(
          url.searchParams.get(
            "locale",
          ),
        ),

      accountType:
        parseAccountType(
          url.searchParams.get(
            "accountType",
          ),
        ),
    });

  return NextResponse.json(result);
}

export async function POST(
  request: Request,
) {
  try {
    const body =
      await request.json();

    if (
      body === null ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Invalid business subscription payload.",
        },
        {
          status: 400,
        },
      );
    }

    const source =
      body as Record<string, unknown>;

    const query: BusinessSubscriptionQuery = {};

    if (
      source.locale === "fa" ||
      source.locale === "en" ||
      source.locale === "ar" ||
      source.locale === "tr"
    ) {
      query.locale =
        source.locale;
    }

    if (
      source.accountType ===
        "individual" ||
      source.accountType ===
        "professional" ||
      source.accountType ===
        "agency" ||
      source.accountType ===
        "developer" ||
      source.accountType ===
        "enterprise"
    ) {
      query.accountType =
        source.accountType;
    }

    return NextResponse.json(
      getBusinessSubscriptionData(
        query,
      ),
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Invalid business subscription request.",
      },
      {
        status: 400,
      },
    );
  }
}
