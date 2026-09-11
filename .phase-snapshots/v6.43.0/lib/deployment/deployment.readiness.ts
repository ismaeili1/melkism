/**
 * MELKISM v6.32.0
 * Static production-readiness checks.
 */

import fs from "node:fs";
import path from "node:path";

import {
  DEPLOYMENT_DEFAULT_LOCALE,
  DEPLOYMENT_DOMAIN,
  DEPLOYMENT_HEALTH_PATH,
  DEPLOYMENT_READY_PATH,
} from "./deployment.constants";

import type {
  DeploymentCheck,
  DeploymentReadinessReport,
} from "./deployment.types";

import {
  auditEnvironmentNames,
} from "./deployment.env";

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

function requiredCheck(
  name: string,
  passed: boolean,
  message: string
): DeploymentCheck {
  return {
    name,
    level:
      passed
        ? "ready"
        : "blocked",
    message,
  };
}

function warningCheck(
  name: string,
  message: string
): DeploymentCheck {
  return {
    name,
    level: "warning",
    message,
  };
}

export function buildDeploymentReadinessReport(
  rootDirectory: string
): DeploymentReadinessReport {
  const checks: DeploymentCheck[] = [];

  checks.push(
    requiredCheck(
      "package.json",
      exists(
        rootDirectory,
        "package.json"
      ),
      "package manifest exists"
    )
  );

  checks.push(
    requiredCheck(
      "next configuration",
      exists(
        rootDirectory,
        "next.config.ts"
      ),
      "next.config.ts exists"
    )
  );

  checks.push(
    requiredCheck(
      "proxy",
      exists(
        rootDirectory,
        "proxy.ts"
      ),
      "proxy.ts exists"
    )
  );

  checks.push(
    requiredCheck(
      "health endpoint",
      exists(
        rootDirectory,
        "app/api/health/route.ts"
      ),
      DEPLOYMENT_HEALTH_PATH +
        " exists"
    )
  );

  checks.push(
    requiredCheck(
      "readiness endpoint",
      exists(
        rootDirectory,
        "app/api/ready/route.ts"
      ),
      DEPLOYMENT_READY_PATH +
        " exists"
    )
  );

  checks.push(
    requiredCheck(
      "Prisma configuration",
      exists(
        rootDirectory,
        "prisma.config.ts"
      ),
      "prisma.config.ts exists"
    )
  );

  checks.push(
    requiredCheck(
      "Prisma schema",
      exists(
        rootDirectory,
        "prisma/schema.prisma"
      ),
      "Prisma schema exists"
    )
  );

  checks.push(
    requiredCheck(
      "localized layout",
      exists(
        rootDirectory,
        "app/[locale]/layout.tsx"
      ),
      "localized layout exists"
    )
  );

  const packageData =
    JSON.parse(
      read(
        rootDirectory,
        "package.json"
      )
    );

  checks.push(
    requiredCheck(
      "build script",
      packageData?.scripts?.build ===
        "next build",
      "next build"
    )
  );

  checks.push(
    requiredCheck(
      "start script",
      packageData?.scripts?.start ===
        "next start",
      "next start"
    )
  );

  const nextConfig =
    read(
      rootDirectory,
      "next.config.ts"
    );

  checks.push(
    requiredCheck(
      "security headers",
      nextConfig.includes(
        "Content-Security-Policy"
      ) &&
      nextConfig.includes(
        "Strict-Transport-Security"
      ),
      "security headers present"
    )
  );

  checks.push(
    requiredCheck(
      "API no-store",
      nextConfig.includes(
        'source: "/api/:path*"'
      ) &&
      nextConfig.includes(
        "no-store"
      ),
      "API no-store policy present"
    )
  );

  const rootPage =
    read(
      rootDirectory,
      "app/page.tsx"
    );

  checks.push(
    requiredCheck(
      "default locale",
      rootPage.includes(
        'redirect("/fa")'
      ),
      "fa redirect present"
    )
  );

  const envAudit =
    auditEnvironmentNames(
      rootDirectory
    );

  if (
    envAudit.hasLocalEnvFile
  ) {
    checks.push(
      warningCheck(
        "local .env",
        "Local .env exists. Production secrets must be injected through the runtime environment."
      )
    );
  }

  if (
    !envAudit.hasLocalEnvExample
  ) {
    checks.push(
      warningCheck(
        "environment example",
        "No .env.example file was found."
      )
    );
  }

  checks.push(
    warningCheck(
      "runtime secrets",
      "Secret values are intentionally not inspected."
    )
  );

  checks.push(
    warningCheck(
      "database connectivity",
      "Database connectivity is intentionally outside the static readiness phase."
    )
  );

  checks.push(
    warningCheck(
      "cloud provider",
      `Provider-neutral deployment foundation for ${DEPLOYMENT_DOMAIN}.`
    )
  );

  const ready =
    checks.filter(
      (item) =>
        item.level === "ready"
    ).length;

  const warning =
    checks.filter(
      (item) =>
        item.level === "warning"
    ).length;

  const blocked =
    checks.filter(
      (item) =>
        item.level === "blocked"
    ).length;

  return {
    level:
      blocked > 0
        ? "blocked"
        : "ready",

    generatedAt:
      new Date().toISOString(),

    checks,

    summary: {
      ready,
      warning,
      blocked,
    },
  };
}
