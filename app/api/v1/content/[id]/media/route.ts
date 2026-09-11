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
  }>;
};

export const dynamic =
  "force-dynamic";

function parseSortOrder(
  value: unknown
): number {

  if (value === undefined) {
    return 0;
  }

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
          limit: 60,
          windowMs: 60000,
          keyPrefix:
            "content-media-list",
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
      await mediaService.listContentMedia(
        id
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
            "content-media-attach",
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

    const mediaId =
      requireString(
        body?.mediaId,
        "mediaId"
      );

    if (mediaId.length > 128) {
      return errorResponse(
        new Error("BAD_REQUEST"),
        requestId
      );
    }

    const sortOrder =
      parseSortOrder(
        body?.sortOrder
      );

    const relation =
      await mediaService.attachToContent(
        id,
        mediaId,
        sortOrder
      );

    return successResponse(
      serializeMedia(relation),
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
