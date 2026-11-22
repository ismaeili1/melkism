import fs from 'fs';
import path from 'path';

const srcDir = path.resolve(process.cwd(), 'src');
const faPath = path.join(process.cwd(), 'messages', 'fa.json');

if (!fs.existsSync(faPath)) {
  console.error('Missing messages/fa.json');
  process.exit(1);
}

const faData = JSON.parse(
  fs.readFileSync(faPath, 'utf8').replace(/^\uFEFF/, '')
);

function walk(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(full));
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function getByPath(obj, dottedKey) {
  return dottedKey
    .split('.')
    .reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

let missingCount = 0;

for (const file of walk(srcDir)) {
  const content = fs.readFileSync(file, 'utf8');

  const hookNs = content.match(/(?:useTranslations|useLocalizedText)\(\s*['"]([^'"]+)['"]\s*\)/)?.[1];
  const serverStrNs = content.match(/getTranslations\(\s*['"]([^'"]+)['"]\s*\)/)?.[1];
  const serverObjNs = content.match(/getTranslations\(\s*\{[\s\S]*?namespace\s*:\s*['"]([^'"]+)['"][\s\S]*?\}\s*\)/)?.[1];

  const defaultNs = hookNs || serverStrNs || serverObjNs;

  const tMatches = [...content.matchAll(/\bt\(\s*['"]([^'"]+)['"]/g)];
  for (const m of tMatches) {
    const rawKey = m[1];
    const fullKey = defaultNs && !rawKey.includes('.') ? `${defaultNs}.${rawKey}` : rawKey;
    if (getByPath(faData, fullKey) === undefined) {
      console.warn(`Missing key "${fullKey}" referenced in: ${path.relative(process.cwd(), file)}`);
      missingCount++;
    }
  }
}

if (missingCount === 0) {
  console.log('All referenced translation keys in src/ exist in locale files.');
} else {
  process.exit(1);
}