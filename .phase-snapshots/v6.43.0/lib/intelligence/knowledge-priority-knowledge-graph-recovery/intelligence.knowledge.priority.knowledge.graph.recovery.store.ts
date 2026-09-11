import type {
IntelligenceKnowledgePriorityKnowledgeGraphRecoveryRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.recovery.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphRecoveryRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphRecovery(
record:IntelligenceKnowledgePriorityKnowledgeGraphRecoveryRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphRecovery(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphRecovery(){

records.length=0;

}
