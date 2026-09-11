import {
  MEMORY_CACHE_CLEANUP_INTERVAL_MS,
  MEMORY_CACHE_DEFAULT_MAX_ENTRIES,
  MEMORY_CACHE_DEFAULT_TTL_MS,
} from "./performance.constants";

import type {
  CacheEntry,
  CacheStats,
  CacheStore,
  MemoryCacheOptions,
} from "./cache.types";

export class MemoryCache<K, V>
  implements CacheStore<K, V> {
  private readonly entries =
    new Map<K, CacheEntry<V>>();

  private readonly ttlMs: number;

  private readonly maxEntries: number;

  private hits = 0;

  private misses = 0;

  private evictions = 0;

  private cleanupTimer:
    ReturnType<typeof setInterval> | null = null;

  constructor(
    options: MemoryCacheOptions = {}
  ) {
    this.ttlMs = Math.max(
      1,
      options.ttlMs ??
        MEMORY_CACHE_DEFAULT_TTL_MS
    );

    this.maxEntries = Math.max(
      1,
      options.maxEntries ??
        MEMORY_CACHE_DEFAULT_MAX_ENTRIES
    );

    const cleanupIntervalMs =
      Math.max(
        1,
        options.cleanupIntervalMs ??
          MEMORY_CACHE_CLEANUP_INTERVAL_MS
      );

    this.cleanupTimer = setInterval(
      () => this.cleanupExpired(),
      cleanupIntervalMs
    );

    if (
      typeof this.cleanupTimer ===
      "object" &&
      this.cleanupTimer &&
      "unref" in this.cleanupTimer
    ) {
      this.cleanupTimer.unref();
    }
  }

  get(
    key: K
  ): V | undefined {
    const entry =
      this.entries.get(key);

    if (!entry) {
      this.misses += 1;
      return undefined;
    }

    const now = Date.now();

    if (
      entry.expiresAt <= now
    ) {
      this.entries.delete(key);
      this.misses += 1;
      return undefined;
    }

    entry.lastAccessAt = now;
    this.hits += 1;

    return entry.value;
  }

  set(
    key: K,
    value: V
  ): void {
    const now = Date.now();

    if (
      this.entries.has(key)
    ) {
      this.entries.delete(key);
    }

    this.entries.set(
      key,
      {
        value,
        createdAt: now,
        lastAccessAt: now,
        expiresAt:
          now + this.ttlMs,
      }
    );

    this.enforceMaxEntries();
  }

  has(
    key: K
  ): boolean {
    return this.get(key) !== undefined;
  }

  delete(
    key: K
  ): boolean {
    return this.entries.delete(key);
  }

  clear(): void {
    this.entries.clear();
  }

  size(): number {
    this.cleanupExpired();
    return this.entries.size;
  }

  stats(): CacheStats {
    this.cleanupExpired();

    return {
      size: this.entries.size,
      hits: this.hits,
      misses: this.misses,
      evictions: this.evictions,
    };
  }

  stop(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
  }

  private cleanupExpired(): void {
    const now = Date.now();

    for (
      const [key, entry]
      of this.entries
    ) {
      if (
        entry.expiresAt <= now
      ) {
        this.entries.delete(key);
      }
    }
  }

  private enforceMaxEntries(): void {
    while (
      this.entries.size >
      this.maxEntries
    ) {
      let oldestKey:
        | K
        | undefined;

      let oldestAccess =
        Number.POSITIVE_INFINITY;

      for (
        const [key, entry]
        of this.entries
      ) {
        if (
          entry.lastAccessAt <
          oldestAccess
        ) {
          oldestAccess =
            entry.lastAccessAt;
          oldestKey = key;
        }
      }

      if (
        oldestKey === undefined
      ) {
        return;
      }

      this.entries.delete(
        oldestKey
      );

      this.evictions += 1;
    }
  }
}

export function createMemoryCache<
  K,
  V
>(
  options?: MemoryCacheOptions
): MemoryCache<K, V> {
  return new MemoryCache<
    K,
    V
  >(options);
}

export const defaultMemoryCache =
  createMemoryCache<string, unknown>();
