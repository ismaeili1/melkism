
export interface MetaIntelligenceMetaEvolutionInput {

id:string;

metaContext:string;

knowledgeContext:string;

orchestrationContext:string;

objective:string;

}



export interface MetaIntelligenceMetaEvolutionRecord {

id:string;

metaScore:number;

knowledgeScore:number;

evolutionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


