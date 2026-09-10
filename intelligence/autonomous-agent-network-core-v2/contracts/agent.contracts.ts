
export interface AutonomousAgentAgentNetworkInput {

id:string;

agentId:string;

objective:string;

context:string;

network:string;

}



export interface AutonomousAgentAgentNetworkRecord {

id:string;

networkScore:number;

communicationScore:number;

collaborationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


