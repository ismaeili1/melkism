
export interface AutonomousGovernanceCoordinationInput {

id:string;

agents:string[];

context:string;

}



export interface AutonomousGovernanceCoordinationRecord {

id:string;

coordinationScore:number;

collaborationScore:number;

agentScore:number;

orchestrationScore:number;

confidence:number;

status:string;

createdAt:Date;

}


