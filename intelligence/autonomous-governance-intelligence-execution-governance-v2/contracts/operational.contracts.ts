
export interface AutonomousGovernanceExecutionGovernanceInput {

id:string;

strategy:string;

operation:string;

}



export interface AutonomousGovernanceExecutionGovernanceRecord {

id:string;

executionScore:number;

workflowScore:number;

monitoringScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


