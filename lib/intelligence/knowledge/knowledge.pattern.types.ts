export type KnowledgePatternType =

"trend"

|

"cluster"

|

"correlation"

|

"anomaly";



export interface KnowledgePatternInput {


nodeIds:string[];


relationCount:number;


averageStrength:number;


}



export interface KnowledgePatternResult {


id:string;


type:KnowledgePatternType;


confidence:number;


nodes:string[];


description:string;


createdAt:Date;


}

