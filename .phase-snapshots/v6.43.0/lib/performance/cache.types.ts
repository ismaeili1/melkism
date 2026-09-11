export type CacheEntry<T> = {
  value: T;
  expiresAt: number;
  createdAt: number;
  lastAccessAt: number;
};

export type CacheStats = {
  size: number;
  hits: number;
  misses: number;
  evictions: number;
};

export type MemoryCacheOptions = {
  ttlMs?: number;
  maxEntries?: number;
  cleanupIntervalMs?: number;
};

export interface CacheStore<K, V> {
  get(key: K): V | undefined;
  set(key: K, value: V): void;
  has(key: K): boolean;
  delete(key: K): boolean;
  clear(): void;
  size(): number;
  stats(): CacheStats;
}
