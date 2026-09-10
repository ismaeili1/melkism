import {
cognitiveGenerateKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphCognitiveGeneration
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.generation.engine";


export function runKnowledgeGraphMemoryGraphCognitiveGeneration(
data:any
){

return cognitiveGenerateKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphCognitiveGeneration(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphCognitiveGeneration(agentId);

}


export function resetKnowledgeGraphMemoryGraphCognitiveGeneration(){

return true;

}

