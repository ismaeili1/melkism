
export interface AutonomousGovernanceOperationalMonitoringInput {

id:string;

strategy:string;

operation:string;

}



export interface AutonomousGovernanceOperationalMonitoringRecord {

id:string;

executionScore:number;

workflowScore:number;

monitoringScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


