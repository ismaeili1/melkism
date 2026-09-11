import type {

MarketOptimizationSignal,

MarketOptimizationResult

} from "./market.optimization.types";



import type {

MarketScoreResult

} from "./market.scoring.types";



export class MarketOptimizationBridge {



optimize(

score:MarketScoreResult

):MarketOptimizationResult {



const targetScore=

Math.min(

100,

score.overallScore + 10

);



const signal:MarketOptimizationSignal={


id:crypto.randomUUID(),


marketId:score.marketId,


type:"trend",


currentScore:score.overallScore,


targetScore,


improvement:

targetScore-score.overallScore,


createdAt:new Date()


};



return {


marketId:score.marketId,


signals:[signal],


optimizedScore:targetScore,


createdAt:new Date()


};



}



}

