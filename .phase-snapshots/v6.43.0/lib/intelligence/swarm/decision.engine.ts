import type {

SwarmDecisionContext,

SwarmDecisionOutput

} from "./decision.types";



export class SwarmDecisionEngine {



aggregate(

context:SwarmDecisionContext

):SwarmDecisionOutput {



const decisions=context.decisions;



const confidence=

decisions.length===0

?

0

:

decisions.reduce(

(sum,item)=>

sum+item.confidence,

0

)

/

decisions.length;



const latest=

decisions.length>0

?

decisions[decisions.length-1].decision

:

"no decision";



return {


decision:latest,


confidence,


sourceCount:decisions.length,


createdAt:new Date()


};



}



}

