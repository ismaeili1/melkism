import {
saveKnowledgePriorityKnowledgeGraphRecovery,
getAgentKnowledgePriorityKnowledgeGraphRecovery
}
from "./intelligence.knowledge.priority.knowledge.graph.recovery.store";


export function recoverKnowledgePriorityKnowledgeGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphRecovery({

id:crypto.randomUUID(),

createdAt:new Date(),

recoveryStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphRecovery(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphRecovery(agentId);

}


export function generateKnowledgeGraphRecoveryReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
