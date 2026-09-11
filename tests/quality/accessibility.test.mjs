import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import assert from "node:assert/strict";
import test from "node:test";

const root = process.cwd();

function read(relativePath) {
  return readFileSync(
    resolve(root, relativePath),
    "utf8"
  );
}

test("canonical locales and directions remain intact", () => {
  const source = read("lib/i18n/config.ts");

  assert.match(
    source,
    /\["fa",\s*"en",\s*"ar",\s*"tr"\]/
  );

  assert.match(source, /fa:\s*"rtl"/);
  assert.match(source, /en:\s*"ltr"/);
  assert.match(source, /ar:\s*"rtl"/);
  assert.match(source, /tr:\s*"ltr"/);
});

test("root HTML exposes MELKISM language direction baseline", () => {
  const source = read("app/layout.tsx");

  assert.match(
    source,
    /<html[\s\S]*lang="fa"/
  );

  assert.match(source, /dir="rtl"/);
  assert.match(source, /SEO_DEFAULT_TITLE/);

  assert.doesNotMatch(
    source,
    /Create Next App/
  );
});

test("locale layout exposes skip navigation and main landmark", () => {
  const source = read(
    "app/[locale]/layout.tsx"
  );

  assert.match(
    source,
    /melkism-skip-link/
  );

  assert.match(
    source,
    /href="#main-content"/
  );

  assert.match(
    source,
    /id="main-content"/
  );

  assert.match(
    source,
    /tabIndex=\{-1\}/
  );
});

test("global stylesheet exposes visible focus and reduced motion support", () => {
  const source = read("app/globals.css");

  assert.match(
    source,
    /:focus-visible/
  );

  assert.match(
    source,
    /\.melkism-skip-link/
  );

  assert.match(
    source,
    /prefers-reduced-motion/
  );
});

test("desktop navigation has localized accessible name", () => {
  const source = read(
    "components/navigation/DesktopNavigation.tsx"
  );

  assert.match(
    source,
    /primaryNavLabels/
  );

  assert.match(
    source,
    /aria-label=\{primaryNavLabels\[locale\]\}/
  );
});

test("mobile navigation uses native accessible disclosure", () => {
  const source = read(
    "components/navigation/MobileNavigation.tsx"
  );

  assert.match(
    source,
    /<details>/
  );

  assert.match(
    source,
    /<summary>/
  );

  assert.match(
    source,
    /navigationItems\.map/
  );

  assert.doesNotMatch(
    source,
    /<button>/
  );
});

test("language switcher preserves multilingual semantics", () => {
  const source = read(
    "components/navigation/LanguageSwitcher.tsx"
  );

  assert.match(
    source,
    /hrefLang=\{targetLocale\}/
  );

  assert.match(
    source,
    /aria-current=/
  );

  assert.match(
    source,
    /languageNavLabels/
  );
});

test("header search action has localized accessible name", () => {
  const source = read(
    "components/navigation/HeaderActions.tsx"
  );

  assert.match(
    source,
    /searchLabels/
  );

  assert.match(
    source,
    /aria-label=\{label\}/
  );
});

test("SearchResult resolves through canonical nested module", () => {
  const source = read(
    "components/search/index.ts"
  );

  assert.match(
    source,
    /export\s+\{\s*SearchResult\s*\}\s+from\s+"\.\/SearchResult\/index";/
  );

  assert.doesNotMatch(
    source,
    /export\s+\*\s+from\s+"\.\/SearchResult";/
  );
});

test("CommonJS legacy utilities are scoped by ESLint config", () => {
  const source = read("eslint.config.mjs");

  assert.match(
    source,
    /"zero-byte-audit\.js"/
  );

  assert.match(
    source,
    /"zero-byte-active-audit\.js"/
  );

  assert.match(
    source,
    /"zero-byte-classifier\.js"/
  );

  assert.match(
    source,
    /"@typescript-eslint\/no-require-imports":\s*"off"/
  );

  assert.match(
    source,
    /"\.phase-snapshots\/\*\*"/
  );
});
