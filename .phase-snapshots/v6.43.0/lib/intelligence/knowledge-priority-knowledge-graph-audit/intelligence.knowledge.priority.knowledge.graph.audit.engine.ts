import {
saveKnowledgePriorityKnowledgeGraphAudit,
getAgentKnowledgePriorityKnowledgeGraphAudit
}
from "./intelligence.knowledge.priority.knowledge.graph.audit.store";


export function auditKnowledgePriorityKnowledgeGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphAudit({

id:crypto.randomUUID(),

createdAt:new Date(),

auditStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphAudit(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphAudit(agentId);

}


export function generateKnowledgeGraphAuditReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
