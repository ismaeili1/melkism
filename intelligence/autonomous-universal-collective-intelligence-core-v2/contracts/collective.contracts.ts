
export interface CollectiveCollectiveIntelligenceInput {

id:string;

ecosystemContext:string;

networkContext:string;

reasoningContext:string;

collaborationContext:string;

objective:string;

}



export interface CollectiveCollectiveIntelligenceRecord {

id:string;

collectiveScore:number;

networkScore:number;

reasoningScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


