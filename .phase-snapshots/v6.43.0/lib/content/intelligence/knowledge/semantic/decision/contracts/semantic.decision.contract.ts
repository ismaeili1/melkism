/**
 * MELKISM Semantic Decision Contract
 *
 * v0.8.1
 */


export interface SemanticDecisionRequest {

 id:
 string;


 contextId:
 string;


 query:
 string;


 signals?:
 Record<string,unknown>;

}



export interface SemanticDecisionResult {

 decision:
 string;


 confidence:
 number;


 metadata?:
 Record<string,unknown>;

}

