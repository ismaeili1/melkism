import fs from 'fs';
import path from 'path';

const locales = ['fa', 'en', 'de', 'fr', 'es', 'it', 'tr', 'zh', 'ar', 'ru'];
const messagesDir = path.resolve(process.cwd(), 'messages');

function flatten(obj, prefix = '') {
  const out = {};
  for (const [k, v] of Object.entries(obj || {})) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(out, flatten(v, key));
    } else {
      out[key] = String(v);
    }
  }
  return out;
}

function getVars(str) {
  return [...str.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();
}

const data = Object.fromEntries(
  locales.map((loc) => {
    const filePath = path.join(messagesDir, `${loc}.json`);
    const raw = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
    return [loc, flatten(JSON.parse(raw))];
  })
);

const allKeys = new Set(locales.flatMap((loc) => Object.keys(data[loc])));
let hasError = false;

for (const key of allKeys) {
  const baseVars = getVars(data.en?.[key] || data.fa?.[key] || '');
  for (const loc of locales) {
    const val = data[loc]?.[key];
    if (val === undefined) {
      console.error(`Missing key "${key}" in ${loc}.json`);
      hasError = true;
      continue;
    }
    const locVars = getVars(val);
    if (JSON.stringify(baseVars) !== JSON.stringify(locVars)) {
      console.error(
        `Variable mismatch in ${loc}.json -> "${key}": expected [${baseVars.join(', ')}], got [${locVars.join(', ')}]`
      );
      hasError = true;
    }
  }
}

if (hasError) {
  process.exit(1);
} else {
  console.log(`All ${locales.length} locale files and ${allKeys.size} keys are valid and consistent.`);
}