import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root =
  process.cwd();

function exists(relativePath) {
  return fs.existsSync(
    path.join(
      root,
      relativePath
    )
  );
}

function read(relativePath) {
  return fs.readFileSync(
    path.join(
      root,
      relativePath
    ),
    "utf8"
  );
}

function packageJson() {
  return JSON.parse(
    read("package.json")
  );
}

test(
  "pre-launch architecture files exist",
  () => {
    const files = [
      "lib/prelaunch/prelaunch.constants.ts",
      "lib/prelaunch/prelaunch.types.ts",
      "lib/prelaunch/prelaunch.checks.ts",
      "lib/prelaunch/index.ts",
      "scripts/prelaunch-audit.mjs",
    ];

    for (
      const file of files
    ) {
      assert.equal(
        exists(file),
        true,
        `Missing ${file}`
      );
    }
  }
);

test(
  "pre-launch constants define phase",
  () => {
    const source =
      read(
        "lib/prelaunch/prelaunch.constants.ts"
      );

    assert.ok(
      source.includes(
        "v6.35.0"
      )
    );

    assert.ok(
      source.includes(
        "melkism.com"
      )
    );

    assert.ok(
      source.includes(
        '"fa"'
      )
    );
  }
);

test(
  "pre-launch report type exists",
  () => {
    const source =
      read(
        "lib/prelaunch/prelaunch.types.ts"
      );

    assert.ok(
      source.includes(
        "PreLaunchAuditReport"
      )
    );

    assert.ok(
      source.includes(
        "PreLaunchGate"
      )
    );
  }
);

test(
  "pre-launch audit engine exists",
  () => {
    const source =
      read(
        "lib/prelaunch/prelaunch.checks.ts"
      );

    assert.ok(
      source.includes(
        "runPreLaunchAudit"
      )
    );

    assert.ok(
      source.includes(
        "BLOCKED"
      )
    );

    assert.ok(
      source.includes(
        "WARNING"
      )
    );
  }
);

test(
  "required production foundation remains intact",
  () => {
    const files = [
      "next.config.ts",
      "proxy.ts",
      "prisma.config.ts",
      "prisma/schema.prisma",
      "app/layout.tsx",
      "app/page.tsx",
      "app/[locale]/layout.tsx",
      "app/api/health/route.ts",
      "app/api/ready/route.ts",
    ];

    for (
      const file of files
    ) {
      assert.equal(
        exists(file),
        true,
        `Missing ${file}`
      );
    }
  }
);

test(
  "production commands remain canonical",
  () => {
    const pkg =
      packageJson();

    assert.equal(
      pkg?.scripts?.build,
      "next build"
    );

    assert.equal(
      pkg?.scripts?.start,
      "next start"
    );

    assert.equal(
      typeof pkg?.scripts?.test,
      "string"
    );
  }
);

test(
  "four supported locales remain present",
  () => {
    const source =
      read(
        "lib/i18n/config.ts"
      );

    for (
      const locale of [
        '"fa"',
        '"en"',
        '"ar"',
        '"tr"',
      ]
    ) {
      assert.ok(
        source.includes(locale),
        `Missing ${locale}`
      );
    }
  }
);

test(
  "security headers remain present",
  () => {
    const source =
      read(
        "next.config.ts"
      );

    for (
      const header of [
        "Content-Security-Policy",
        "Referrer-Policy",
        "X-Frame-Options",
        "X-Content-Type-Options",
        "Permissions-Policy",
        "Strict-Transport-Security",
      ]
    ) {
      assert.ok(
        source.includes(header),
        `Missing ${header}`
      );
    }
  }
);

test(
  "SEO and accessibility foundations remain present",
  () => {
    const seo =
      read(
        "lib/seo/seo.constants.ts"
      );

    const accessibility =
      read(
        "lib/accessibility/accessibility.constants.ts"
      );

    assert.ok(
      seo.includes(
        "https://melkism.com"
      )
    );

    assert.ok(
      seo.includes(
        "SEO_SUPPORTED_LOCALES"
      )
    );

    assert.ok(
      accessibility.includes(
        "ACCESSIBILITY_SUPPORTED_LOCALES"
      )
    );
  }
);

test(
  "pre-launch layer has no browser storage",
  () => {
    const files = [
      "lib/prelaunch/prelaunch.constants.ts",
      "lib/prelaunch/prelaunch.types.ts",
      "lib/prelaunch/prelaunch.checks.ts",
      "lib/prelaunch/index.ts",
    ];

    for (
      const file of files
    ) {
      const source =
        read(file);

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
  }
);

test(
  "pre-launch layer has no Prisma runtime dependency",
  () => {
    const files = [
      "lib/prelaunch/prelaunch.constants.ts",
      "lib/prelaunch/prelaunch.types.ts",
      "lib/prelaunch/prelaunch.checks.ts",
      "lib/prelaunch/index.ts",
    ];

    for (
      const file of files
    ) {
      const source =
        read(file);

      assert.doesNotMatch(
        source,
        /from\s+["'][^"']*prisma[^"']*["']/i
      );
    }
  }
);

test(
  "pre-launch layer has no dynamic execution",
  () => {
    const files = [
      "lib/prelaunch/prelaunch.constants.ts",
      "lib/prelaunch/prelaunch.types.ts",
      "lib/prelaunch/prelaunch.checks.ts",
      "lib/prelaunch/index.ts",
    ];

    for (
      const file of files
    ) {
      const source =
        read(file);

      assert.doesNotMatch(
        source,
        /eval\s*\(/
      );

      assert.doesNotMatch(
        source,
        /new\s+Function\s*\(/
      );
    }
  }
);
