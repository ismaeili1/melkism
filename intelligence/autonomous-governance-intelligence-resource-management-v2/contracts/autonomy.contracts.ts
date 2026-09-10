
export interface AutonomousGovernanceResourceManagementInput {

id:string;

resources:string[];

context:string;

}



export interface AutonomousGovernanceResourceManagementRecord {

id:string;

autonomyScore:number;

managementScore:number;

resourceScore:number;

lifecycleScore:number;

confidence:number;

status:string;

createdAt:Date;

}


