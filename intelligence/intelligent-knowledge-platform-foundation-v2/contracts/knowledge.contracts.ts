
export interface KnowledgePlatformInput {


id:string;


domain:string;


content:string;


query:string;


context:string;


}




export interface KnowledgePlatformRecord {


id:string;


knowledgeScore:number;


semanticScore:number;


discoveryScore:number;


recommendationScore:number;


governanceScore:number;


confidence:number;


status:string;


createdAt:Date;


}



