import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveGenerationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.generation.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveGenerationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveGeneration(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveGenerationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveGeneration(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
