
export interface AutonomousGovernancePerceptionInput {

id:string;

signals:string[];

context:string;

}



export interface AutonomousGovernancePerceptionRecord {

id:string;

awarenessScore:number;

perceptionScore:number;

understandingScore:number;

contextScore:number;

confidence:number;

status:string;

createdAt:Date;

}


