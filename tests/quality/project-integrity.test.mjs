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

function exists(rel) {
  return fs.existsSync(
    path.join(root, rel)
  );
}

test("production foundations exist", () => {
  const required = [
    "app/layout.tsx",
    "app/page.tsx",
    "proxy.ts",
    "next.config.ts",
    "prisma/schema.prisma",
    "prisma.config.ts",
    "lib/auth/authorization.ts",
    "lib/api/core/response.ts",
    "lib/api/core/errors.ts",
    "lib/api/core/validation.ts",
  ];

  for (const rel of required) {
    assert.equal(
      exists(rel),
      true,
      `Missing ${rel}`
    );
  }
});

test("locale routing exists", () => {
  assert.equal(
    exists(
      "app/[locale]/layout.tsx"
    ),
    true
  );
});

test("root redirects to fa", () => {
  const source =
    read(
      "app/page.tsx"
    );

  assert.match(
    source,
    /redirect\("\/fa"\)/
  );
});

test("proxy protects management surfaces", () => {
  const source =
    read(
      "proxy.ts"
    );

  assert.match(
    source,
    /\/dashboard\/:path\*/
  );

  assert.match(
    source,
    /\/admin\/:path\*/
  );
});

test("security headers exist", () => {
  const source =
    read(
      "next.config.ts"
    );

  for (
    const token of [
      "Content-Security-Policy",
      "Referrer-Policy",
      "X-Frame-Options",
      "X-Content-Type-Options",
      "Permissions-Policy",
      "Strict-Transport-Security",
    ]
  ) {
    assert.ok(
      source.includes(token),
      `Missing ${token}`
    );
  }
});
