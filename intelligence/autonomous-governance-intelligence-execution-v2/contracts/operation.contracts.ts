
export interface AutonomousGovernanceExecutionInput {

id:string;

objective:string[];

context:string;

}



export interface AutonomousGovernanceExecutionRecord {

id:string;

planningScore:number;

strategyScore:number;

executionScore:number;

monitoringScore:number;

confidence:number;

status:string;

createdAt:Date;

}


