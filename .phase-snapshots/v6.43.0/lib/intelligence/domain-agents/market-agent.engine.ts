import type {

MarketSignal,

MarketInsight,

MarketAnalysisContext

} from "./market-agent.types";



export class MarketIntelligenceAgent {



analyze(

context:MarketAnalysisContext

):MarketInsight {



const average=

context.signals.length===0

?

0

:

context.signals.reduce(

(sum,signal)=>sum+signal.value,

0

)

/

context.signals.length;



return {


id:crypto.randomUUID(),


market:context.market,


summary:

"market intelligence analysis generated",


confidence:

Math.min(1,average/100),


createdAt:new Date()


};



}



}



