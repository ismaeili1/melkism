import {
saveKnowledgePriorityKnowledgeGraphMemoryConsolidation,
getAgentKnowledgePriorityKnowledgeGraphMemoryConsolidation
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.consolidation.store";


export function consolidateKnowledgePriorityKnowledgeGraphMemory(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryConsolidation({

id:crypto.randomUUID(),

createdAt:new Date(),

consolidationStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryConsolidation(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryConsolidation(agentId);

}


export function generateKnowledgeGraphMemoryConsolidationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
