export type ConstructionTaskStatus =
  | "not_started"
  | "in_progress"
  | "completed"
  | "delayed"
  | "blocked"
  | "cancelled";

export interface ConstructionTask {
  id: string;
  projectId: string;
  code?: string;
  name: string;
  status: ConstructionTaskStatus;
  plannedStart?: string;
  plannedEnd?: string;
  actualStart?: string;
  actualEnd?: string;
  progressPercent?: number;
  dependencies?: string[];
  responsiblePartyId?: string;
}

export interface ConstructionScheduleAssessment {
  projectId: string;
  totalTasks: number;
  completedTasks: number;
  delayedTasks: number;
  blockedTasks: number;
  overallProgressPercent: number;
  scheduleRisk: "low" | "medium" | "high" | "critical";
  observations: string[];
  assessedAt: string;
}