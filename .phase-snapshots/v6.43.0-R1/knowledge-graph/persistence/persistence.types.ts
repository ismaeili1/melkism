/**
 * MELKISM v6.42.0
 * Knowledge Graph Persistence Contracts
 */

export type KnowledgeGraphNodeId =
    string;

export type KnowledgeGraphEdgeId =
    string;


export interface KnowledgeGraphNodeRecord {

    id:
        KnowledgeGraphNodeId;

    type:
        string;

    metadata:
        Record<string, unknown>;

    createdAt:
        Date;
}


export interface KnowledgeGraphEdgeRecord {

    id:
        KnowledgeGraphEdgeId;

    source:
        KnowledgeGraphNodeId;

    target:
        KnowledgeGraphNodeId;

    relation:
        string;
}

