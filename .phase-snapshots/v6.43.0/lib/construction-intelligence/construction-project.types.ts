export type ConstructionProjectId = string;

export type ConstructionProjectType =
  | "new_build"
  | "renovation"
  | "retrofit"
  | "restoration"
  | "adaptive_reuse"
  | "infrastructure"
  | "landscape"
  | "interior"
  | "mixed_development"
  | "other";

export type ConstructionProjectStatus =
  | "planning"
  | "pre_construction"
  | "procurement"
  | "under_construction"
  | "commissioning"
  | "completed"
  | "on_hold"
  | "cancelled"
  | "archived";

export interface ConstructionProject {
  id: ConstructionProjectId;
  propertyId?: string;
  architectureProjectId?: string;
  title: string;
  projectType: ConstructionProjectType;
  status: ConstructionProjectStatus;
  countryCode?: string;
  cityCode?: string;
  plannedStartAt?: string;
  plannedEndAt?: string;
  actualStartAt?: string;
  actualEndAt?: string;
  budgetAmount?: number;
  currency?: string;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}