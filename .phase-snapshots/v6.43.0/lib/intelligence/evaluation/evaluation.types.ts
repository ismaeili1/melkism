import type {

IntelligenceDecision

} from "../decision/decision.types";



export type EvaluationStatus =

"created"

|

"completed";



export interface DecisionEvaluation {


id:string;



decisionId:string;



decision:IntelligenceDecision;



score:number;



feedback?:unknown;



status:EvaluationStatus;



createdAt:Date;



}

