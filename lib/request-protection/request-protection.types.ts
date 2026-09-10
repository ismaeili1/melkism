export type RequestProtectionStatus =
  | "allowed"
  | "rate-limited"
  | "forbidden"
  | "invalid";

export type RequestProtectionResult = {
  ok: boolean;
  status: RequestProtectionStatus;
  message: string;
  retryAfterSeconds?: number;
};

export type RateLimitPolicy = {
  windowMs: number;
  maxRequests: number;
};

export type RequestIdentity = {
  key: string;
  source:
    | "ip"
    | "forwarded"
    | "anonymous";
};

export type RequestProtectionInput = {
  method: string;
  pathname: string;
  origin?: string | null;
  referer?: string | null;
  contentType?: string | null;
  identity: RequestIdentity;
};

export type SecurityControlReport = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.7";
  timestamp: string;
  controls: {
    methodPolicy: boolean;
    originPolicy: boolean;
    csrfBoundary: boolean;
    rateLimitPolicy: boolean;
  };
};
