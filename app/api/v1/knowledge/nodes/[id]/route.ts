/**
 * MELKISM v6.24.0
 * Knowledge Node item API.
 */

import {
  errorResponse,
  successResponse,
} from "@/lib/api/core/response";

import {
  checkRateLimit,
  getRateLimitHeaders,
} from "@/lib/api/core/rate-limit";

import { rateLimitResponse } from "@/lib/api/core/rate-limit-response";
import { getAuthorizationContext } from "@/lib/auth/authorization";
import { hasPermission } from "@/lib/auth/roles";
import { graphService } from "@/lib/knowledge/graph.service";

import {
  parseNodeUpdateInput,
  serializeKnowledge,
} from "@/lib/knowledge/graph.types";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export const dynamic = "force-dynamic";

async function authorize(
  requestId: string,
  manage: boolean
) {

  const auth =
    await getAuthorizationContext();

  if (!auth) {
    return {
      auth: null,
      response: errorResponse(
        new Error("UNAUTHORIZED"),
        requestId
      ),
    };
  }

  const permission =
    manage
      ? "intelligence:manage"
      : "intelligence:read";

  if (!hasPermission(auth.role, permission)) {
    return {
      auth: null,
      response: errorResponse(
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
    request.headers.get("x-request-id") ??
    crypto.randomUUID();

  try {

    const access =
      await authorize(
        requestId,
        false
      );

    if (access.response) {
      return access.response;
    }

    const params =
      await context.params;

    const id =
      params.id;

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
          keyPrefix: "knowledge-node-read",
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

    const node =
      await graphService.getNode(id);

    if (!node) {
      return errorResponse(
        new Error("NOT_FOUND"),
        requestId
      );
    }

    return successResponse(
      serializeKnowledge(node),
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
    request.headers.get("x-request-id") ??
    crypto.randomUUID();

  try {

    const access =
      await authorize(
        requestId,
        true
      );

    if (access.response) {
      return access.response;
    }

    const params =
      await context.params;

    const id =
      params.id;

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
          keyPrefix: "knowledge-node-update",
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
      await graphService.getNode(id);

    if (!existing) {
      return errorResponse(
        new Error("NOT_FOUND"),
        requestId
      );
    }

    const body =
      await request.json();

    const input =
      parseNodeUpdateInput(
        body as Record<string, unknown>
      );

    const node =
      await graphService.updateNode(
        id,
        input
      );

    return successResponse(
      serializeKnowledge(node),
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
    request.headers.get("x-request-id") ??
    crypto.randomUUID();

  try {

    const access =
      await authorize(
        requestId,
        true
      );

    if (access.response) {
      return access.response;
    }

    const params =
      await context.params;

    const id =
      params.id;

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
          keyPrefix: "knowledge-node-delete",
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
      await graphService.getNode(id);

    if (!existing) {
      return errorResponse(
        new Error("NOT_FOUND"),
        requestId
      );
    }

    await graphService.deleteNode(id);

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