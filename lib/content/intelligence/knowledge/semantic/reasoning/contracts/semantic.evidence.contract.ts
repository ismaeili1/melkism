/**
 * MELKISM Semantic Evidence Contract
 *
 * v0.8.2
 */


export interface SemanticEvidence {


 id:
 string;


 source:
 string;


 value:
 unknown;


 confidence:
 number;


 metadata?:
 Record<string,unknown>;

}

