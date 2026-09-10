export type ConstructionQualityStatus =
  | "planned"
  | "inspected"
  | "approved"
  | "rejected"
  | "corrective_action";

export interface ConstructionInspection {
  id: string;
  projectId: string;
  category: string;
  description: string;
  status: ConstructionQualityStatus;
  inspectorId?: string;
  inspectedAt?: string;
  findings?: string[];
  correctiveActions?: string[];
  evidenceRefs?: string[];
}

export interface ConstructionQualityAssessment {
  projectId: string;
  inspectedItems: number;
  approvedItems: number;
  rejectedItems: number;
  correctiveItems: number;
  qualityScore: number;
  observations: string[];
  assessedAt: string;
}