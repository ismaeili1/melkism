
export interface AutonomousGovernanceUnderstandingInput {

id:string;

signals:string[];

context:string;

}



export interface AutonomousGovernanceUnderstandingRecord {

id:string;

awarenessScore:number;

perceptionScore:number;

understandingScore:number;

contextScore:number;

confidence:number;

status:string;

createdAt:Date;

}


