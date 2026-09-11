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

test("security header baseline exists", () => {
  const source =
    read(
      "lib/security/security.constants.ts"
    );

  for (
    const token of [
      "CONTENT_SECURITY_POLICY",
      "REFERRER_POLICY",
      "X_FRAME_OPTIONS",
      "X_CONTENT_TYPE_OPTIONS",
      "PERMISSIONS_POLICY",
      "STRICT_TRANSPORT_SECURITY",
    ]
  ) {
    assert.ok(
      source.includes(token),
      `Missing ${token}`
    );
  }
});

test("security modules avoid browser storage", () => {
  const files = [
    "lib/security/security.constants.ts",
    "lib/security/security.types.ts",
    "lib/security/security.headers.ts",
    "lib/security/security.env.ts",
    "lib/security/security.audit.ts",
    "lib/security/index.ts",
  ];

  for (const rel of files) {
    const source = read(rel);

    assert.doesNotMatch(
      source,
      /localStorage/
    );

    assert.doesNotMatch(
      source,
      /sessionStorage/
    );

    assert.doesNotMatch(
      source,
      /document\.cookie/
    );
  }
});

test("environment auditing does not print values", () => {
  const source =
    read(
      "lib/security/security.env.ts"
    );

  assert.doesNotMatch(
    source,
    /console\.log\s*\(\s*process\.env/
  );

  assert.doesNotMatch(
    source,
    /console\.error\s*\(\s*process\.env/
  );

  assert.match(
    source,
    /auditEnvironment/
  );
});

test("security documentation contains no-force policy", () => {
  const source =
    read(
      "docs/security/v6.30.0/SECURITY-AUDIT-v6.30.0.txt"
    );

  assert.match(
    source,
    /npm audit fix --force/
  );
});
