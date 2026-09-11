import fs from "node:fs";
import path from "node:path";

const root =
  process.cwd();

const checks = [];

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

function add(
  id,
  name,
  passed,
  detail
) {
  checks.push({
    id,
    name,
    passed,
    detail,
  });
}

const requiredFiles = [
  "package.json",
  "package-lock.json",
  "next.config.ts",
  "proxy.ts",
  "prisma.config.ts",
  "prisma/schema.prisma",
  "app/layout.tsx",
  "app/page.tsx",
  "app/[locale]/layout.tsx",
  "app/api/health/route.ts",
  "app/api/ready/route.ts",
  "app/sitemap.ts",
  "app/robots.ts",
];

for (
  const relativePath of requiredFiles
) {
  add(
    relativePath,
    "Required file",
    exists(relativePath),
    exists(relativePath)
      ? "exists"
      : "missing"
  );
}

if (
  exists("package.json")
) {
  const pkg =
    JSON.parse(
      read("package.json")
    );

  add(
    "build",
    "Production build script",
    pkg?.scripts?.build ===
      "next build",
    "next build"
  );

  add(
    "start",
    "Production start script",
    pkg?.scripts?.start ===
      "next start",
    "next start"
  );

  add(
    "test",
    "Automated test command",
    typeof pkg?.scripts?.test ===
      "string",
    "test command exists"
  );
}

if (
  exists("next.config.ts")
) {
  const config =
    read("next.config.ts");

  add(
    "security",
    "Security headers",
    config.includes(
      "Content-Security-Policy"
    ) &&
    config.includes(
      "Strict-Transport-Security"
    ),
    "security headers"
  );

  add(
    "api-cache",
    "API cache policy",
    config.includes(
      "no-store"
    ),
    "no-store"
  );
}

if (
  exists("app/[locale]/layout.tsx")
) {
  const source =
    read(
      "app/[locale]/layout.tsx"
    );

  add(
    "locale",
    "Locale accessibility contract",
    source.includes(
      "lang="
    ) &&
    source.includes(
      "dir="
    ) &&
    source.includes(
      "<main"
    ),
    "lang/dir/main"
  );
}

if (
  exists("app/sitemap.ts") &&
  exists("app/robots.ts")
) {
  add(
    "seo",
    "SEO infrastructure",
    true,
    "sitemap and robots exist"
  );
}

if (
  exists(
    "lib/accessibility/accessibility.constants.ts"
  )
) {
  add(
    "accessibility",
    "Accessibility foundation",
    true,
    "accessibility foundation exists"
  );
}

if (
  exists(
    "lib/deployment/deployment.readiness.ts"
  )
) {
  add(
    "deployment",
    "Deployment readiness foundation",
    true,
    "deployment readiness exists"
  );
}

const failures =
  checks.filter(
    (check) =>
      !check.passed
  );

console.log("");
console.log(
  "MELKISM v6.35.0 PRE-LAUNCH AUDIT"
);
console.log(
  "==============================="
);
console.log("");

for (
  const check of checks
) {
  console.log(
    `${check.passed ? "[PASS]" : "[BLOCKED]"} ${check.name} : ${check.detail}`
  );
}

console.log("");
console.log(
  `Checks : ${checks.length}`
);
console.log(
  `Passed : ${checks.length - failures.length}`
);
console.log(
  `Blocked: ${failures.length}`
);
console.log("");

if (
  failures.length > 0
) {
  console.log(
    "PRE-LAUNCH AUDIT : BLOCKED"
  );

  process.exitCode = 1;
} else {
  console.log(
    "PRE-LAUNCH AUDIT : PASS"
  );
}
