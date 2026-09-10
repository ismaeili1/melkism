
export interface AutonomousGovernancePolicyOptimizationInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousGovernancePolicyOptimizationRecord {

id:string;

governanceScore:number;

policyScore:number;

complianceScore:number;

orchestrationScore:number;

confidence:number;

status:string;

createdAt:Date;

}


