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
  requireString,
} from "@/lib/api/core/validation";

import {
  serializeMedia,
} from "@/lib/cms/media/media.types";

type RouteContext = {
  params: Promise<{
    id: string;
    mediaId: string;
  }>;
};

export const dynamic =
  "force-dynamic";

function parseSortOrder(
  value: unknown
): number {

  const raw =
    requireString(
      String(value),
      "sortOrder"
    );

  if (!/^\d+$/.test(raw)) {
    throw new Error(
      "INVALID_SORT_ORDER"
    );
  }

  const number =
    Number(raw);

  if (
    !Number.isSafeInteger(number)
  ) {
    throw new Error(
      "INVALID_SORT_ORDER"
    );
  }

  return number;
}

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

    const {
      id,
      mediaId,
    } =
      await context.params;

    if (
      !id ||
      !mediaId ||
      id.length > 128 ||
      mediaId.length > 128
    ) {
      return errorResponse(
        new Error("BAD_REQUEST"),
        requestId
      );
    }

    const decision =
      checkRateLimit(
        `user:${access.auth!.userId}`,
        {
          limit: 40,
          windowMs: 60000,
          keyPrefix:
            "content-media-update",
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

    const sortOrder =
      parseSortOrder(
        body?.sortOrder
      );

    const relation =
      await mediaService.updateContentMedia(
        id,
        mediaId,
        sortOrder
      );

    return successResponse(
      serializeMedia(relation),
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

    const {
      id,
      mediaId,
    } =
      await context.params;

    if (
      !id ||
      !mediaId ||
      id.length > 128 ||
      mediaId.length > 128
    ) {
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
            "content-media-delete",
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

    await mediaService.deleteContentMedia(
      id,
      mediaId
    );

    return successResponse(
      {
        deleted: true,
        contentId: id,
        mediaId,
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
