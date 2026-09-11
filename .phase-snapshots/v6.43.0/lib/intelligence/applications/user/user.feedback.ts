import type {

UserFeedbackSignal,

UserFeedbackResult

} from "./user.feedback.types";



import type {

UserScoreResult

} from "./user.scoring.types";



export class UserFeedbackConnector {



create(

score:UserScoreResult

):UserFeedbackResult {



const signal:UserFeedbackSignal={


id:crypto.randomUUID(),


userId:score.userId,


type:"behavior",


score:score.overallScore,


message:

`User intelligence score generated: ${score.overallScore}`,


createdAt:new Date()


};



return {


userId:score.userId,


signals:[signal],


createdAt:new Date()


};



}



}

