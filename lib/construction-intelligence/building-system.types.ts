export type BuildingSystemCategory =
  | "structural"
  | "envelope"
  | "mechanical"
  | "electrical"
  | "plumbing"
  | "hvac"
  | "fire_safety"
  | "vertical_transport"
  | "automation"
  | "renewable_energy"
  | "landscape"
  | "other";

export interface BuildingSystem {
  id: string;
  projectId: string;
  category: BuildingSystemCategory;
  name: string;
  specification?: string;
  status?: "planned" | "procurement" | "installed" | "tested" | "commissioned";
  costEstimate?: number;
  currency?: string;
  metadata?: Record<string, unknown>;
}