export type ReasoningDecision =

"insight"

|

"recommendation"

|

"warning";



export interface KnowledgeReasoningInput {


patternType:string;


confidence:number;


nodes:string[];


description:string;


}



export interface KnowledgeReasoningResult {


id:string;


decision:ReasoningDecision;


confidence:number;


insight:string;


nodes:string[];


createdAt:Date;


}

