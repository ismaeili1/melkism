
export interface AutonomousCollectiveCollectiveIntelligenceInput {

id:string;

agents:string[];

knowledge:string;

objective:string;

context:string;

}



export interface AutonomousCollectiveCollectiveIntelligenceRecord {

id:string;

collectiveScore:number;

coordinationScore:number;

knowledgeScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


