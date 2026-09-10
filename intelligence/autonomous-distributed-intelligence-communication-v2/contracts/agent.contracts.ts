
export interface AutonomousAgentDistributedCommunicationInput {

id:string;

agentId:string;

objective:string;

context:string;

network:string;

}



export interface AutonomousAgentDistributedCommunicationRecord {

id:string;

networkScore:number;

communicationScore:number;

collaborationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


