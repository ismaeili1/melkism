import type {

MarketAnalysisInput,

MarketAnalysisSummary

} from "./market.analysis.types";



export class MarketAnalysisEngine {



analyze(

input:MarketAnalysisInput

):MarketAnalysisSummary {



const values=

Object.values(input.data);



const average=

values.length===0

?

0

:

Math.round(

values.reduce(

(a,b)=>a+b,

0

)

/

values.length

);



return {


marketId:input.marketId,


trendScore:average,


priceScore:average,


demandScore:average,


investmentScore:average,


createdAt:new Date()


};



}



}

