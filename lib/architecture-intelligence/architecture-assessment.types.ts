export interface ArchitectureAssessment {
  projectId: string;
  score: number;
  confidence: number;
  categories: Record<string, number>;
  keyFindings: string[];
  recommendations: string[];
  assessedAt: string;
}