/**
 * MELKISM Semantic Explanation Contract
 *
 * v0.8.3
 */


export interface SemanticExplanationContract {


 id:
 string;


 reasoningId:
 string;


 summary:
 string;


 details:
 string[];


 confidence:
 number;


 metadata?:
 Record<string,unknown>;


}

