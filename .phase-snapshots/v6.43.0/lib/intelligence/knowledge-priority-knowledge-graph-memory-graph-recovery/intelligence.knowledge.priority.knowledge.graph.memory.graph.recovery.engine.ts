import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphRecovery,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphRecovery
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.recovery.store";


export function recoverKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphRecovery({

id:crypto.randomUUID(),

createdAt:new Date(),

recoveryStatus:"completed",

metadata:null,

...data

});

}



export function evaluateKnowledgeGraphMemoryGraphRecovery(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphRecovery(agentId);

}



export function generateKnowledgeGraphMemoryGraphRecoveryReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
