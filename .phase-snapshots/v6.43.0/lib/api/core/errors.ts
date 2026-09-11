export type ApiErrorCode =
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "VALIDATION_ERROR"
  | "RATE_LIMITED"
  | "PAYLOAD_TOO_LARGE"
  | "INTERNAL_ERROR";

export class ApiError extends Error {
  public readonly code: ApiErrorCode;
  public readonly status: number;

  constructor(
    code: ApiErrorCode,
    message: string,
    status: number
  ) {
    super(message);
    this.name = "ApiError";
    this.code = code;
    this.status = status;
  }
}

export function badRequest(
  message = "Bad request."
): ApiError {
  return new ApiError(
    "BAD_REQUEST",
    message,
    400
  );
}

export function unauthorized(
  message = "Authentication required."
): ApiError {
  return new ApiError(
    "UNAUTHORIZED",
    message,
    401
  );
}

export function forbidden(
  message = "Access denied."
): ApiError {
  return new ApiError(
    "FORBIDDEN",
    message,
    403
  );
}

export function notFound(
  message = "Resource not found."
): ApiError {
  return new ApiError(
    "NOT_FOUND",
    message,
    404
  );
}

export function conflict(
  message = "Resource conflict."
): ApiError {
  return new ApiError(
    "CONFLICT",
    message,
    409
  );
}

export function validationError(
  message = "Validation failed."
): ApiError {
  return new ApiError(
    "VALIDATION_ERROR",
    message,
    422
  );
}

