import {
auditKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphAudit,
generateKnowledgeGraphAuditReport
}
from "./intelligence.knowledge.priority.knowledge.graph.audit.engine";


export function runKnowledgeGraphAudit(
data:any
){

return auditKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphAudit(
agentId:string
){

return evaluateKnowledgeGraphAudit(agentId);

}


export function resetKnowledgeGraphAudit(){

return true;

}


export {
generateKnowledgeGraphAuditReport
};

