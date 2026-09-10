
export interface KnowledgePriorityRecord {

    id: string;

    knowledgeId: string;

    priorityScore: number;

    importance: number;

    relevance: number;

    createdAt: Date;

}


export type KnowledgePriorityLevel =
    | "low"
    | "medium"
    | "high"
    | "critical";


