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

test("search API uses rate limiting", () => {
  const source =
    read(
      "app/api/v1/search/route.ts"
    );

  assert.match(
    source,
    /checkRateLimit/
  );

  assert.match(
    source,
    /rateLimitResponse/
  );
});

test("search API uses authorization", () => {
  const source =
    read(
      "app/api/v1/search/route.ts"
    );

  assert.match(
    source,
    /getAuthorizationContext/
  );

  assert.match(
    source,
    /content:read/
  );
});

test("search API delegates bounded input parsing", () => {
  const route =
    read(
      "app/api/v1/search/route.ts"
    );

  const types =
    read(
      "lib/search/search.types.ts"
    );

  assert.match(
    route,
    /parseSearchInput/
  );

  assert.match(
    route,
    /searchService\.search/
  );

  assert.match(
    types,
    /parseSearchInput/
  );

  assert.match(
    types,
    /pageSize/
  );

  assert.match(
    types,
    /50/
  );

  assert.match(
    types,
    /200/
  );
});

test("publish API keeps permission check", () => {
  const source =
    read(
      "app/api/v1/content/[id]/publish/route.ts"
    );

  assert.match(
    source,
    /getAuthorizationContext/
  );

  assert.match(
    source,
    /content:publish/
  );
});

test("search API uses shared responses", () => {
  const source =
    read(
      "app/api/v1/search/route.ts"
    );

  assert.match(
    source,
    /errorResponse/
  );

  assert.match(
    source,
    /successResponse/
  );
});
