import {
saveKnowledgePriorityMemoryConsolidation,
getAgentKnowledgePriorityMemoryConsolidation
}
from "./intelligence.knowledge.priority.memory.consolidation.store";


export function consolidateKnowledgePriorityMemory(
data:any
){

return saveKnowledgePriorityMemoryConsolidation({

id:crypto.randomUUID(),

createdAt:new Date(),

consolidationStatus:"completed",

metadata:null,

...data

});

}


export function evaluateMemoryConsolidation(
agentId:string
){

return getAgentKnowledgePriorityMemoryConsolidation(agentId);

}


export function generateMemoryConsolidationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
