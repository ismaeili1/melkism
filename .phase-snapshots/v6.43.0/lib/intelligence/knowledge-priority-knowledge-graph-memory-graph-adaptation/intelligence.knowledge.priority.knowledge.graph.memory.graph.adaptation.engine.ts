import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptation,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptation
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.adaptation.store";


export function adaptKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptation({

id:crypto.randomUUID(),

createdAt:new Date(),

adaptationStatus:"active",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphAdaptation(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptation(agentId);

}


export function generateKnowledgeGraphMemoryGraphAdaptationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
