import {
  errorResponse,
  successResponse,
} from "@/lib/api/core/response";

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

export const dynamic =
  "force-dynamic";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function POST(
  request: Request,
  { params }: RouteContext
): Promise<Response> {
  const requestId =
    request.headers.get(
      "x-request-id"
    ) ??
    crypto.randomUUID();

  try {
    const { id } =
      await params;

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
        "content:publish"
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
        `user:${authContext.userId}`,
        {
          limit: 20,
          windowMs:
            60_000,
          keyPrefix:
            "content-publish",
        }
      );

    const limited =
      !decision.allowed
        ? Response.json(
            {
              ok: false,
              error: {
                code:
                  "RATE_LIMITED",
                message:
                  "Too many requests.",
              },
              requestId,
            },
            {
              status: 429,
              headers:
                getRateLimitHeaders(
                  decision
                ),
            }
          )
        : null;

    if (limited) {
      return limited;
    }

    const content =
      await contentService.publish(
        id
      );

    return successResponse(
      content,
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
