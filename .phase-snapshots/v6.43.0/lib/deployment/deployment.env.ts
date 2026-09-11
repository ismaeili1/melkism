/**
 * MELKISM v6.32.0
 *
 * Environment-name audit.
 *
 * Only environment variable names are inspected.
 * Environment variable values are never returned or logged.
 */

import fs from "node:fs";
import path from "node:path";

import type {
  DeploymentEnvironmentAudit,
} from "./deployment.types";

const SECRET_PATTERNS = [
  /SECRET/i,
  /TOKEN/i,
  /PASSWORD/i,
  /PRIVATE/i,
  /CREDENTIAL/i,
  /API_KEY/i,
];

const SOURCE_DIRECTORIES = [
  "app",
  "lib",
  "components",
];

function collectSourceFiles(
  directory: string
): string[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const results: string[] = [];

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

    if (entry.isDirectory()) {
      results.push(
        ...collectSourceFiles(fullPath)
      );

      continue;
    }

    if (
      /\.(ts|tsx|js|mjs)$/.test(
        entry.name
      )
    ) {
      results.push(fullPath);
    }
  }

  return results;
}

export function auditEnvironmentNames(
  rootDirectory: string
): DeploymentEnvironmentAudit {
  const names = new Set<string>();

  for (
    const relativeDirectory
      of SOURCE_DIRECTORIES
  ) {
    const absoluteDirectory =
      path.join(
        rootDirectory,
        relativeDirectory
      );

    for (
      const filePath
        of collectSourceFiles(
          absoluteDirectory
        )
    ) {
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
          names.add(name);
        }
      }
    }
  }

  const referencedVariables =
    Array.from(names).sort();

  const secretLikeVariables =
    referencedVariables.filter(
      (name) =>
        SECRET_PATTERNS.some(
          (pattern) =>
            pattern.test(name)
        )
    );

  return {
    referencedVariables,
    secretLikeVariables,
    hasLocalEnvFile:
      fs.existsSync(
        path.join(
          rootDirectory,
          ".env"
        )
      ),
    hasLocalEnvExample:
      fs.existsSync(
        path.join(
          rootDirectory,
          ".env.example"
        )
      ),
  };
}
