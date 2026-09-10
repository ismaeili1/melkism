import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAuditRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.audit.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAuditRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAudit(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAuditRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAudit(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphAudit(){

records.length=0;

}
