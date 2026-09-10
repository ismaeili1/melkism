
export interface CognitiveSynthesisCognitiveSynthesisInput {

id:string;

knowledgeContext:string;

learningContext:string;

intelligenceContext:string;

fusionContext:string;

objective:string;

}



export interface CognitiveSynthesisCognitiveSynthesisRecord {

id:string;

synthesisScore:number;

integrationScore:number;

fusionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


