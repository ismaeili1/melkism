import type {

ContentFeedbackSignal,

ContentFeedbackResult

} from "./content.feedback.types";



import type {

ContentScoreResult

} from "./content.scoring.types";



export class ContentFeedbackConnector {



create(

score:ContentScoreResult

):ContentFeedbackResult {



const signal:ContentFeedbackSignal={


id:crypto.randomUUID(),


contentId:score.contentId,


type:"quality",


score:score.qualityScore,


message:

`Content quality score generated: ${score.qualityScore}`,


createdAt:new Date()


};



return {


contentId:score.contentId,


signals:[signal],


createdAt:new Date()


};



}



}

