export interface ArchitectureKnowledgeReference {
  id: string;
  projectId?: string;
  knowledgeNodeId?: string;
  sourceId?: string;
  relation:
    | "supports"
    | "contradicts"
    | "derived_from"
    | "related_to"
    | "benchmark"
    | "precedent";
  confidence: number;
  metadata?: Record<string, unknown>;
}