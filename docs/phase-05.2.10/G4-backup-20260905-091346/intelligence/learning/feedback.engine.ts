import type {

LearningFeedback,

LearningExperience

} from "./learning.types";



import type {

FeedbackAnalysisResult,

LearningSignal

} from "./feedback.types";



export class FeedbackIntelligenceEngine {



analyze(

experience:LearningExperience,

feedback:LearningFeedback

):FeedbackAnalysisResult {



const success=

feedback.score>=0.7;



const signal:LearningSignal={


id:crypto.randomUUID(),


experienceId:experience.id,


type:

success

?

"success"

:

"improvement",


strength:

feedback.score,


message:

success

?

"positive learning signal"

:

"improvement required",


createdAt:new Date()


};



return {


signals:[signal],


performance:{


agentId:experience.agentId,


score:feedback.score,


sampleSize:1,


createdAt:new Date()


},


createdAt:new Date()


};



}



}


