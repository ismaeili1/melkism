
export interface AutonomousGovernanceExecutionInput {

id:string;

strategy:string;

operation:string;

}



export interface AutonomousGovernanceExecutionRecord {

id:string;

executionScore:number;

workflowScore:number;

monitoringScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


