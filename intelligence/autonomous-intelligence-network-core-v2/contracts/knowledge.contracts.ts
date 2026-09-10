
export interface AutonomousKnowledgeNetworkCoreInput {

id:string;

knowledgeNode:string;

operation:string;

}



export interface AutonomousKnowledgeNetworkCoreRecord {

id:string;

networkScore:number;

knowledgeScore:number;

exchangeScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


