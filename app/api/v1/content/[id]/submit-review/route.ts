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
  contentWorkflowService,
} from "@/lib/cms/content/content.workflow.service";

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

    if (
      !id ||
      id.length > 128
    ) {
      return errorResponse(
        new Error(
          "BAD_REQUEST"
        ),
        requestId
      );
    }

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

    const decision =
      checkRateLimit(
        `user:${authContext.userId}`,
        {
          limit: 20,
          windowMs: 60_000,
          keyPrefix:
            "content-submit-review",
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

    const result =
      await contentWorkflowService
        .submitForReview(
          id
        );

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