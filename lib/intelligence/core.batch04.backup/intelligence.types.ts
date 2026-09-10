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


import type {

OptimizationSuggestion

} from "../optimization/optimization.types";



export interface IntelligenceResult {


context:IntelligenceContext;


decision:IntelligenceDecision;


evaluation:DecisionEvaluation;


feedback:IntelligenceFeedback;


optimization?:OptimizationSuggestion;


createdAt:Date;


}

