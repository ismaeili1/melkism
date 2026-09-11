import type {

RecommendationContext,

IntelligenceRecommendation

} from "./recommendation.types";



export class RecommendationIntelligenceEngine {



generate(

context:RecommendationContext

):IntelligenceRecommendation {



const score=

context.signals.length===0

?

0

:

context.signals.reduce(

(sum,item)=>

sum+(item.value*item.weight),

0

);



return {


id:crypto.randomUUID(),


entityId:context.entityId,


type:context.type,


score,


summary:

"intelligence recommendation generated",


confidence:

Math.min(1,score),


createdAt:new Date()


};



}



}



