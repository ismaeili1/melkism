
export interface AutonomousGovernanceContextSharingInput {

id:string;

nodes:string[];

sharedContext:string;

}



export interface AutonomousGovernanceContextSharingRecord {

id:string;

awarenessScore:number;

contextScore:number;

reasoningScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


