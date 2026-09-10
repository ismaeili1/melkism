export interface ApiApplication {
  id: string;
  consumerId: string;
  name: string;
  description?: string;
  redirectUris: string[];
  requestedScopes: string[];
  status: 'draft' | 'active' | 'suspended' | 'revoked';
  createdAt: string;
  updatedAt: string;
}