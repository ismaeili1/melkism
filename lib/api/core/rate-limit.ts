export type RateLimitDecision = {
  allowed: boolean;
  limit: number;
  remaining: number;
  retryAfterSeconds: number;
};

type RateLimitBucket = {
  count: number;
  windowStartedAt: number;
};

type RateLimitOptions = {
  limit: number;
  windowMs: number;
  keyPrefix?: string;
};

const globalForRateLimit = globalThis as unknown as {
  melkismRateLimitBuckets?: Map<string, RateLimitBucket>;
};

function getStore(): Map<string, RateLimitBucket> {
  if (!globalForRateLimit.melkismRateLimitBuckets) {
    globalForRateLimit.melkismRateLimitBuckets =
      new Map<string, RateLimitBucket>();
  }

  return globalForRateLimit.melkismRateLimitBuckets;
}

function normalizeKey(value: string): string {
  return value.trim().slice(0, 256);
}

export function checkRateLimit(
  key: string,
  options: RateLimitOptions
): RateLimitDecision {
  const now = Date.now();

  const limit = Math.max(
    1,
    Math.floor(options.limit)
  );

  const windowMs = Math.max(
    1000,
    Math.floor(options.windowMs)
  );

  const prefix = options.keyPrefix ?? "api";

  const normalizedKey =
    `${prefix}:${normalizeKey(key)}`;

  const store = getStore();

  const current =
    store.get(normalizedKey);

  if (
    !current ||
    now - current.windowStartedAt >= windowMs
  ) {
    store.set(
      normalizedKey,
      {
        count: 1,
        windowStartedAt: now,
      }
    );

    return {
      allowed: true,
      limit,
      remaining: limit - 1,
      retryAfterSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (current.count >= limit) {
    const elapsed =
      now - current.windowStartedAt;

    const remainingMs =
      Math.max(0, windowMs - elapsed);

    return {
      allowed: false,
      limit,
      remaining: 0,
      retryAfterSeconds:
        Math.max(
          1,
          Math.ceil(remainingMs / 1000)
        ),
    };
  }

  current.count += 1;

  store.set(
    normalizedKey,
    current
  );

  return {
    allowed: true,
    limit,
    remaining:
      Math.max(0, limit - current.count),
    retryAfterSeconds:
      Math.ceil(windowMs / 1000),
  };
}

export function getRateLimitHeaders(
  decision: RateLimitDecision
): HeadersInit {
  return {
    "X-RateLimit-Limit": String(decision.limit),
    "X-RateLimit-Remaining": String(decision.remaining),
    "Retry-After":
      String(decision.retryAfterSeconds),
  };
}

export function cleanupRateLimitBuckets(
  maxIdleMs: number
): number {
  const store = getStore();
  const now = Date.now();

  let removed = 0;

  for (const [
    key,
    bucket,
  ] of store.entries()) {
    if (
      now - bucket.windowStartedAt >
      maxIdleMs
    ) {
      store.delete(key);
      removed += 1;
    }
  }

  return removed;
}
