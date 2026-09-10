
import {

saveReasoning,
getAgentReasoning

}
from "./intelligence.reasoning.store";



export function reasonAbout(
data:any
){

return saveReasoning({

id:crypto.randomUUID(),

createdAt:new Date(),

confidence:data.confidence ?? 0,

type:"analysis",

...data

});

}



export function generateHypothesis(
context:any
){

return {

hypothesis:context,

generatedAt:new Date()

};

}



export function evaluateReasoning(
agentId:string
){

return getAgentReasoning(agentId);

}

