
export interface AutonomousGovernanceLifecycleManagementInput {

id:string;

resources:string[];

context:string;

}



export interface AutonomousGovernanceLifecycleManagementRecord {

id:string;

autonomyScore:number;

managementScore:number;

resourceScore:number;

lifecycleScore:number;

confidence:number;

status:string;

createdAt:Date;

}


