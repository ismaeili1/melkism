/**
 * MELKISM v6.26.0
 * Search and Discovery API.
 */

import {
  errorResponse,
  successResponse,
} from "@/lib/api/core/response";

import {
  forbidden,
  unauthorized,
} from "@/lib/api/core/errors";

import {
  checkRateLimit,
  getRateLimitHeaders,
} from "@/lib/api/core/rate-limit";

import {
  rateLimitResponse,
} from "@/lib/api/core/rate-limit-response";

import {
  getAuthorizationContext,
} from "@/lib/auth/authorization";

import {
  hasPermission,
} from "@/lib/auth/roles";

import {
  searchService,
} from "@/lib/search/search.service";

import {
  parseSearchInput,
} from "@/lib/search/search.types";

export const dynamic =
  "force-dynamic";

export async function GET(
  request: Request
): Promise<Response> {

  const requestId =
    request.headers.get(
      "x-request-id"
    ) ??
    crypto.randomUUID();

  try {

    const auth =
      await getAuthorizationContext();

    if (!auth) {
      return errorResponse(
        unauthorized(
          "Authentication required for search."
        ),
        requestId
      );
    }

    if (
      !hasPermission(
        auth.role,
        "content:read"
      )
    ) {
      return errorResponse(
        forbidden(
          "Search access denied."
        ),
        requestId
      );
    }

    const decision =
      checkRateLimit(
        `user:${auth.userId}`,
        {
          limit: 60,
          windowMs: 60000,
          keyPrefix:
            "search-query",
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

    const input =
      parseSearchInput(
        new URL(
          request.url
        )
      );

    const output =
      await searchService.search(
        input
      );

    return successResponse(
      output,
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