export type IntelligenceMemoryType =

"pattern"

|

"behavior"

|

"decision"

|

"optimization";



export interface IntelligenceMemoryRecord {


id:string;


domain:string;


entityId:string;


type:IntelligenceMemoryType;


content:string;


importance:number;


createdAt:Date;


updatedAt:Date;


}



export interface IntelligenceMemoryResult {


entityId:string;


memories:IntelligenceMemoryRecord[];


createdAt:Date;


}

