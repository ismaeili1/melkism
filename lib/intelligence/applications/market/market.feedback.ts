import type {

MarketFeedbackSignal,

MarketFeedbackResult

} from "./market.feedback.types";



import type {

MarketScoreResult

} from "./market.scoring.types";



export class MarketFeedbackConnector {



create(

score:MarketScoreResult

):MarketFeedbackResult {



const signal:MarketFeedbackSignal={


id:crypto.randomUUID(),


marketId:score.marketId,


type:"trend",


score:score.overallScore,


message:

`Market intelligence score generated: ${score.overallScore}`,


createdAt:new Date()


};



return {


marketId:score.marketId,


signals:[signal],


createdAt:new Date()


};



}



}

