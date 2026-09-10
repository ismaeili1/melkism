
export interface AutonomousGovernanceAutonomyInput {

id:string;

resources:string[];

context:string;

}



export interface AutonomousGovernanceAutonomyRecord {

id:string;

autonomyScore:number;

managementScore:number;

resourceScore:number;

lifecycleScore:number;

confidence:number;

status:string;

createdAt:Date;

}


