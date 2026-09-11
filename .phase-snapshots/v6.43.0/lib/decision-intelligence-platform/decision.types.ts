export type DecisionType =
 | "property-selection"
 | "investment-selection"
 | "market-action"
 | "architectural-decision"
 | "business-decision";


export interface DecisionRecord {

id:string;

type:DecisionType;

subject:string;

}


export interface ScoreResult {

score:number;

factors:string[];

}


export interface Recommendation {

decisionId:string;

message:string;

}


