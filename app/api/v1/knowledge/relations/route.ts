/**
 * MELKISM v6.24.0
 * Knowledge Relation collection API.
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
  parseRelationCreateInput,
  parseRelationListInput,
  serializeKnowledge,
} from "@/lib/knowledge/graph.types";

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
  request: Request
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

    const decision =
      checkRateLimit(
        `user:${access.auth!.userId}`,
        {
          limit: 60,
          windowMs: 60000,
          keyPrefix: "knowledge-relation-list",
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
      parseRelationListInput(
        new URL(request.url)
      );

    const result =
      await graphService.listRelations(
        input
      );

    return successResponse(
      serializeKnowledge(result),
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

    const decision =
      checkRateLimit(
        `user:${access.auth!.userId}`,
        {
          limit: 30,
          windowMs: 60000,
          keyPrefix: "knowledge-relation-create",
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
      parseRelationCreateInput(
        body as Record<string, unknown>
      );

    const relation =
      await graphService.createRelation(
        input
      );

    return successResponse(
      serializeKnowledge(relation),
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