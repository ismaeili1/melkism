import type { ApiHealthCheck } from './api-health.types';
import { listApis } from './api.registry';

export function getApiHealth(): ApiHealthCheck[] {
  const now = new Date().toISOString();

  return listApis().map((api): ApiHealthCheck => ({
    apiId: api.id,
    status: api.status === 'active' ? 'healthy' : 'degraded',
    checkedAt: now,
    responseTimeMs: 0,
    version: api.version,
    message: 'Foundation health state; no external probe executed.',
  }));
}