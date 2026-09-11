import {
  PUBLIC_BROWSER_CACHE_SECONDS,
  PUBLIC_SHARED_CACHE_SECONDS,
  PUBLIC_STALE_WHILE_REVALIDATE_SECONDS,
} from "./performance.constants";

export function publicCacheControl(): string {
  return [
    "public",
    `max-age=${PUBLIC_BROWSER_CACHE_SECONDS}`,
    `s-maxage=${PUBLIC_SHARED_CACHE_SECONDS}`,
    `stale-while-revalidate=${PUBLIC_STALE_WHILE_REVALIDATE_SECONDS}`,
  ].join(", ");
}

export function privateNoStoreCacheControl(): string {
  return "private, no-store, max-age=0";
}

export function apiNoStoreCacheControl(): string {
  return "no-store, max-age=0";
}
