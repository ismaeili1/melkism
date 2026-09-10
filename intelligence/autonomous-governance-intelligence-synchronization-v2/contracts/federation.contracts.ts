
export interface AutonomousGovernanceSynchronizationInput {

id:string;

sourceModules:string[];

targetModules:string[];

context:string;

}



export interface AutonomousGovernanceSynchronizationRecord {

id:string;

connectionScore:number;

communicationScore:number;

synchronizationScore:number;

controlScore:number;

confidence:number;

status:string;

createdAt:Date;

}


