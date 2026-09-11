import {
decideKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphCognitiveDecision
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.decision.engine";


export function runKnowledgeGraphMemoryGraphCognitiveDecision(
data:any
){

return decideKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphCognitiveDecision(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphCognitiveDecision(agentId);

}


export function resetKnowledgeGraphMemoryGraphCognitiveDecision(){

return true;

}
