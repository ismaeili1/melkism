
export interface AutonomousFabricKnowledgeRoutingInput {

id:string;

source:string;

target:string;

operation:string;

}



export interface AutonomousFabricKnowledgeRoutingRecord {

id:string;

fabricScore:number;

meshScore:number;

routingScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


