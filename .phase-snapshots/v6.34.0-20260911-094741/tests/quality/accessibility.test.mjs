import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

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

test(
  "accessibility foundation files exist",
  () => {
    const files = [
      "lib/accessibility/accessibility.constants.ts",
      "lib/accessibility/accessibility.types.ts",
      "lib/accessibility/accessibility.rules.ts",
      "lib/accessibility/accessibility.i18n.ts",
      "lib/accessibility/index.ts",
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
  "RTL and LTR locale contracts are complete",
  () => {
    const constants =
      read(
        "lib/accessibility/accessibility.constants.ts"
      );

    const required = [
      '"fa"',
      '"en"',
      '"ar"',
      '"tr"',
    ];

    for (
      const token of required
    ) {
      assert.ok(
        constants.includes(token),
        `Missing locale ${token}`
      );
    }

    assert.ok(
      constants.includes(
        "ACCESSIBILITY_RTL_LOCALES"
      )
    );

    assert.ok(
      constants.includes(
        "ACCESSIBILITY_LTR_LOCALES"
      )
    );
  }
);

test(
  "accessibility wording exists for all locales",
  () => {
    const source =
      read(
        "lib/accessibility/accessibility.i18n.ts"
      );

    for (
      const token of [
        "fa:",
        "en:",
        "ar:",
        "tr:",
        "skipToContent",
        "mainNavigation",
        "languageSelection",
        "openMenu",
        "closeMenu",
      ]
    ) {
      assert.ok(
        source.includes(token),
        `Missing ${token}`
      );
    }
  }
);

test(
  "locale application exposes lang and dir",
  () => {
    const source =
      read(
        "app/[locale]/layout.tsx"
      );

    assert.match(
      source,
      /lang=/
    );

    assert.match(
      source,
      /dir=/
    );

    assert.match(
      source,
      /<main/
    );
  }
);

test(
  "locale application exposes metadata",
  () => {
    const source =
      read(
        "app/[locale]/layout.tsx"
      );

    assert.match(
      source,
      /generateMetadata/
    );
  }
);

test(
  "SEO locale foundation is aligned",
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
        `Missing ${locale}`
      );
    }
  }
);

test(
  "accessibility layer has no browser storage",
  () => {
    const files = [
      "lib/accessibility/accessibility.constants.ts",
      "lib/accessibility/accessibility.types.ts",
      "lib/accessibility/accessibility.rules.ts",
      "lib/accessibility/accessibility.i18n.ts",
      "lib/accessibility/index.ts",
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
  "accessibility layer has no Prisma dependency",
  () => {
    const files = [
      "lib/accessibility/accessibility.constants.ts",
      "lib/accessibility/accessibility.types.ts",
      "lib/accessibility/accessibility.rules.ts",
      "lib/accessibility/accessibility.i18n.ts",
      "lib/accessibility/index.ts",
    ];

    for (
      const file of files
    ) {
      assert.doesNotMatch(
        read(file),
        /prisma/i
      );
    }
  }
);

test(
  "accessibility layer has no dynamic code execution",
  () => {
    const files = [
      "lib/accessibility/accessibility.constants.ts",
      "lib/accessibility/accessibility.types.ts",
      "lib/accessibility/accessibility.rules.ts",
      "lib/accessibility/accessibility.i18n.ts",
      "lib/accessibility/index.ts",
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
        /new Function\s*\(/
      );
    }
  }
);

test(
  "accessibility navigation surfaces exist",
  () => {
    assert.equal(
      exists(
        "components/navigation/DesktopNavigation.tsx"
      ),
      true
    );

    assert.equal(
      exists(
        "components/navigation/LanguageSwitcher.tsx"
      ),
      true
    );
  }
);
