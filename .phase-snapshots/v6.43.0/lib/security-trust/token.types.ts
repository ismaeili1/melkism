export type TokenType =
  | "access"
  | "refresh"
  | "service"
  | "verification"
  | "reset"
  | "other";

export type TokenStatus =
  | "active"
  | "expired"
  | "revoked";

export interface TokenReference {
  id: string;
  identityId?: string;
  sessionId?: string;
  type: TokenType;
  status: TokenStatus;
  issuedAt: string;
  expiresAt?: string;
  revokedAt?: string;
  metadata?: Record<string, unknown>;
}