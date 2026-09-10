export interface SiteContext {
  latitude?: number;
  longitude?: number;
  elevation?: number;
  orientation?: number;
  landArea?: number;
  slopePercent?: number;
  surroundingUses?: string[];
  accessPoints?: string[];
  transportConnections?: string[];
  nearbyAmenities?: string[];
}

export interface SiteAnalysisResult {
  projectId: string;
  context: SiteContext;
  opportunities: string[];
  constraints: string[];
  risks: string[];
  confidence: number;
  analyzedAt: string;
}