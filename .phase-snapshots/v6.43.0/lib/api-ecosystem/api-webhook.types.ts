export interface ApiWebhook {
  id: string;
  applicationId: string;
  eventType: string;
  endpointUrl: string;
  active: boolean;
  secretConfigured: boolean;
  retryPolicyId?: string;
  createdAt: string;
  updatedAt: string;
}