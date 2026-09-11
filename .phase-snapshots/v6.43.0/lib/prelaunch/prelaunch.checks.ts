/**
 * MELKISM v6.35.0
 * Production acceptance and pre-launch audit engine.
 *
 * This module performs static/local checks only.
 * It does not connect to a production database or cloud provider.
 */

import fs from "node:fs";
import path from "node:path";

import type {
  PreLaunchAuditReport,
  PreLaunchGate,
} from "./prelaunch.types";

function exists(
  root: string,
  relativePath: string
): boolean {
  return fs.existsSync(
    path.join(
      root,
      relativePath
    )
  );
}

function read(
  root: string,
  relativePath: string
): string {
  return fs.readFileSync(
    path.join(
      root,
      relativePath
    ),
    "utf8"
  );
}

function pass(
  id: string,
  name: string,
  detail: string
): PreLaunchGate {
  return {
    id,
    name,
    status: "PASS",
    detail,
  };
}

function warning(
  id: string,
  name: string,
  detail: string
): PreLaunchGate {
  return {
    id,
    name,
    status: "WARNING",
    detail,
  };
}

function blocked(
  id: string,
  name: string,
  detail: string
): PreLaunchGate {
  return {
    id,
    name,
    status: "BLOCKED",
    detail,
  };
}

