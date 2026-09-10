export type DecisionType =

"analysis"

|

"recommendation"

|

"optimization";



export type DecisionStatus =

"created"

|

"evaluated"

|

"approved";



export interface IntelligenceDecision {


id:string;



type:DecisionType;



input:unknown;



result?:unknown;



score:number;



status:DecisionStatus;



createdAt:Date;



}

