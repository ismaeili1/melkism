import {
  errorResponse,
  successResponse,
} from "@/lib/api/core/response";

import {
  createRequestContext,
} from "@/lib/api/core/request";

import {
  getAuthorizationContext,
} from "@/lib/auth/authorization";

export type ApiHandlerOptions = {
  requireAuth?: boolean;
};

export async function runApiHandler<T>(
  request: Request,
  handler: (context: {
    request: Request;
    requestId: string;
    userId?: string;
  }) => Promise<T>,
  options: ApiHandlerOptions = {}
): Promise<Response> {
  try {
    const authContext =
      await getAuthorizationContext();

    const requireAuth =
      options.requireAuth ?? false;

    if (requireAuth && !authContext) {
      return errorResponse(
        new Error("UNAUTHORIZED")
      );
    }

    const requestContext =
      createRequestContext(
        request,
        authContext?.userId
      );

    const data = await handler({
      request,
      requestId: requestContext.requestId,
      userId: requestContext.userId,
    });

    return successResponse(
      data,
      undefined,
      requestContext.requestId
    );
  }
  catch (error) {
    return errorResponse(error);
  }
}
