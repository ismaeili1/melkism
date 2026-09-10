
export interface AutonomousGovernanceAdaptationInput {

id:string;

signals:string[];

context:string;

}



export interface AutonomousGovernanceAdaptationRecord {

id:string;

adaptationScore:number;

reflectionScore:number;

evaluationScore:number;

validationScore:number;

confidence:number;

status:string;

createdAt:Date;

}


