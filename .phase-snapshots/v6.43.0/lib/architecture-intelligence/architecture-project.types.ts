export type ArchitectureProjectId = string;

export type ArchitectureProjectType =
  | "residential"
  | "commercial"
  | "hospitality"
  | "educational"
  | "healthcare"
  | "cultural"
  | "religious"
  | "industrial"
  | "institutional"
  | "mixed_use"
  | "urban_design"
  | "landscape"
  | "infrastructure"
  | "interior"
  | "other";

export type ArchitectureProjectStatus =
  | "draft"
  | "concept"
  | "schematic"
  | "design_development"
  | "documentation"
  | "construction"
  | "completed"
  | "renovation"
  | "archived";

export interface ArchitectureProject {
  id: ArchitectureProjectId;
  propertyId?: string;
  title: string;
  projectType: ArchitectureProjectType;
  status: ArchitectureProjectStatus;
  countryCode?: string;
  cityCode?: string;
  siteArea?: number;
  grossFloorArea?: number;
  yearStarted?: number;
  yearCompleted?: number;
  architectIds?: string[];
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}