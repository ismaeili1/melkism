import {
saveKnowledgePriorityGeneration,
getAgentKnowledgePriorityGeneration
}
from "./intelligence.knowledge.priority.generation.store";


export function generateKnowledgePriority(
data:any
){

return saveKnowledgePriorityGeneration({

id:crypto.randomUUID(),

createdAt:new Date(),

generationStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePriorityGeneration(
agentId:string
){

return getAgentKnowledgePriorityGeneration(agentId);

}



export function generatePriorityGenerationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
