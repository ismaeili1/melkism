import type { ApiRecord } from './api.types';

export function normalizeApiKey(value: string): string {
  return value.trim().toLowerCase();
}

export function buildApiResourceUrl(api: ApiRecord): string {
  return api.basePath;
}

export function isApiPublic(api: ApiRecord): boolean {
  return api.visibility === 'public';
}

export function getApiSummary(api: ApiRecord): {
  id: string;
  key: string;
  version: string;
  status: string;
  visibility: string;
  basePath: string;
} {
  return {
    id: api.id,
    key: api.key,
    version: api.version,
    status: api.status,
    visibility: api.visibility,
    basePath: buildApiResourceUrl(api),
  };
}