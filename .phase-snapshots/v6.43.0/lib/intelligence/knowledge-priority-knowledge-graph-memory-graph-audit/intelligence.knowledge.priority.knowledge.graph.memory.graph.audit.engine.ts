import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphAudit,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAudit
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.audit.store";


export function auditKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAudit({

id:crypto.randomUUID(),

createdAt:new Date(),

auditStatus:"completed",

metadata:null,

...data

});

}



export function evaluateKnowledgeGraphMemoryGraphAudit(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAudit(agentId);

}



export function generateKnowledgeGraphMemoryGraphAuditReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
