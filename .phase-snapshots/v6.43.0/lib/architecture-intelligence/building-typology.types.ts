export interface BuildingTypology {
  code: string;
  name: string;
  category: string;
  description?: string;
  parentCode?: string;
  active: boolean;
}

export interface TypologyClassification {
  projectId: string;
  primaryType: string;
  secondaryTypes?: string[];
  confidence: number;
  rationale?: string[];
}