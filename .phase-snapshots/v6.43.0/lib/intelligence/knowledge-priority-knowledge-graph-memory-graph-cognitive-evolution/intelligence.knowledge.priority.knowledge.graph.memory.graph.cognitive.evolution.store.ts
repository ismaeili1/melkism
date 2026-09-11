import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveEvolutionRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.evolution.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveEvolutionRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveEvolution(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveEvolutionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveEvolution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
