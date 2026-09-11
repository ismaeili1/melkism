import type { ApiConsumer } from './api-consumer.types';

const now = new Date().toISOString();

const consumers: ApiConsumer[] = [
  {
    id: 'consumer-internal',
    name: 'MELKISM Internal Services',
    type: 'internal',
    status: 'active',
    allowedApis: [
      'property-platform',
      'transactions',
      'architecture-intelligence',
      'construction-intelligence',
      'smart-city-intelligence',
      'global-expansion',
    ],
    createdAt: now,
    updatedAt: now,
  },
];

export function listConsumers(): ApiConsumer[] {
  return [...consumers];
}

export function findConsumer(id: string): ApiConsumer | undefined {
  return consumers.find((item) => item.id === id);
}