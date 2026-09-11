export interface ConstructionProgressSnapshot {
  projectId: string;
  recordedAt: string;
  progressPercent: number;
  completedWorkItems?: number;
  totalWorkItems?: number;
  reportedBy?: string;
  evidenceRefs?: string[];
  notes?: string;
}

export interface ConstructionProgressAssessment {
  projectId: string;
  currentProgressPercent: number;
  expectedProgressPercent?: number;
  scheduleDeltaPercent?: number;
  status:
    | "ahead"
    | "on_track"
    | "behind"
    | "critical"
    | "unknown";
  observations: string[];
  assessedAt: string;
}