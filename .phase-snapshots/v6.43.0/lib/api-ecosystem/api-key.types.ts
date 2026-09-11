export interface ApiKeyMetadata {
  id: string;
  applicationId: string;
  label: string;
  keyPrefix: string;
  status: 'active' | 'revoked' | 'expired';
  scopes: string[];
  createdAt: string;
  expiresAt?: string;
  lastUsedAt?: string;
}