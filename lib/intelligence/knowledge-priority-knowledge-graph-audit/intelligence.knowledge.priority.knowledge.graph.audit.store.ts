import type {
IntelligenceKnowledgePriorityKnowledgeGraphAuditRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.audit.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphAuditRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphAudit(
record:IntelligenceKnowledgePriorityKnowledgeGraphAuditRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphAudit(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphAudit(){

records.length=0;

}
