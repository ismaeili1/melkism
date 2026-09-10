import type {
IntelligenceKnowledgeOrchestrationRecord
}
from "./intelligence.knowledge.orchestration.types";


const records:IntelligenceKnowledgeOrchestrationRecord[]=[];


export function saveKnowledgeOrchestration(
record:IntelligenceKnowledgeOrchestrationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeOrchestration(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeOrchestration(){

records.length=0;

}
