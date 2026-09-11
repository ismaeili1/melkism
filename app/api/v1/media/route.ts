import {
  errorResponse,
  successResponse,
} from "@/lib/api/core/response";

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
  mediaService,
} from "@/lib/cms/media/media.service";

import {
  parseMediaCreateInput,
  parseMediaListInput,
  serializeMedia,
} from "@/lib/cms/media/media.types";

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
        new Error("UNAUTHORIZED"),
        requestId
      );
    }

    if (
      !hasPermission(
        auth.role,
        "media:manage"
      )
    ) {
      return errorResponse(
        new Error("FORBIDDEN"),
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
            "media-list",
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
      parseMediaListInput(
        new URL(request.url)
      );

    const result =
      await mediaService.list(
        input
      );

    return successResponse(
      serializeMedia(result),
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
    request.headers.get(
      "x-request-id"
    ) ??
    crypto.randomUUID();

  try {

    const auth =
      await getAuthorizationContext();

    if (!auth) {
      return errorResponse(
        new Error("UNAUTHORIZED"),
        requestId
      );
    }

    if (
      !hasPermission(
        auth.role,
        "media:manage"
      )
    ) {
      return errorResponse(
        new Error("FORBIDDEN"),
        requestId
      );
    }

    const decision =
      checkRateLimit(
        `user:${auth.userId}`,
        {
          limit: 30,
          windowMs: 60000,
          keyPrefix:
            "media-create",
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
      await request.json();

    const input =
      parseMediaCreateInput(
        body as Record<string, unknown>
      );

    const media =
      await mediaService.create(
        input
      );

    return successResponse(
      serializeMedia(media),
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
