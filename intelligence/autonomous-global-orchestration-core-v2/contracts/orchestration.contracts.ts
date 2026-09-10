
export interface AutonomousOrchestrationGlobalOrchestrationInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousOrchestrationGlobalOrchestrationRecord {

id:string;

orchestrationScore:number;

synchronizationScore:number;

resourceScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


