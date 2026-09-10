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
  evaluateResourceAccess,
} from "@/lib/auth/resource-access";

import {
  contentService,
} from "@/lib/cms/content/content.service";

import {
  parseContentUpdateInput,
} from "@/lib/cms/content/content.types";

import {
  rateLimitResponse,
} from "@/lib/api/core/rate-limit-response";
export const dynamic =
  "force-dynamic";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

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
  request: Request,
  { params }: RouteContext
): Promise<Response> {
  const requestId =
    getRequestId(request);

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

    const content =
      await contentService.getById(
        id
      );

    if (
      content.status !==
      "PUBLISHED"
    ) {
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

      const decision =
        evaluateResourceAccess({
          resource: "content",
          action: "update",
          context: {
            userId:
              authContext.userId,
            role:
              authContext.role,
            authenticated: true,
          },
          ownership: {
            ownerId:
              content.authorId,
          },
        });

      if (!decision.allowed) {
        return errorResponse(
          new Error(
            "FORBIDDEN"
          ),
          requestId
        );
      }
    }

    return successResponse(
      content,
      {
        headers: {
          "Cache-Control":
            "no-store",
        },
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

export async function PATCH(
  request: Request,
  { params }: RouteContext
): Promise<Response> {
  const requestId =
    getRequestId(request);

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

    const current =
      await contentService.getById(
        id
      );

    const access =
      evaluateResourceAccess({
        resource: "content",
        action: "update",
        context: {
          userId:
            authContext.userId,
          role:
            authContext.role,
          authenticated: true,
        },
        ownership: {
          ownerId:
            current.authorId,
        },
      });

    if (!access.allowed) {
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
            "content-update",
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
      parseContentUpdateInput(
        body
      );

    const updated =
      await contentService.update(
        id,
        input
      );

    return successResponse(
      updated,
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

export async function DELETE(
  request: Request,
  { params }: RouteContext
): Promise<Response> {
  const requestId =
    getRequestId(request);

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

    const current =
      await contentService.getById(
        id
      );

    const access =
      evaluateResourceAccess({
        resource: "content",
        action: "delete",
        context: {
          userId:
            authContext.userId,
          role:
            authContext.role,
          authenticated: true,
        },
        ownership: {
          ownerId:
            current.authorId,
        },
      });

    if (!access.allowed) {
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
          limit: 20,
          windowMs:
            60_000,
          keyPrefix:
            "content-delete",
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

    await contentService.delete(
      id
    );

    return successResponse(
      {
        id,
        deleted: true,
      },
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
