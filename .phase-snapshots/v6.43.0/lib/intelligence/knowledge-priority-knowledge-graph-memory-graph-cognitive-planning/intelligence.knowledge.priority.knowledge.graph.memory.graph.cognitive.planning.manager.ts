import {
planKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphCognitivePlanning
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.planning.engine";


export function runKnowledgeGraphMemoryGraphCognitivePlanning(
data:any
){

return planKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphCognitivePlanning(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphCognitivePlanning(agentId);

}


export function resetKnowledgeGraphMemoryGraphCognitivePlanning(){

return true;

}
