export const API_ECOSYSTEM_PHASE = '2.93';

export const API_ECOSYSTEM_VERSION = 'v2.93.0';

export const API_ECOSYSTEM_DOMAIN = 'api-ecosystem';

export const DEFAULT_API_VERSION = 'v1';

export const DEFAULT_RATE_LIMIT_POLICY_ID = 'rl-standard-v1';

export const DEFAULT_QUOTA_POLICY_ID = 'quota-standard-monthly-v1';

export const API_EVENTS = [
  'api.request.completed',
  'api.request.failed',
  'api.application.updated',
  'api.subscription.updated',
  'api.health.changed',
] as const;