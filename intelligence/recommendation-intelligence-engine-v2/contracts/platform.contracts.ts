
export interface IntelligencePlatformInput {


id:string;


query:string;


content:string;


domain:string;


context:string;


}




export interface IntelligencePlatformRecord {


id:string;


intelligenceScore:number;


semanticScore:number;


knowledgeScore:number;


recommendationScore:number;


confidence:number;


status:string;


createdAt:Date;


}



