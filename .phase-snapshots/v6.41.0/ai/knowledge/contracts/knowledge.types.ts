/**
 * MELKISM v6.40.0-R2
 * AI Knowledge Architecture Types
 */


export type KnowledgeDomain =
    | "real-estate"
    | "architecture"
    | "urban-intelligence"
    | "market-intelligence"
    | "built-environment";


export interface KnowledgeNode {

    id: string;

    domain: KnowledgeDomain;

    title: string;

    source?: string;

    confidence: number;

    createdAt: Date;
}


export interface KnowledgeRelation {

    from: string;

    to: string;

    relation:
        | "related"
        | "derived"
        | "validated"
        | "contradicted";
}
