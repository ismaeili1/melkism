import type { ApiRateLimitPolicy } from './api-rate-limit.types';
import { DEFAULT_RATE_LIMIT_POLICY_ID } from './api-ecosystem.constants';

const policies: ApiRateLimitPolicy[] = [
  {
    id: DEFAULT_RATE_LIMIT_POLICY_ID,
    name: 'Standard API Rate Limit',
    window: 'minute',
    limit: 120,
    burst: 20,
    appliesTo: 'application',
    enabled: true,
  },
  {
    id: 'rl-enterprise-v1',
    name: 'Enterprise API Rate Limit',
    window: 'minute',
    limit: 1000,
    burst: 200,
    appliesTo: 'application',
    enabled: true,
  },
];

export function listRateLimitPolicies(): ApiRateLimitPolicy[] {
  return [...policies];
}