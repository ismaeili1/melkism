import type { Source } from "../sources/source.types";
import type { SourceAdapter } from "./contracts/source.adapter";
import type { AdapterDescriptor, AdapterKind } from "./types/adapter.types";

export type RegisteredAdapter = {
  descriptor: AdapterDescriptor;
  adapter: SourceAdapter;
};

const registry: RegisteredAdapter[] = [];

export function registerAdapter(entry: RegisteredAdapter): void {
  if (registry.some((item) => item.descriptor.id === entry.descriptor.id)) {
    throw new Error(`Adapter already registered: ${entry.descriptor.id}`);
  }

  registry.push(entry);
}

export function getAdapterById(id: string): RegisteredAdapter | undefined {
  return registry.find((item) => item.descriptor.id === id);
}

export function getAdapters(): readonly RegisteredAdapter[] {
  return registry;
}

export function getAdaptersByKind(kind: AdapterKind): readonly RegisteredAdapter[] {
  return registry.filter((item) => item.descriptor.kind === kind);
}

export function findAdapterForSource(source: Source): RegisteredAdapter | undefined {
  return registry.find((item) => item.adapter.supports(source));
}