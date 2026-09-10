export interface RuleEvaluationContext {


facts:string[];


condition:string;


createdAt:Date;


}



export interface RuleEvaluationResult {


ruleId:string;


matched:boolean;


confidence:number;


reason:string;


createdAt:Date;


}



export interface InferenceEvaluation {


evaluations:RuleEvaluationResult[];


confidence:number;


createdAt:Date;


}

