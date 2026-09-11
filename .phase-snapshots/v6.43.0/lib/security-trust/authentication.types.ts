export type AuthenticationMethod =
  | "password"
  | "passkey"
  | "oauth"
  | "api_key"
  | "service_token"
  | "session"
  | "other";

export type AuthenticationStatus =
  | "success"
  | "failure"
  | "challenge"
  | "blocked";

export interface AuthenticationAttempt {
  id: string;
  identityId?: string;
  method: AuthenticationMethod;
  status: AuthenticationStatus;
  provider?: string;
  ipAddress?: string;
  userAgent?: string;
  occurredAt: string;
  metadata?: Record<string, unknown>;
}