export type RegulatoryDomain =
  | "property"
  | "transactions"
  | "privacy"
  | "data"
  | "construction"
  | "architecture"
  | "urban_planning"
  | "financial"
  | "tax"
  | "employment"
  | "marketing"
  | "other";

export interface RegulatoryContext {
  id: string;
  jurisdictionId: string;
  domain: RegulatoryDomain;
  title: string;
  summary?: string;
  sourceId?: string;
  effectiveFrom?: string;
  effectiveTo?: string;
  active: boolean;
  metadata?: Record<string, unknown>;
}