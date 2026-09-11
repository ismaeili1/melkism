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

test("structured logger exists", () => {
  const source =
    read(
      "lib/observability/logger.ts"
    );

  assert.match(
    source,
    /JSON\.stringify\(entry\)/
  );

  assert.match(
    source,
    /logger\s*=/
  );

  assert.match(
    source,
    /redactAttributes/
  );
});

test("redaction covers secrets", () => {
  const source =
    read(
      "lib/observability/redaction.ts"
    );

  for (
    const token of [
      "\"password\"",
      "\"secret\"",
      "\"token\"",
      "\"authorization\"",
      "\"cookie\"",
      "\"sessionToken\"",
    ]
  ) {
    assert.ok(
      source.includes(token),
      `Missing ${token}`
    );
  }

  assert.match(
    source,
    /\[REDACTED\]/
  );
});

test("request ID infrastructure exists", () => {
  const source =
    read(
      "lib/observability/request-context.ts"
    );

  assert.match(
    source,
    /crypto\.randomUUID/
  );

  assert.match(
    source,
    /recordRequestMetric/
  );

  assert.match(
    source,
    /withRequestId/
  );
});

test("health/readiness are no-store", () => {
  for (
    const rel of [
      "app/api/health/route.ts",
      "app/api/ready/route.ts",
    ]
  ) {
    const source = read(rel);

    assert.match(
      source,
      /Cache-Control/
    );

    assert.match(
      source,
      /no-store/
    );
  }
});