export function runPreLaunchAudit(
  rootDirectory: string
): PreLaunchAuditReport {
  const gates: PreLaunchGate[] = [];

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
    "lib/i18n/config.ts",
    "lib/seo/seo.constants.ts",
    "lib/accessibility/accessibility.constants.ts",
    "lib/deployment/deployment.constants.ts",
    "lib/security/security.constants.ts",
    "lib/observability/logger.ts",
    "lib/performance/cache.memory.ts",
    "lib/search/search.service.ts",
  ];

  const missingFiles =
    requiredFiles.filter(
      (relativePath) =>
        !exists(
          rootDirectory,
          relativePath
        )
    );

  if (missingFiles.length === 0) {
    gates.push(
      pass(
        "foundation",
        "Application foundation",
        "Required application, deployment, SEO, accessibility and backend foundation files exist."
      )
    );
  } else {
    gates.push(
      blocked(
        "foundation",
        "Application foundation",
        `Missing files: ${missingFiles.join(", ")}`
      )
    );
  }

  const nextConfig =
    read(
      rootDirectory,
      "next.config.ts"
    );

  const securityReady =
    nextConfig.includes(
      "Content-Security-Policy"
    ) &&
    nextConfig.includes(
      "Strict-Transport-Security"
    ) &&
    nextConfig.includes(
      "X-Frame-Options"
    ) &&
    nextConfig.includes(
      "X-Content-Type-Options"
    );

  if (securityReady) {
    gates.push(
      pass(
        "security",
        "Security baseline",
        "Security headers are represented in next.config.ts."
      )
    );
  } else {
    gates.push(
      blocked(
        "security",
        "Security baseline",
        "One or more required security headers are missing."
      )
    );
  }

  const health =
    read(
      rootDirectory,
      "app/api/health/route.ts"
    );

  const ready =
    read(
      rootDirectory,
      "app/api/ready/route.ts"
    );

  if (
    health.includes("no-store") &&
    ready.includes("no-store")
  ) {
    gates.push(
      pass(
        "operational",
        "Health and readiness",
        "Health and readiness endpoints use no-store behavior."
      )
    );
  } else {
    gates.push(
      blocked(
        "operational",
        "Health and readiness",
        "Health/readiness no-store contract is incomplete."
      )
    );
  }

  const locales =
    read(
      rootDirectory,
      "lib/i18n/config.ts"
    );

  if (
    locales.includes('"fa"') &&
    locales.includes('"en"') &&
    locales.includes('"ar"') &&
    locales.includes('"tr"')
  ) {
    gates.push(
      pass(
        "i18n",
        "Internationalization",
        "All four supported locales are represented."
      )
    );
  } else {
    gates.push(
      blocked(
        "i18n",
        "Internationalization",
        "One or more supported locales are missing."
      )
    );
  }

  const localeLayout =
    read(
      rootDirectory,
      "app/[locale]/layout.tsx"
    );

  if (
    localeLayout.includes("lang=") &&
    localeLayout.includes("dir=") &&
    localeLayout.includes("<main") &&
    localeLayout.includes("generateMetadata")
  ) {
    gates.push(
      pass(
        "ux",
        "International UX and accessibility",
        "Locale layout contains language, direction, main-content and metadata contracts."
      )
    );
  } else {
    gates.push(
      blocked(
        "ux",
        "International UX and accessibility",
        "Locale layout accessibility/international UX contract is incomplete."
      )
    );
  }

  const seoConstants =
    read(
      rootDirectory,
      "lib/seo/seo.constants.ts"
    );

  const sitemap =
    read(
      rootDirectory,
      "app/sitemap.ts"
    );

  const robots =
    read(
      rootDirectory,
      "app/robots.ts"
    );

  if (
    seoConstants.includes(
      "https://melkism.com"
    ) &&
    sitemap.includes(
      "MetadataRoute.Sitemap"
    ) &&
    robots.includes(
      "MetadataRoute.Robots"
    )
  ) {
    gates.push(
      pass(
        "seo",
        "SEO foundation",
        "Domain, sitemap and robots contracts are present."
      )
    );
  } else {
    gates.push(
      blocked(
        "seo",
        "SEO foundation",
        "SEO domain/sitemap/robots contract is incomplete."
      )
    );
  }

  const deploymentConstants =
    read(
      rootDirectory,
      "lib/deployment/deployment.constants.ts"
    );

  const readinessScript =
    exists(
      rootDirectory,
      "scripts/production-readiness.mjs"
    );

  if (
    deploymentConstants.includes(
      "/api/health"
    ) &&
    deploymentConstants.includes(
      "/api/ready"
    ) &&
    readinessScript
  ) {
    gates.push(
      pass(
        "deployment",
        "Deployment readiness",
        "Production health, readiness and deployment contracts exist."
      )
    );
  } else {
    gates.push(
      blocked(
        "deployment",
        "Deployment readiness",
        "Deployment readiness foundation is incomplete."
      )
    );
  }

  const observability =
    read(
      rootDirectory,
      "lib/observability/logger.ts"
    );

  const redaction =
    read(
      rootDirectory,
      "lib/observability/redaction.ts"
    );

  if (
    observability.includes(
      "JSON.stringify"
    ) &&
    redaction.includes(
      "[REDACTED]"
    )
  ) {
    gates.push(
      pass(
        "observability",
        "Observability and redaction",
        "Structured logging and redaction foundations exist."
      )
    );
  } else {
    gates.push(
      blocked(
        "observability",
        "Observability and redaction",
        "Structured logging/redaction foundation is incomplete."
      )
    );
  }

  const performance =
    read(
      rootDirectory,
      "lib/performance/cache.memory.ts"
    );

  if (
    performance.includes(
      "maxEntries"
    ) &&
    performance.includes(
      "expiresAt"
    )
  ) {
    gates.push(
      pass(
        "performance",
        "Performance foundation",
        "Bounded cache and expiration controls exist."
      )
    );
  } else {
    gates.push(
      blocked(
        "performance",
        "Performance foundation",
        "Bounded cache controls are incomplete."
      )
    );
  }

  const search =
    read(
      rootDirectory,
      "app/api/v1/search/route.ts"
    );

  if (
    search.includes(
      "getAuthorizationContext"
    ) &&
    search.includes(
      "checkRateLimit"
    ) &&
    search.includes(
      "parseSearchInput"
    )
  ) {
    gates.push(
      pass(
        "search",
        "Search API security contract",
        "Search API contains authorization, rate limiting and bounded-input delegation."
      )
    );
  } else {
    gates.push(
      blocked(
        "search",
        "Search API security contract",
        "Search API contract is incomplete."
      )
    );
  }

  const packageData =
    JSON.parse(
      read(
        rootDirectory,
        "package.json"
      )
    );

  const scripts =
    packageData?.scripts ?? {};

  if (
    scripts.build ===
      "next build" &&
    scripts.start ===
      "next start" &&
    typeof scripts.test ===
      "string" &&
    scripts["production:readiness"] ===
      "node scripts/production-readiness.mjs"
  ) {
    gates.push(
      pass(
        "scripts",
        "Production commands",
        "Build, start, test and production-readiness commands are registered."
      )
    );
  } else {
    gates.push(
      blocked(
        "scripts",
        "Production commands",
        "One or more required production commands are missing or changed."
      )
    );
  }

  const schema =
    read(
      rootDirectory,
      "prisma/schema.prisma"
    );

  if (
    schema.length > 0
  ) {
    gates.push(
      pass(
        "database",
        "Database foundation",
        "Prisma schema exists. Runtime connectivity is intentionally not tested by this phase."
      )
    );
  } else {
    gates.push(
      blocked(
        "database",
        "Database foundation",
        "Prisma schema is empty."
      )
    );
  }

  gates.push(
    warning(
      "runtime",
      "Production runtime verification",
      "Real production infrastructure, DNS, TLS, runtime secrets and external service connectivity are intentionally deferred to the deployment phases."
    )
  );

  gates.push(
    warning(
      "content",
      "Production content readiness",
      "Real production content, editorial data and knowledge activation are validated in later activation phases."
    )
  );

  gates.push(
    warning(
      "external",
      "External indexing and analytics",
      "Search-engine indexing, analytics and external monitoring activation are validated after production deployment."
    )
  );

  const passCount =
    gates.filter(
      (gate) =>
        gate.status === "PASS"
    ).length;

  const warningCount =
    gates.filter(
      (gate) =>
        gate.status === "WARNING"
    ).length;

  const blockedCount =
    gates.filter(
      (gate) =>
        gate.status === "BLOCKED"
    ).length;

  return {
    phase:
      "v6.35.0",

    stage:
      "pre-release-candidate",

    generatedAt:
      new Date().toISOString(),

    overall:
      blockedCount > 0
        ? "BLOCKED"
        : warningCount > 0
          ? "WARNING"
          : "PASS",

    gates,

    summary: {
      pass:
        passCount,
      warning:
        warningCount,
      blocked:
        blockedCount,
    },
  };
}
