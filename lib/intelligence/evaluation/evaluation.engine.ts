import type {

IntelligenceDecision

} from "../decision/decision.types";


import type {

DecisionEvaluation

} from "./evaluation.types";



export class EvaluationEngine {



evaluate(

decision:IntelligenceDecision

):DecisionEvaluation {



return {


id:crypto.randomUUID(),


decisionId:decision.id,


decision,


score:decision.score,


status:"completed",


createdAt:new Date()


};


}



}

