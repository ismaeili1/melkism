import {
  DEFAULT_RATE_LIMIT_MAX_REQUESTS,
  DEFAULT_RATE_LIMIT_WINDOW_MS,
  MAX_IDENTITY_LENGTH,
  MUTATION_RATE_LIMIT_MAX_REQUESTS,
} from "./request-protection.constants";

import type {
  RateLimitPolicy,
  RequestIdentity,
  RequestProtectionResult,
} from "./request-protection.types";

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<
  string,
  Bucket
>();

function cleanupExpiredBuckets(
  now: number,
): void {
  for (
    const [
      key,
      bucket,
    ] of buckets.entries()
  ) {
    if (bucket.resetAt <= now) {
      buckets.delete(key);
    }
  }
}

function getPolicy(
  isMutation: boolean,
): RateLimitPolicy {
  return {
    windowMs:
      DEFAULT_RATE_LIMIT_WINDOW_MS,
    maxRequests:
      isMutation
        ? MUTATION_RATE_LIMIT_MAX_REQUESTS
        : DEFAULT_RATE_LIMIT_MAX_REQUESTS,
  };
}

function normalizeIdentity(
  identity: RequestIdentity,
): string {
  const source =
    identity.key.trim();

  if (!source) {
    return "anonymous";
  }

  if (
    source.length >
    MAX_IDENTITY_LENGTH
  ) {
    return source.slice(
      0,
      MAX_IDENTITY_LENGTH,
    );
  }

  return source;
}

export function checkRateLimit(
  identity: RequestIdentity,
  isMutation: boolean,
): RequestProtectionResult {
  const now = Date.now();

  cleanupExpiredBuckets(now);

  const policy =
    getPolicy(isMutation);

  const identityKey =
    normalizeIdentity(identity);

  const key =
    `${isMutation ? "mutation" : "read"}:${identityKey}`;

  const existing =
    buckets.get(key);

  if (
    !existing ||
    existing.resetAt <= now
  ) {
    buckets.set(
      key,
      {
        count: 1,
        resetAt:
          now + policy.windowMs,
      },
    );

    return {
      ok: true,
      status: "allowed",
      message:
        "Request is within the configured rate limit.",
    };
  }

  if (
    existing.count >=
    policy.maxRequests
  ) {
    const retryAfterSeconds =
      Math.max(
        1,
        Math.ceil(
          (existing.resetAt - now) /
            1000,
        ),
      );

    return {
      ok: false,
      status: "rate-limited",
      message:
        "Request rate limit exceeded.",
      retryAfterSeconds,
    };
  }

  existing.count += 1;

  return {
    ok: true,
    status: "allowed",
    message:
      "Request is within the configured rate limit.",
  };
}
