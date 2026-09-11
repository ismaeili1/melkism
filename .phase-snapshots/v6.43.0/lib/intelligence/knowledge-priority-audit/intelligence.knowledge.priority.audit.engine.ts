import {
saveKnowledgePriorityAudit,
getAgentKnowledgePriorityAudit
}
from "./intelligence.knowledge.priority.audit.store";


export function auditKnowledgePriority(
data:any
){

return saveKnowledgePriorityAudit({

id:crypto.randomUUID(),

createdAt:new Date(),

auditStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePriorityAudit(
agentId:string
){

return getAgentKnowledgePriorityAudit(agentId);

}



export function generatePriorityAuditReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
