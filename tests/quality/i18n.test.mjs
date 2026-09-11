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

test("all four locales exist", () => {
  const source =
    read(
      "lib/i18n/config.ts"
    );

  for (
    const locale of [
      "\"fa\"",
      "\"en\"",
      "\"ar\"",
      "\"tr\"",
    ]
  ) {
    assert.ok(
      source.includes(locale),
      `Missing ${locale}`
    );
  }
});

test("RTL/LTR mapping is correct", () => {
  const source =
    read(
      "lib/i18n/config.ts"
    );

  assert.match(
    source,
    /fa:\s*"rtl"/
  );

  assert.match(
    source,
    /ar:\s*"rtl"/
  );

  assert.match(
    source,
    /en:\s*"ltr"/
  );

  assert.match(
    source,
    /tr:\s*"ltr"/
  );
});

test("translation dictionaries exist", () => {
  for (
    const locale of [
      "fa",
      "en",
      "ar",
      "tr",
    ]
  ) {
    const rel =
      `lib/i18n/messages/${locale}.ts`;

    assert.equal(
      fs.existsSync(
        path.join(root, rel)
      ),
      true
    );

    const source = read(rel);

    assert.match(
      source,
      /site\.name/
    );

    assert.match(
      source,
      /navigation\.news/
    );
  }
});

test("locale layout exposes language and direction", () => {
  const source =
    read(
      "app/[locale]/layout.tsx"
    );

  assert.match(
    source,
    /lang=\{typedLocale\}/
  );

  assert.match(
    source,
    /dir=\{localeDirection\[typedLocale\]\}/
  );

  assert.match(
    source,
    /generateMetadata/
  );
});
