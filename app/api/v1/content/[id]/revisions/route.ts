import {
  errorResponse,
  successResponse,
} from "@/lib/api/core/response";

import {
  getAuthorizationContext,
} from "@/lib/auth/authorization";

import {
  hasPermission,
} from "@/lib/auth/roles";

import {
  contentService,
} from "@/lib/cms/content/content.service";

import {
  contentRevisionService,
} from "@/lib/cms/content/content.revision.service";

import {
  parseRevisionListInput,
} from "@/lib/cms/content/content.revision.types";

export const dynamic =
  "force-dynamic";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
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

    const content =
      await contentService.getById(
        id
      );

    if (
      !(
        hasPermission(
          authContext.role,
          "content:edit"
        ) ||
        content.authorId ===
          authContext.userId
      )
    ) {
      return errorResponse(
        new Error(
          "FORBIDDEN"
        ),
        requestId
      );
    }

    const input =
      parseRevisionListInput(
        new URL(request.url)
          .searchParams
      );

    const result =
      await contentRevisionService.list(
        id,
        input
      );

    return successResponse(
      result,
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