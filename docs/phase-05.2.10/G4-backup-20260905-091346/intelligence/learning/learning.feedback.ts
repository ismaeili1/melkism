import type {

DecisionEvaluation

} from "../evaluation/evaluation.types";


import type {

IntelligenceFeedback

} from "./learning.types";



export class LearningFeedbackEngine {



create(

evaluation:DecisionEvaluation

):IntelligenceFeedback {



return {



agentId: "system",
id:crypto.randomUUID(),


evaluationId:evaluation.id,


evaluation,


signal:evaluation.score > 0

? "positive"

: "neutral",


score:evaluation.score,


createdAt:new Date()


};



}



}






