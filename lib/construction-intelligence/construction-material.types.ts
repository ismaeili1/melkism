export type ConstructionMaterialCategory =
  | "concrete"
  | "steel"
  | "timber"
  | "masonry"
  | "glass"
  | "insulation"
  | "membrane"
  | "finish"
  | "recycled"
  | "bio_based"
  | "other";

export interface ConstructionMaterial {
  id: string;
  projectId: string;
  name: string;
  category: ConstructionMaterialCategory;
  quantity?: number;
  unit?: string;
  unitCost?: number;
  currency?: string;
  supplierId?: string;
  embodiedCarbon?: number;
  recycledContentPercent?: number;
  durabilityYears?: number;
  metadata?: Record<string, unknown>;
}