
export interface AutonomousAgentAgentCoordinationInput {

id:string;

agentState:string;

networkContext:string;

objective:string;

}



export interface AutonomousAgentAgentCoordinationRecord {

id:string;

collaborationScore:number;

cognitionScore:number;

coordinationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


