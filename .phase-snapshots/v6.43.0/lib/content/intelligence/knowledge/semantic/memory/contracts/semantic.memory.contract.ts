/**
 * MELKISM Semantic Intelligence Memory Contract
 *
 * v0.8.4
 */


export interface SemanticMemoryRecord {


id:
string;


reasoningId:
string;


contextId:
string;


content:
Record<string, unknown>;


createdAt:
Date;


metadata?:
Record<string, unknown>;

}

