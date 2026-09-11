export type SecurityRiskCategory =
  | "authentication"
  | "authorization"
  | "fraud"
  | "account_abuse"
  | "credential"
  | "transaction"
  | "data"
  | "api"
  | "automation"
  | "other";

export interface SecurityRisk {
  id: string;
  subjectId?: string;
  category: SecurityRiskCategory;
  score: number;
  severity: "low" | "medium" | "high" | "critical";
  indicators: string[];
  recommendations?: string[];
  detectedAt: string;
}