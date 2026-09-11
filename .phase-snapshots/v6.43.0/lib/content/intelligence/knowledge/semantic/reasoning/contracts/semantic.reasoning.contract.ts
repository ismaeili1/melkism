/**
 * MELKISM Semantic Reasoning Contract
 *
 * v0.8.2
 */


export interface SemanticReasoningContract {


 id:
 string;


 contextId:
 string;


 premise:
 Record<string,unknown>;


 inference:
 Record<string,unknown>;


 confidence:
 number;


 metadata?:
 Record<string,unknown>;

}



/**
 * Backward compatibility result model
 */


export interface SemanticReasoningResult {


 id:
 string;


 conclusion:
 string;


 confidence:
 number;


 evidence:
 unknown[];


 steps:
 unknown[];


 metadata?:
 Record<string,unknown>;

}

