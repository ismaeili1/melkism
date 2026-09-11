import {
learnKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphSelfLearning,
generateKnowledgeGraphMemoryGraphSelfLearningReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.self.learning.engine";


export function runKnowledgeGraphMemoryGraphSelfLearning(
data:any
){

return learnKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphSelfLearning(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphSelfLearning(agentId);

}


export function resetKnowledgeGraphMemoryGraphSelfLearning(){

return true;

}


export {
generateKnowledgeGraphMemoryGraphSelfLearningReport
};
