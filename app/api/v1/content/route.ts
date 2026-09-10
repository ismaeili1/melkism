import {
  errorResponse,
  successResponse,
} from "@/lib/api/core/response";

import {
  parseJsonBody,
} from "@/lib/api/core/json";

import {
  checkRateLimit,
  getRateLimitHeaders,
} from "@/lib/api/core/rate-limit";

import {
  getAuthorizationContext,
} from "@/lib/auth/authorization";

import {
  hasPermission,
} from "@/lib/auth/roles";

import {
  contentService,
} from "@/lib/cms/content/content.service";

import {
  parseContentCreateInput,
  parsePage,
  parsePageSize,
} from "@/lib/cms/content/content.types";

import type {
  ContentKind,
} from "@/prisma/generated/prisma/client";

import {
  rateLimitResponse,
} from "@/lib/api/core/rate-limit-response";
export const dynamic =
  "force-dynamic";

function getRequestId(
  request: Request
): string {
  return (
    request.headers.get(
      "x-request-id"
    ) ??
    crypto.randomUUID()
  );
}

function getClientKey(
  request: Request,
  userId?: string
): string {
  if (userId) {
    return `user:${userId}`;
  }

  return (
    request.headers.get(
      "x-forwarded-for"
    )?.split(",")[0]?.trim() ??
    request.headers.get(
      "x-real-ip"
    ) ??
    "unknown-client"
  );
}

export async function GET(
  request: Request
): Promise<Response> {
  const requestId =
    getRequestId(request);

  try {
    const authContext =
      await getAuthorizationContext();

    const url =
      new URL(request.url);

    const includeDrafts =
      url.searchParams.get(
        "includeDrafts"
      ) === "true";

    if (includeDrafts) {
      if (!authContext) {
        return errorResponse(
          new Error(
            "UNAUTHORIZED"
          ),
          requestId
        );
      }

      if (
        !hasPermission(
          authContext.role,
          "content:edit"
        )
      ) {
        return errorResponse(
          new Error(
            "FORBIDDEN"
          ),
          requestId
        );
      }
    }

    const decision =
      checkRateLimit(
        getClientKey(
          request,
          authContext?.userId
        ),
        {
          limit:
            includeDrafts
              ? 60
              : 120,
          windowMs:
            60_000,
          keyPrefix:
            "content-list",
        }
      );

    const limited =
      rateLimitResponse(
        requestId,
        decision
      );

    if (limited) {
      return limited;
    }

    const page =
      parsePage(
        url.searchParams.get(
          "page"
        )
      );

    const pageSize =
      parsePageSize(
        url.searchParams.get(
          "pageSize"
        )
      );

    const search =
      url.searchParams.get(
        "search"
      )?.trim();

    const localeId =
      url.searchParams.get(
        "localeId"
      )?.trim();

    const rawKind =
      url.searchParams.get(
        "kind"
      );

    const kind =
      rawKind
        ? (
            rawKind as ContentKind
          )
        : undefined;

    const result =
      await contentService.list({
        page,
        pageSize,
        search:
          search || undefined,
        kind,
        localeId:
          localeId || undefined,
        includeDrafts,
      });

    return successResponse(
      result,
      {
        headers:
          getRateLimitHeaders(
            decision
          ),
      },
      requestId
    );
  }
  catch (error) {
    return errorResponse(
      error,
      requestId
    );
  }
}

export async function POST(
  request: Request
): Promise<Response> {
  const requestId =
    getRequestId(request);

  try {
    const authContext =
      await getAuthorizationContext();

    if (!authContext) {
      return errorResponse(
        new Error(
          "UNAUTHORIZED"
        ),
        requestId
      );
    }

    if (
      !hasPermission(
        authContext.role,
        "content:create"
      )
    ) {
      return errorResponse(
        new Error(
          "FORBIDDEN"
        ),
        requestId
      );
    }

    const decision =
      checkRateLimit(
        getClientKey(
          request,
          authContext.userId
        ),
        {
          limit: 30,
          windowMs:
            60_000,
          keyPrefix:
            "content-create",
        }
      );

    const limited =
      rateLimitResponse(
        requestId,
        decision
      );

    if (limited) {
      return limited;
    }

    const body =
      await parseJsonBody<unknown>(
        request,
        {
          maxBytes:
            5 * 1024 * 1024,
        }
      );

    const input =
      parseContentCreateInput(
        body
      );

    const content =
      await contentService.create(
        input,
        authContext.userId
      );

    return successResponse(
      content,
      {
        status: 201,
        headers:
          getRateLimitHeaders(
            decision
          ),
      },
      requestId
    );
  }
  catch (error) {
    return errorResponse(
      error,
      requestId
    );
  }
}
