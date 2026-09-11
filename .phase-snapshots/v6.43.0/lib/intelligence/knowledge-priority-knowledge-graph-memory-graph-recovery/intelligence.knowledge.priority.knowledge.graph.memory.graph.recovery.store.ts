import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphRecoveryRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.recovery.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphRecoveryRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphRecovery(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphRecoveryRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphRecovery(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphRecovery(){

records.length=0;

}
