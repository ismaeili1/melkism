import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function absolute(
  relativePath
) {
  return path.join(
    root,
    relativePath
  );
}

function exists(
  relativePath
) {
  return fs.existsSync(
    absolute(relativePath)
  );
}

function read(
  relativePath
) {
  return fs.readFileSync(
    absolute(relativePath),
    "utf8"
  );
}

function packageJson() {
  return JSON.parse(
    read("package.json")
  );
}

test(
  "required deployment files exist",
  () => {
    const required = [
      "lib/deployment/deployment.constants.ts",
      "lib/deployment/deployment.types.ts",
      "lib/deployment/deployment.env.ts",
      "lib/deployment/deployment.readiness.ts",
      "lib/deployment/index.ts",
      "scripts/production-readiness.mjs",
    ];

    for (
      const relativePath
        of required
    ) {
      assert.equal(
        exists(relativePath),
        true,
        `Missing ${relativePath}`
      );
    }
  }
);

test(
  "deployment constants contain required paths",
  () => {
    const source =
      read(
        "lib/deployment/deployment.constants.ts"
      );

    assert.ok(
      source.includes(
        "melkism.com"
      )
    );

    assert.ok(
      source.includes(
        "/api/health"
      )
    );

    assert.ok(
      source.includes(
        "/api/ready"
      )
    );
  }
);

test(
  "package deployment command is registered",
  () => {
    const pkg =
      packageJson();

    assert.equal(
      pkg?.scripts?.["production:readiness"],
      "node scripts/production-readiness.mjs"
    );
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
      pkg?.scripts?.test,
      "node --test tests/quality/*.test.mjs"
    );
  }
);

test(
  "deployment environment module exports its audit",
  () => {
    const source =
      read(
        "lib/deployment/deployment.env.ts"
      );

    assert.ok(
      source.includes(
        "auditEnvironmentNames"
      )
    );

    assert.ok(
      source.includes(
        "DeploymentEnvironmentAudit"
      )
    );
  }
);

test(
  "deployment readiness module exports its report builder",
  () => {
    const source =
      read(
        "lib/deployment/deployment.readiness.ts"
      );

    assert.ok(
      source.includes(
        "buildDeploymentReadinessReport"
      )
    );

    assert.ok(
      source.includes(
        "DeploymentReadinessReport"
      )
    );
  }
);

test(
  "deployment readiness executable has required checks",
  () => {
    const source =
      read(
        "scripts/production-readiness.mjs"
      );

    assert.ok(
      source.includes(
        "requiredFiles"
      )
    );

    assert.ok(
      source.includes(
        "Static production readiness"
      )
    );
  }
);

test(
  "deployment files do not directly expose environment values",
  () => {
    const files = [
      "lib/deployment/deployment.env.ts",
      "lib/deployment/deployment.readiness.ts",
    ];

    const directOutput =
      /console\.(log|error)\s*\(\s*process\.env/i;

    for (
      const relativePath
        of files
    ) {
      assert.doesNotMatch(
        read(relativePath),
        directOutput,
        `Potential environment-value output in ${relativePath}`
      );
    }
  }
);

test(
  "deployment readiness module has no Prisma runtime dependency",
  () => {
    const source =
      read(
        "lib/deployment/deployment.readiness.ts"
      );

    assert.doesNotMatch(
      source,
      /from\s+["'][^"']*prisma[^"']*["']/i
    );
  }
);

test(
  "deployment documentation exists",
  () => {
    assert.equal(
      exists(
        "docs/deployment/v6.32.0/PRODUCTION-DEPLOYMENT-READINESS-v6.32.0.txt"
      ),
      true
    );
  }
);
