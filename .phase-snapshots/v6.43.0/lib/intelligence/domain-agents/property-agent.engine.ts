import type {

PropertyAnalysisContext,

PropertyInsight

} from "./property-agent.types";



export class PropertyIntelligenceAgent {



analyze(

context:PropertyAnalysisContext

):PropertyInsight {



const score=

context.features.length===0

?

0

:

context.features.reduce(

(sum,item)=>

sum+item.weight,

0

)

/

context.features.length;



return {


id:crypto.randomUUID(),


propertyId:context.propertyId,


score,


summary:

"property intelligence analysis generated",


confidence:

Math.min(1,score),


createdAt:new Date()


};



}



}

