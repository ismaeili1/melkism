import type { SourceRegistryEntry } from "./source.registry.types";
import { sourceCatalog } from "../catalog/source.catalog";

const registry: SourceRegistryEntry[] = [];

function registerCatalog(): void {
  for (const source of sourceCatalog) {
    if (!registry.some((item) => item.id === source.id)) {
      registry.push(source);
    }
  }
}

registerCatalog();

export function registerSource(source: SourceRegistryEntry): void {
  if (registry.some((item) => item.id === source.id)) {
    throw new Error(`Source already registered: ${source.id}`);
  }

  registry.push(source);
}

export function registerSources(
  sources: readonly SourceRegistryEntry[],
): void {
  for (const source of sources) {
    registerSource(source);
  }
}

export function getSourceById(
  id: string,
): SourceRegistryEntry | undefined {
  return registry.find((source) => source.id === id);
}

export function getSources(): readonly SourceRegistryEntry[] {
  return registry;
}

export function getActiveSources(): readonly SourceRegistryEntry[] {
  return registry.filter((source) => source.enabled);
}

export function getSourcesByLanguage(
  language: string,
): readonly SourceRegistryEntry[] {
  return registry.filter(
    (source) => source.language.primary === language,
  );
}

export function getSourcesByPriority(): readonly SourceRegistryEntry[] {
  return [...registry].sort(
    (a, b) => a.priority - b.priority,
  );
}

export function clearRegistry(): void {
  registry.length = 0;
  registerCatalog();
}