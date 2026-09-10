export type ContentIntelligenceType =

"classification"

|

"quality"

|

"semantic"

|

"ranking";



export type ContentIntelligenceStatus =

"created"

|

"analyzed"

|

"optimized";



export interface ContentIntelligenceSignal {


id:string;


contentId:string;


type:ContentIntelligenceType;


score:number;


status:ContentIntelligenceStatus;


metadata?:Record<string,unknown>;


createdAt:Date;


}



export interface ContentIntelligenceResult {


contentId:string;


signals:ContentIntelligenceSignal[];


qualityScore:number;


createdAt:Date;


}

