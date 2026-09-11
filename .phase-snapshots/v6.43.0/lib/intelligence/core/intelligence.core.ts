import type {

IntelligenceResult

} from "./intelligence.types";


import type {

IntelligenceContext

} from "../context/context.types";


import type {

IntelligenceDecision

} from "../decision/decision.types";


import type {

DecisionEvaluation

} from "../evaluation/evaluation.types";


import type {

IntelligenceFeedback

} from "../learning/learning.types";



export class AutonomousIntelligenceCore {



process(

context:IntelligenceContext,

decision:IntelligenceDecision,

evaluation:DecisionEvaluation,

feedback:IntelligenceFeedback

):IntelligenceResult {



return {


context,


decision,


evaluation,


feedback,


createdAt:new Date()


};



}



}

