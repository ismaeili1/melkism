import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGenerationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.generation.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGenerationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneration(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGenerationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneration(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphGeneration(){

records.length=0;

}
