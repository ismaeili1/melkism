
export interface AutonomousGovernanceMultiAgentInput {

id:string;

agents:string[];

context:string;

}



export interface AutonomousGovernanceMultiAgentRecord {

id:string;

coordinationScore:number;

collaborationScore:number;

agentScore:number;

orchestrationScore:number;

confidence:number;

status:string;

createdAt:Date;

}


