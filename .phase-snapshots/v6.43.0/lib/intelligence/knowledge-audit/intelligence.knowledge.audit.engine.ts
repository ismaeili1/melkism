import {
saveKnowledgeAudit,
getAgentKnowledgeAudit
}
from "./intelligence.knowledge.audit.store";


export function auditKnowledge(
data:any
){

return saveKnowledgeAudit({

id:crypto.randomUUID(),

createdAt:new Date(),

auditResult:"audited",

metadata:null,

...data

});

}



export function trackKnowledgeAction(
agentId:string
){

return getAgentKnowledgeAudit(agentId);

}



export function generateKnowledgeAuditReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
