import type { ApiVersion } from './api-version.types';
import { DEFAULT_API_VERSION } from './api-ecosystem.constants';

export function listApiVersions(apiId: string): ApiVersion[] {
  const now = new Date().toISOString();

  return [
    {
      apiId,
      version: DEFAULT_API_VERSION,
      status: 'current',
      releasedAt: now,
    },
  ];
}