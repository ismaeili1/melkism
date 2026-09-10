import type {

MultiHopContext,

InferenceChain

} from "./multi-hop.types";



export class MultiHopReasoningEngine {



reason(

context:MultiHopContext

):InferenceChain {



const steps=

context.paths.flatMap(

path=>

path.nodes.map(

node=>node.value

)

);



const confidence=

context.paths.length===0

?

0

:

context.paths.reduce(

(sum,path)=>

sum+path.confidence,

0

)

/

context.paths.length;



return {


id:crypto.randomUUID(),


steps,


conclusion:

"multi-hop knowledge inference generated",


confidence,


createdAt:new Date()


};



}



}

