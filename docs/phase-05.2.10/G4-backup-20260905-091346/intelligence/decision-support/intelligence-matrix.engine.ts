import type {

IntelligenceMatrixContext,

IntelligenceMatrixResult

} from "./intelligence-matrix.types";



export class IntelligenceMatrixEngine {



evaluate(

context:IntelligenceMatrixContext

):IntelligenceMatrixResult {



const riskFactors=

context.factors.filter(

item=>item.type==="risk"

);



const opportunityFactors=

context.factors.filter(

item=>item.type==="opportunity"

);



const calculate=(items:any[])=>


items.length===0

?

0

:

items.reduce(

(sum,item)=>

sum+(item.score*item.weight),

0

)

/

items.length;



const riskScore=

calculate(riskFactors);



const opportunityScore=

calculate(opportunityFactors);



return {


entityId:context.entityId,


riskScore,


opportunityScore,


balanceScore:

opportunityScore-riskScore,


summary:

"risk opportunity intelligence matrix generated",


confidence:

Math.min(

1,

Math.abs(opportunityScore-riskScore)

),


createdAt:new Date()


};



}



}

