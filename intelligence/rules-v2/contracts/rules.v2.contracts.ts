
export interface RulesV2InputContract {

id:string;

ruleContexts:string[];

ruleSignals:string[];

}



export interface RulesV2RecordContract {

id:string;

ruleName:string;

ruleScore:number;

validationScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface RulesV2EvaluationContract {

recordId:string;

consistencyScore:number;

riskScore:number;

feedback:string;

}

