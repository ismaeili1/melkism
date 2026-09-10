import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphLifecycle,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphLifecycle
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.lifecycle.store";


export function manageKnowledgePriorityKnowledgeGraphMemoryGraphLifecycle(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphLifecycle({

id:crypto.randomUUID(),

createdAt:new Date(),

lifecycleStatus:"active",

metadata:null,

...data

});

}



export function evaluateKnowledgeGraphMemoryGraphLifecycle(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphLifecycle(agentId);

}



export function generateKnowledgeGraphMemoryGraphLifecycleReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
