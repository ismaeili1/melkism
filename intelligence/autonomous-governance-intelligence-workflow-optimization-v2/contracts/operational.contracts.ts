
export interface AutonomousGovernanceWorkflowOptimizationInput {

id:string;

strategy:string;

operation:string;

}



export interface AutonomousGovernanceWorkflowOptimizationRecord {

id:string;

executionScore:number;

workflowScore:number;

monitoringScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


