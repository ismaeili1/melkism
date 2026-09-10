
import {

saveEvolution,
getAgentEvolution

}
from "./intelligence.evolution.store";



export function analyzeEvolution(
data:any
){

return saveEvolution({

id:crypto.randomUUID(),

createdAt:new Date(),

confidence:data.confidence ?? 0,

...data

});

}



export function generateEvolutionPath(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}



export function applyEvolution(
agentId:string
){

return getAgentEvolution(agentId);

}

