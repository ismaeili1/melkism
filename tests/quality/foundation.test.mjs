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

test("package foundation exists", () => {
  const pkg = JSON.parse(
    read("package.json")
  );

  assert.equal(
    pkg.name,
    "melkism"
  );

  assert.ok(
    pkg.dependencies
  );

  assert.ok(
    pkg.devDependencies
  );
});

test("Prisma foundation exists", () => {
  assert.equal(
    exists("prisma.config.ts"),
    true
  );

  assert.equal(
    exists("prisma/schema.prisma"),
    true
  );
});

test("core scripts exist", () => {
  const pkg = JSON.parse(
    read("package.json")
  );

  assert.equal(
    pkg.scripts.build,
    "next build"
  );

  assert.equal(
    pkg.scripts.lint,
    "eslint"
  );

  assert.equal(
    pkg.scripts.test,
    "node --test tests/quality/*.test.mjs"
  );

  assert.equal(
    pkg.scripts["test:quality"],
    "node --test tests/quality/*.test.mjs"
  );
});

test("core directories exist", () => {
  for (
    const rel of [
      "app",
      "components",
      "lib",
      "prisma",
      "docs",
      "tests",
    ]
  ) {
    assert.equal(
      exists(rel),
      true,
      `Missing ${rel}`
    );
  }
});
