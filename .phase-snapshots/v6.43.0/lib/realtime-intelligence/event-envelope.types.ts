export interface EventEnvelope<T = unknown> {
  id: string;
  source: string;
  type: string;
  timestamp: string;
  payload: T;
}
