import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(rel) {
  return fs.readFileSync(
    path.join(root, rel),
    "utf8"
  );
}

test("bounded memory cache exists", () => {
  const source =
    read(
      "lib/performance/cache.memory.ts"
    );

  assert.match(
    source,
    /class MemoryCache/
  );

  assert.match(
    source,
    /maxEntries/
  );

  assert.match(
    source,
    /expiresAt/
  );

  assert.match(
    source,
    /cleanupExpired/
  );
});

test("performance limits exist", () => {
  const source =
    read(
      "lib/performance/performance.constants.ts"
    );

  for (
    const token of [
      "MEMORY_CACHE_DEFAULT_TTL_MS",
      "MEMORY_CACHE_DEFAULT_MAX_ENTRIES",
      "SEARCH_CACHE_TTL_MS",
      "SEARCH_CACHE_MAX_ENTRIES",
    ]
  ) {
    assert.ok(
      source.includes(token),
      `Missing ${token}`
    );
  }
});

test("HTTP cache policies are separated", () => {
  const source =
    read(
      "lib/performance/http-cache.ts"
    );

  assert.match(
    source,
    /publicCacheControl/
  );

  assert.match(
    source,
    /privateNoStoreCacheControl/
  );

  assert.match(
    source,
    /apiNoStoreCacheControl/
  );
});

test("API remains no-store", () => {
  const source =
    read(
      "next.config.ts"
    );

  assert.match(
    source,
    /source:\s*"\/api\/:path\*"/
  );

  assert.match(
    source,
    /no-store,\s*max-age=0/
  );
});
