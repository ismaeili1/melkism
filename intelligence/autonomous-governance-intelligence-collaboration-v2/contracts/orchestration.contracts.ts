
export interface AutonomousGovernanceCollaborationInput {

id:string;

agents:string[];

context:string;

}



export interface AutonomousGovernanceCollaborationRecord {

id:string;

coordinationScore:number;

collaborationScore:number;

agentScore:number;

orchestrationScore:number;

confidence:number;

status:string;

createdAt:Date;

}


