import type { SourceAccessMethod } from "../../sources/source.constants";

export type AdapterKind =
  | "rss"
  | "atom"
  | "web"
  | "api"
  | "manual";

export type AdapterStatus =
  | "available"
  | "disabled"
  | "experimental";

export type AdapterCapability =
  | "fetch"
  | "parse"
  | "normalize"
  | "provenance";

export type AdapterDescriptor = {
  id: string;
  name: string;
  version: string;
  kind: AdapterKind;
  accessMethod: SourceAccessMethod;
  status: AdapterStatus;
  capabilities: AdapterCapability[];
  description?: string;
};