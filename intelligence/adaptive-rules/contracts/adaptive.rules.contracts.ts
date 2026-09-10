
export interface AdaptiveRulesInputContract {

id:string;

intelligenceContexts:string[];

ruleSignals:string[];

}



export interface AdaptiveRulesRecordContract {

id:string;

ruleName:string;

ruleScore:number;

confidence:number;

createdAt:Date;

}



export interface AdaptiveRulesEvaluationContract {

recordId:string;

executionScore:number;

complianceScore:number;

feedback:string;

}

