export interface SpatialMetric {
  name: string;
  value: number;
  unit?: string;
  benchmark?: number;
}

export interface SpaceRecord {
  id: string;
  name: string;
  type: string;
  area?: number;
  capacity?: number;
  floor?: number;
  adjacencyIds?: string[];
  properties?: Record<string, unknown>;
}

export interface SpatialAnalysisResult {
  projectId: string;
  spaces: SpaceRecord[];
  metrics: SpatialMetric[];
  observations: string[];
  recommendations: string[];
  analyzedAt: string;
}