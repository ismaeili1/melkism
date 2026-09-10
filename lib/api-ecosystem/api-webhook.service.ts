import type { ApiWebhook } from './api-webhook.types';

const now = new Date().toISOString();

const webhooks: ApiWebhook[] = [
  {
    id: 'webhook-foundation-health',
    applicationId: 'app-internal-core',
    eventType: 'api.health.changed',
    endpointUrl: 'https://example.invalid/melkism/webhooks/health',
    active: false,
    secretConfigured: false,
    createdAt: now,
    updatedAt: now,
  },
];

export function listWebhooks(): ApiWebhook[] {
  return [...webhooks];
}