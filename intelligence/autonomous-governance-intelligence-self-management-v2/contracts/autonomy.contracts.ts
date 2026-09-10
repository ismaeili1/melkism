
export interface AutonomousGovernanceSelfManagementInput {

id:string;

resources:string[];

context:string;

}



export interface AutonomousGovernanceSelfManagementRecord {

id:string;

autonomyScore:number;

managementScore:number;

resourceScore:number;

lifecycleScore:number;

confidence:number;

status:string;

createdAt:Date;

}


