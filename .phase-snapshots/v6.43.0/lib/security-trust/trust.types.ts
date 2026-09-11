export type VerificationType =
  | "email"
  | "phone"
  | "identity"
  | "organization"
  | "professional"
  | "property"
  | "document"
  | "source"
  | "other";

export type VerificationStatus =
  | "pending"
  | "verified"
  | "rejected"
  | "expired"
  | "revoked";

export interface VerificationRecord {
  id: string;
  identityId?: string;
  type: VerificationType;
  status: VerificationStatus;
  confidence: number;
  verifiedAt?: string;
  expiresAt?: string;
  verifier?: string;
  evidenceRefs?: string[];
  metadata?: Record<string, unknown>;
}

export interface TrustScore {
  subjectId: string;
  score: number;
  confidence: number;
  factors: string[];
  calculatedAt: string;
}