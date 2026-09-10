import type { ApiQuotaPolicy } from './api-quota.types';
import { DEFAULT_QUOTA_POLICY_ID } from './api-ecosystem.constants';

const policies: ApiQuotaPolicy[] = [
  {
    id: DEFAULT_QUOTA_POLICY_ID,
    name: 'Standard Monthly Request Quota',
    period: 'month',
    units: 100000,
    unitName: 'requests',
    appliesTo: 'application',
    enabled: true,
  },
  {
    id: 'quota-enterprise-monthly-v1',
    name: 'Enterprise Monthly Request Quota',
    period: 'month',
    units: 1000000,
    unitName: 'requests',
    appliesTo: 'application',
    enabled: true,
  },
];

export function listQuotaPolicies(): ApiQuotaPolicy[] {
  return [...policies];
}