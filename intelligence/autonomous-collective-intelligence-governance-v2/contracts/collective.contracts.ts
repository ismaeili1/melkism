
export interface AutonomousCollectiveCollectiveGovernanceInput {

id:string;

agents:string[];

knowledge:string;

objective:string;

context:string;

}



export interface AutonomousCollectiveCollectiveGovernanceRecord {

id:string;

collectiveScore:number;

coordinationScore:number;

knowledgeScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


