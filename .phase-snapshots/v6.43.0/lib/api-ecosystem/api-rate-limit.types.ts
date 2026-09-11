export type RateLimitWindow = 'second' | 'minute' | 'hour' | 'day';

export interface ApiRateLimitPolicy {
  id: string;
  name: string;
  window: RateLimitWindow;
  limit: number;
  burst?: number;
  appliesTo: 'api' | 'endpoint' | 'consumer' | 'application';
  enabled: boolean;
}