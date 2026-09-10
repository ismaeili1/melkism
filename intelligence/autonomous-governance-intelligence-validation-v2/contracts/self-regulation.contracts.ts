
export interface AutonomousGovernanceValidationInput {

id:string;

signals:string[];

context:string;

}



export interface AutonomousGovernanceValidationRecord {

id:string;

adaptationScore:number;

reflectionScore:number;

evaluationScore:number;

validationScore:number;

confidence:number;

status:string;

createdAt:Date;

}


