export interface ApiSubscription {
  id: string;
  applicationId: string;
  apiId: string;
  events: string[];
  status: 'active' | 'paused' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}