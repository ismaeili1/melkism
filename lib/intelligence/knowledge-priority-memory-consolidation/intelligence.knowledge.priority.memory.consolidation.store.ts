import type {
IntelligenceKnowledgePriorityMemoryConsolidationRecord
}
from "./intelligence.knowledge.priority.memory.consolidation.types";


const records:IntelligenceKnowledgePriorityMemoryConsolidationRecord[]=[];


export function saveKnowledgePriorityMemoryConsolidation(
record:IntelligenceKnowledgePriorityMemoryConsolidationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityMemoryConsolidation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityMemoryConsolidation(){

records.length=0;

}
