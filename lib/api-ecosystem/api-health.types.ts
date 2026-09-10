export interface ApiHealthCheck {
  apiId: string;
  status: 'healthy' | 'degraded' | 'unavailable';
  checkedAt: string;
  responseTimeMs: number;
  version: string;
  message?: string;
}