/**
 * MELKISM Semantic Reasoning Step Contract
 *
 * v0.8.2
 */


export interface SemanticReasoningStep {


 id:
 string;


 action:
 string;


 explanation:
 string;


 confidence:
 number;


 evidenceIds?:
 string[];

}

