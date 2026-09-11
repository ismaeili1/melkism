export type ApiConsumerType = 'internal' | 'partner' | 'developer' | 'enterprise';

export interface ApiConsumer {
  id: string;
  name: string;
  type: ApiConsumerType;
  organizationId?: string;
  contactEmail?: string;
  status: 'active' | 'suspended' | 'inactive';
  allowedApis: string[];
  createdAt: string;
  updatedAt: string;
}