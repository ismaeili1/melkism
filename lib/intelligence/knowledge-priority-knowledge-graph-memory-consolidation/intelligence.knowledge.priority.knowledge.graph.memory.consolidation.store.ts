import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryConsolidationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.consolidation.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryConsolidationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryConsolidation(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryConsolidationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryConsolidation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryConsolidation(){

records.length=0;

}
