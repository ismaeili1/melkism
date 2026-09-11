import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "package.json",
  "next.config.ts",
  "proxy.ts",
  "prisma.config.ts",
  "prisma/schema.prisma",
  "app/page.tsx",
  "app/[locale]/layout.tsx",
  "app/api/health/route.ts",
  "app/api/ready/route.ts",
];

const checks = [];

function addCheck(
  name,
  passed,
  message
) {
  checks.push({
    name,
    passed,
    message,
  });
}

function exists(
  relativePath
) {
  return fs.existsSync(
    path.join(
      root,
      relativePath
    )
  );
}

function read(
  relativePath
) {
  return fs.readFileSync(
    path.join(
      root,
      relativePath
    ),
    "utf8"
  );
}

for (
  const relativePath
    of requiredFiles
) {
  addCheck(
    relativePath,
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

  addCheck(
    "build script",
    pkg?.scripts?.build ===
      "next build",
    "next build"
  );

  addCheck(
    "start script",
    pkg?.scripts?.start ===
      "next start",
    "next start"
  );

  addCheck(
    "test script",
    typeof pkg?.scripts?.test ===
      "string",
    "test"
  );

  addCheck(
    "production readiness script",
    pkg?.scripts?.["production:readiness"] ===
      "node scripts/production-readiness.mjs",
    "node scripts/production-readiness.mjs"
  );
}

if (
  exists("next.config.ts")
) {
  const source =
    read("next.config.ts");

  addCheck(
    "CSP",
    source.includes(
      "Content-Security-Policy"
    ),
    "security header"
  );

  addCheck(
    "HSTS",
    source.includes(
      "Strict-Transport-Security"
    ),
    "security header"
  );

  addCheck(
    "API no-store",
    source.includes(
      'source: "/api/:path*"'
    ) &&
    source.includes(
      "no-store"
    ),
    "API cache policy"
  );
}

if (
  exists("app/page.tsx")
) {
  addCheck(
    "default locale",
    read(
      "app/page.tsx"
    ).includes(
      'redirect("/fa")'
    ),
    "fa"
  );
}

let sourceCount = 0;
const environmentNames = new Set();

function collectFiles(
  directory
) {
  if (
    !fs.existsSync(directory)
  ) {
    return [];
  }

  const result = [];

  for (
    const entry of fs.readdirSync(
      directory,
      { withFileTypes: true }
    )
  ) {
    const fullPath =
      path.join(
        directory,
        entry.name
      );

    if (
      entry.isDirectory()
    ) {
      result.push(
        ...collectFiles(
          fullPath
        )
      );
      continue;
    }

    if (
      /\.(ts|tsx|js|mjs)$/.test(
        entry.name
      )
    ) {
      result.push(fullPath);
    }
  }

  return result;
}

for (
  const relativeDirectory
    of [
      "app",
      "components",
      "lib",
    ]
) {
  const directory =
    path.join(
      root,
      relativeDirectory
    );

  for (
    const filePath
      of collectFiles(
        directory
      )
  ) {
    sourceCount++;

    const source =
      fs.readFileSync(
        filePath,
        "utf8"
      );

    const matches =
      source.matchAll(
        /process\.env\.([A-Z0-9_]+)/g
      );

    for (
      const match of matches
    ) {
      const name = match[1];

      if (name) {
        environmentNames.add(name);
      }
    }
  }
}

addCheck(
  "source scan",
  sourceCount > 0,
  `${sourceCount} source files scanned`
);

if (
  fs.existsSync(
    path.join(
      root,
      ".env"
    )
  )
) {
  console.log(
    "[WARN] Local .env exists. Production values must be supplied by the runtime environment."
  );
}

console.log("");
console.log(
  "MELKISM v6.32.0 Production Readiness"
);
console.log(
  "====================================="
);

for (
  const check of checks
) {
  console.log(
    `${check.passed ? "[PASS]" : "[BLOCKED]"} ${check.name} : ${check.message}`
  );
}

console.log("");
console.log(
  `Referenced environment variable names : ${environmentNames.size}`
);
console.log(
  "Environment values are never printed."
);
console.log("");

const failures =
  checks.filter(
    (check) =>
      !check.passed
  );

if (
  failures.length > 0
) {
  console.error(
    `${failures.length} blocker(s) found.`
  );

  process.exitCode = 1;
}
else {
  console.log(
    "Static production readiness : PASS"
  );
}
