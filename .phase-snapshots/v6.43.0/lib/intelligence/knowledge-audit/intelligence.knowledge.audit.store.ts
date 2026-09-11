import type {
IntelligenceKnowledgeAuditRecord
}
from "./intelligence.knowledge.audit.types";


const records:IntelligenceKnowledgeAuditRecord[]=[];


export function saveKnowledgeAudit(
record:IntelligenceKnowledgeAuditRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeAudit(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeAudit(){

records.length=0;

}
