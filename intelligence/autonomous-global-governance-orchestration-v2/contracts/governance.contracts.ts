
export interface AutonomousGovernanceGlobalGovernanceInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousGovernanceGlobalGovernanceRecord {

id:string;

governanceScore:number;

policyScore:number;

complianceScore:number;

orchestrationScore:number;

confidence:number;

status:string;

createdAt:Date;

}


