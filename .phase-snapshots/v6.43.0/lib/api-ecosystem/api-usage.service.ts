import type { ApiUsageRecord } from './api-usage.types';

const now = new Date().toISOString();

const usage: ApiUsageRecord[] = [
  {
    id: 'usage-sample-001',
    apiId: 'api-property-platform',
    endpointId: 'property-search',
    consumerId: 'consumer-internal',
    applicationId: 'app-internal-core',
    timestamp: now,
    statusCode: 200,
    durationMs: 18,
    units: 1,
    success: true,
  },
];

export function listUsage(): ApiUsageRecord[] {
  return [...usage];
}

export function getUsageSummary(): {
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  averageDurationMs: number;
} {
  if (usage.length === 0) {
    return {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      averageDurationMs: 0,
    };
  }

  const totalDuration = usage.reduce((sum, item) => sum + item.durationMs, 0);
  const successfulRequests = usage.filter((item) => item.success).length;

  return {
    totalRequests: usage.length,
    successfulRequests,
    failedRequests: usage.length - successfulRequests,
    averageDurationMs: Math.round(totalDuration / usage.length),
  };
}