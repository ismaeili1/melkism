import {
evolveKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphCognitiveEvolution
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.evolution.engine";


export function runKnowledgeGraphMemoryGraphCognitiveEvolution(
data:any
){

return evolveKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphCognitiveEvolution(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphCognitiveEvolution(agentId);

}


export function resetKnowledgeGraphMemoryGraphCognitiveEvolution(){

return true;

}
