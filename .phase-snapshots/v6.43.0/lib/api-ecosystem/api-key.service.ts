import type { ApiKeyMetadata } from './api-key.types';

const now = new Date().toISOString();

const keyMetadata: ApiKeyMetadata[] = [
  {
    id: 'key-foundation-demo',
    applicationId: 'app-internal-core',
    label: 'Internal Core Metadata',
    keyPrefix: 'mk_live_',
    status: 'active',
    scopes: ['property.read', 'global.read'],
    createdAt: now,
  },
];

export function listApiKeyMetadata(): ApiKeyMetadata[] {
  return [...keyMetadata];
}

export function getApiKeyMetadata(id: string): ApiKeyMetadata | undefined {
  return keyMetadata.find((item) => item.id === id);
}