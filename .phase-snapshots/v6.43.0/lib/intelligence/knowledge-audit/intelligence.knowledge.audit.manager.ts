import {
auditKnowledge,
trackKnowledgeAction,
generateKnowledgeAuditReport
}
from "./intelligence.knowledge.audit.engine";


export function runKnowledgeAudit(
data:any
){

return auditKnowledge(data);

}


export function reviewKnowledgeAudit(
agentId:string
){

return trackKnowledgeAction(agentId);

}


export function resetKnowledgeAudit(){

return true;

}


export {
generateKnowledgeAuditReport
};

