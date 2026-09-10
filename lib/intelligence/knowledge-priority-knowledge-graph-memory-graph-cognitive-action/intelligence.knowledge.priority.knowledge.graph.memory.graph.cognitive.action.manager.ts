import {
executeKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphCognitiveAction
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.action.engine";


export function runKnowledgeGraphMemoryGraphCognitiveAction(
data:any
){

return executeKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphCognitiveAction(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphCognitiveAction(agentId);

}


export function resetKnowledgeGraphMemoryGraphCognitiveAction(){

return true;

}
