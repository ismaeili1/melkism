import {
auditKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphAudit,
generateKnowledgeGraphMemoryGraphAuditReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.audit.engine";


export function runKnowledgeGraphMemoryGraphAudit(
data:any
){

return auditKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAudit(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphAudit(agentId);

}



export function resetKnowledgeGraphMemoryGraphAudit(){

return true;

}



export {
generateKnowledgeGraphMemoryGraphAuditReport
};
