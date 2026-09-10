
export interface AutonomousKnowledgeKnowledgeExchangeInput {

id:string;

knowledgeNode:string;

operation:string;

}



export interface AutonomousKnowledgeKnowledgeExchangeRecord {

id:string;

networkScore:number;

knowledgeScore:number;

exchangeScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


