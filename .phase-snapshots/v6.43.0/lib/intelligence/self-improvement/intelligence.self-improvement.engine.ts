
import {

saveSelfImprovement,
getAgentImprovements

}
from "./intelligence.self-improvement.store";



export function analyzeImprovement(
data:any
){

return saveSelfImprovement({

id:crypto.randomUUID(),

createdAt:new Date(),

confidence:data.confidence ?? 0,

impact:null,

...data

});

}



export function generateImprovementPlan(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}



export function applyImprovement(
agentId:string
){

return getAgentImprovements(agentId);

}

