export interface ApiUsageRecord {
  id: string;
  apiId: string;
  endpointId?: string;
  consumerId?: string;
  applicationId?: string;
  timestamp: string;
  statusCode: number;
  durationMs: number;
  units: number;
  success: boolean;
}