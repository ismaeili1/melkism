import {
auditKnowledgePriority,
evaluatePriorityAudit,
generatePriorityAuditReport
}
from "./intelligence.knowledge.priority.audit.engine";


export function runPriorityAudit(
data:any
){

return auditKnowledgePriority(data);

}


export function reviewPriorityAudit(
agentId:string
){

return evaluatePriorityAudit(agentId);

}


export function resetPriorityAudit(){

return true;

}


export {
generatePriorityAuditReport
};

