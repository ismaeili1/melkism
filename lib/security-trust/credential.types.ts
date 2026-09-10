export type CredentialType =
  | "password"
  | "passkey"
  | "oauth"
  | "api_key"
  | "service_token"
  | "session_token"
  | "other";

export type CredentialStatus =
  | "active"
  | "expired"
  | "revoked"
  | "disabled";

export interface CredentialReference {
  id: string;
  identityId: string;
  type: CredentialType;
  status: CredentialStatus;
  provider?: string;
  createdAt: string;
  expiresAt?: string;
  lastUsedAt?: string;
  metadata?: Record<string, unknown>;
}