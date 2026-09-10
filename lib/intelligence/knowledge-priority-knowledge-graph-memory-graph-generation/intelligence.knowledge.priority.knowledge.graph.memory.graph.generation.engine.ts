import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneration,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneration
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.generation.store";


export function generateKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneration({

id:crypto.randomUUID(),

createdAt:new Date(),

generationStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphGeneration(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneration(agentId);

}


export function generateKnowledgeGraphMemoryGraphGenerationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
