
export type IntelligenceAdaptationType =

"behavior"
|
"strategy"
|
"performance"
|
"configuration"
|
"optimization";



export interface IntelligenceAdaptationRecord {


id:string;


agentId:string;


strategy:string;


previousState:unknown;


newState:unknown;


reason:unknown;


type:IntelligenceAdaptationType;


createdAt:Date;


}

