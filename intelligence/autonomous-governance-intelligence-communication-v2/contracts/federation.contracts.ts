
export interface AutonomousGovernanceCommunicationInput {

id:string;

sourceModules:string[];

targetModules:string[];

context:string;

}



export interface AutonomousGovernanceCommunicationRecord {

id:string;

connectionScore:number;

communicationScore:number;

synchronizationScore:number;

controlScore:number;

confidence:number;

status:string;

createdAt:Date;

}


