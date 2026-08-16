import type { SourceLanguage } from "../source.types";
import type { SourceType } from "../source.constants";

export type SourceRegistryEntry = {
  id: string;
  name: string;
  language: SourceLanguage;
  type: SourceType;
  url: string;
  enabled: boolean;
  priority: number;
};

export type SourceRegistryRecord = SourceRegistryEntry;

export type SourceRegistry = {
  version: string;
  updatedAt: string;
  sources: SourceRegistryEntry[];
};