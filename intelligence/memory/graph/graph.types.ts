
export interface KnowledgeGraphNode {

    id: string;

    type: string;

    value: string;

}



export interface KnowledgeGraphRelationship {

    sourceId: string;

    targetId: string;

    relation: string;

    weight: number;

}



export interface KnowledgeGraphMemoryRecord {

    node: KnowledgeGraphNode;

    relationships: KnowledgeGraphRelationship[];

}



