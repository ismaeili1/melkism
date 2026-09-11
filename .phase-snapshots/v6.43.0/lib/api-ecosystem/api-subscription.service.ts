import type { ApiSubscription } from './api-subscription.types';

const now = new Date().toISOString();

const subscriptions: ApiSubscription[] = [
  {
    id: 'subscription-foundation-events',
    applicationId: 'app-internal-core',
    apiId: 'api-property-platform',
    events: ['api.request.completed', 'api.request.failed'],
    status: 'active',
    createdAt: now,
    updatedAt: now,
  },
];

export function listSubscriptions(): ApiSubscription[] {
  return [...subscriptions];
}