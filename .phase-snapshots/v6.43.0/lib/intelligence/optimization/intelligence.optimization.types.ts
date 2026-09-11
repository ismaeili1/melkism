
export type IntelligenceOptimizationType =

"performance"
|
"resource"
|
"accuracy"
|
"efficiency"
|
"strategy";



export interface IntelligenceOptimizationRecord {


id:string;


agentId:string;


target:unknown;


strategy:unknown;


score:number;


improvement:unknown;


type:IntelligenceOptimizationType;


createdAt:Date;


}

