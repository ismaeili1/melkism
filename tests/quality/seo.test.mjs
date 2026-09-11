import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root =
  process.cwd();

function read(relativePath) {
  return fs.readFileSync(
    path.join(
      root,
      relativePath
    ),
    "utf8"
  );
}

function exists(relativePath) {
  return fs.existsSync(
    path.join(
      root,
      relativePath
    )
  );
}

test(
  "SEO foundation files exist",
  () => {
    const files = [
      "lib/seo/seo.constants.ts",
      "lib/seo/seo.types.ts",
      "lib/seo/seo.metadata.ts",
      "lib/seo/seo.structured-data.ts",
      "lib/seo/index.ts",
      "app/sitemap.ts",
      "app/robots.ts",
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
  "SEO constants define canonical domain",
  () => {
    const source =
      read(
        "lib/seo/seo.constants.ts"
      );

    assert.ok(
      source.includes(
        "https://melkism.com"
      )
    );
  }
);

test(
  "SEO constants define all locales",
  () => {
    const source =
      read(
        "lib/seo/seo.constants.ts"
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
        `Missing locale ${locale}`
      );
    }
  }
);

test(
  "metadata engine exists",
  () => {
    const source =
      read(
        "lib/seo/seo.metadata.ts"
      );

    assert.ok(
      source.includes(
        "buildSeoMetadata"
      )
    );

    assert.ok(
      source.includes(
        "canonicalUrl"
      )
    );

    assert.ok(
      source.includes(
        "noIndex"
      )
    );
  }
);

test(
  "structured data uses Schema.org",
  () => {
    const source =
      read(
        "lib/seo/seo.structured-data.ts"
      );

    assert.ok(
      source.includes(
        "https://schema.org"
      )
    );

    assert.ok(
      source.includes(
        '"Organization"'
      )
    );

    assert.ok(
      source.includes(
        '"WebSite"'
      )
    );
  }
);

test(
  "sitemap is locale-aware",
  () => {
    const source =
      read(
        "app/sitemap.ts"
      );

    assert.ok(
      source.includes(
        "MetadataRoute.Sitemap"
      )
    );

    assert.ok(
      source.includes(
        "SEO_SUPPORTED_LOCALES"
      )
    );
  }
);

test(
  "robots exposes sitemap",
  () => {
    const source =
      read(
        "app/robots.ts"
      );

    assert.ok(
      source.includes(
        "MetadataRoute.Robots"
      )
    );

    assert.ok(
      source.includes(
        "SEO_SITEMAP_PATH"
      )
    );
  }
);

test(
  "locale layout exposes metadata generation",
  () => {
    const source =
      read(
        "app/[locale]/layout.tsx"
      );

    assert.ok(
      source.includes(
        "generateMetadata"
      )
    );
  }
);

test(
  "SEO layer has no Prisma dependency",
  () => {
    const files = [
      "lib/seo/seo.constants.ts",
      "lib/seo/seo.types.ts",
      "lib/seo/seo.metadata.ts",
      "lib/seo/seo.structured-data.ts",
      "lib/seo/index.ts",
    ];

    for (
      const file of files
    ) {
      const source =
        read(file);

      assert.doesNotMatch(
        source,
        /prisma/i
      );
    }
  }
);
