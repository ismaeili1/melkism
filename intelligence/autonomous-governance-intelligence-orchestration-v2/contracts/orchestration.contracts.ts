
export interface AutonomousGovernanceOrchestrationInput {

id:string;

agents:string[];

context:string;

}



export interface AutonomousGovernanceOrchestrationRecord {

id:string;

coordinationScore:number;

collaborationScore:number;

agentScore:number;

orchestrationScore:number;

confidence:number;

status:string;

createdAt:Date;

}


