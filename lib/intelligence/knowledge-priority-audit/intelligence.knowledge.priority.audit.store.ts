import type {
IntelligenceKnowledgePriorityAuditRecord
}
from "./intelligence.knowledge.priority.audit.types";


const records:IntelligenceKnowledgePriorityAuditRecord[]=[];


export function saveKnowledgePriorityAudit(
record:IntelligenceKnowledgePriorityAuditRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityAudit(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityAudit(){

records.length=0;

}
