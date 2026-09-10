
export interface CognitiveSynthesisCognitiveFusionNetworkInput {

id:string;

knowledgeContext:string;

learningContext:string;

intelligenceContext:string;

fusionContext:string;

objective:string;

}



export interface CognitiveSynthesisCognitiveFusionNetworkRecord {

id:string;

synthesisScore:number;

integrationScore:number;

fusionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


