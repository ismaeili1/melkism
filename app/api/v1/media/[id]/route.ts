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
  parseMediaUpdateInput,
  serializeMedia,
} from "@/lib/cms/media/media.types";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic =
  "force-dynamic";

async function authorize(
  requestId: string
) {
  const auth =
    await getAuthorizationContext();

  if (!auth) {
    return {
      auth: null,
      response:
        errorResponse(
          new Error("UNAUTHORIZED"),
          requestId
        ),
    };
  }

  if (
    !hasPermission(
      auth.role,
      "media:manage"
    )
  ) {
    return {
      auth: null,
      response:
        errorResponse(
          new Error("FORBIDDEN"),
          requestId
        ),
    };
  }

  return {
    auth,
    response: null,
  };
}

export async function GET(
  request: Request,
  context: RouteContext
): Promise<Response> {

  const requestId =
    request.headers.get(
      "x-request-id"
    ) ??
    crypto.randomUUID();

  try {

    const access =
      await authorize(requestId);

    if (access.response) {
      return access.response;
    }

    const { id } =
      await context.params;

    if (!id || id.length > 128) {
      return errorResponse(
        new Error("BAD_REQUEST"),
        requestId
      );
    }

    const decision =
      checkRateLimit(
        `user:${access.auth!.userId}`,
        {
          limit: 120,
          windowMs: 60000,
          keyPrefix:
            "media-read",
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

    const media =
      await mediaService.getById(
        id
      );

    if (!media) {
      return errorResponse(
        new Error("NOT_FOUND"),
        requestId
      );
    }

    return successResponse(
      serializeMedia(media),
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

export async function PATCH(
  request: Request,
  context: RouteContext
): Promise<Response> {

  const requestId =
    request.headers.get(
      "x-request-id"
    ) ??
    crypto.randomUUID();

  try {

    const access =
      await authorize(requestId);

    if (access.response) {
      return access.response;
    }

    const { id } =
      await context.params;

    if (!id || id.length > 128) {
      return errorResponse(
        new Error("BAD_REQUEST"),
        requestId
      );
    }

    const decision =
      checkRateLimit(
        `user:${access.auth!.userId}`,
        {
          limit: 30,
          windowMs: 60000,
          keyPrefix:
            "media-update",
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

    const existing =
      await mediaService.getById(
        id
      );

    if (!existing) {
      return errorResponse(
        new Error("NOT_FOUND"),
        requestId
      );
    }

    const body =
      await request.json();

    const input =
      parseMediaUpdateInput(
        body as Record<string, unknown>
      );

    const media =
      await mediaService.update(
        id,
        input
      );

    return successResponse(
      serializeMedia(media),
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
  context: RouteContext
): Promise<Response> {

  const requestId =
    request.headers.get(
      "x-request-id"
    ) ??
    crypto.randomUUID();

  try {

    const access =
      await authorize(requestId);

    if (access.response) {
      return access.response;
    }

    const { id } =
      await context.params;

    if (!id || id.length > 128) {
      return errorResponse(
        new Error("BAD_REQUEST"),
        requestId
      );
    }

    const decision =
      checkRateLimit(
        `user:${access.auth!.userId}`,
        {
          limit: 20,
          windowMs: 60000,
          keyPrefix:
            "media-delete",
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

    const existing =
      await mediaService.getById(
        id
      );

    if (!existing) {
      return errorResponse(
        new Error("NOT_FOUND"),
        requestId
      );
    }

    await mediaService.delete(
      id
    );

    return successResponse(
      {
        deleted: true,
        id,
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
