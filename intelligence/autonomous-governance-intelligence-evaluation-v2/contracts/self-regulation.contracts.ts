
export interface AutonomousGovernanceEvaluationInput {

id:string;

signals:string[];

context:string;

}



export interface AutonomousGovernanceEvaluationRecord {

id:string;

adaptationScore:number;

reflectionScore:number;

evaluationScore:number;

validationScore:number;

confidence:number;

status:string;

createdAt:Date;

}


