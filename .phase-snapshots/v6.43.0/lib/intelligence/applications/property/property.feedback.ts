import type {

PropertyFeedbackSignal,

PropertyFeedbackResult

} from "./property.feedback.types";



import type {

PropertyScoreResult

} from "./property.scoring.types";



export class PropertyFeedbackConnector {



create(

score:PropertyScoreResult

):PropertyFeedbackResult {



const signal:PropertyFeedbackSignal={


id:crypto.randomUUID(),


propertyId:score.propertyId,


type:"value",


score:score.overallScore,


message:

`Property intelligence score generated: ${score.overallScore}`,


createdAt:new Date()


};



return {


propertyId:score.propertyId,


signals:[signal],


createdAt:new Date()


};



}



}

