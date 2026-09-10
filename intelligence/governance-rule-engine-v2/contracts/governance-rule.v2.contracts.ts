
export interface GovernanceRuleV2InputContract {

id:string;

ruleName:string;

conditions:string[];

actions:string[];

}



export interface GovernanceRuleV2RecordContract {

id:string;

ruleName:string;

evaluationScore:number;

enforcementScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceRuleV2EvaluationContract {

recordId:string;

ruleScore:number;

violationRisk:number;

feedback:string;

}

