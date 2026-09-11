import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveOptimizationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.optimization.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveOptimizationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveOptimization(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveOptimizationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveOptimization(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
