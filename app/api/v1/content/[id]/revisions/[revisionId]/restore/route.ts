import {
  errorResponse,
  successResponse,
} from "@/lib/api/core/response";

import {
  getAuthorizationContext,
} from "@/lib/auth/authorization";

import {
  evaluateResourceAccess,
} from "@/lib/auth/resource-access";

import {
  contentRevisionService,
} from "@/lib/cms/content/content.revision.service";

import {
  contentService,
} from "@/lib/cms/content/content.service";

import {
  parseRevisionId,
} from "@/lib/cms/content/content.revision.types";

export const dynamic =
  "force-dynamic";

type RouteContext = {
  params: Promise<{
    id: string;
    revisionId: string;
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
    const {
      id,
      revisionId,
    } =
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

    const parsedRevisionId =
      parseRevisionId(
        revisionId
      );

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

    const content =
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
            content.authorId,
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

    const restored =
      await contentRevisionService.restore(
        id,
        parsedRevisionId
      );

    return successResponse(
      restored,
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