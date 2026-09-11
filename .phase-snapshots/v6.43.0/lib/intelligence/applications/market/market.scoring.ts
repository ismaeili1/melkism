import type {

MarketScoreInput,

MarketScoreResult,

MarketCategory

} from "./market.scoring.types";



export class MarketScoringEngine {



score(

input:MarketScoreInput

):MarketScoreResult {



const scores=[

input.trendScore,

input.priceScore,

input.demandScore,

input.investmentScore

];



const overallScore=Math.round(

scores.reduce(

(a,b)=>a+b,

0

)

/ scores.length

);



const category=this.classify(overallScore);



return {


marketId:input.marketId,


overallScore,


confidence:

overallScore>0 ? 0.8 : 0,


category,


signals:[

"trend_evaluated",

"market_score_generated"

],


createdAt:new Date()


};



}



private classify(

score:number

):MarketCategory {



if(score>=70){

return "growth";

}


if(score>=40){

return "stable";

}


if(score>0){

return "decline";

}


return "unknown";


}



}

