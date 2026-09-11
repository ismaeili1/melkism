import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuityRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.continuity.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuityRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuity(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuityRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuity(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphContinuity(){

records.length=0;

}
