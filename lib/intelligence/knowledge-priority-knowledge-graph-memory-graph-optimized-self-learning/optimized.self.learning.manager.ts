import {

optimizeSelfLearningKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateOptimizedSelfLearning

}
from "./optimized.self.learning.core";


export function runKnowledgeGraphMemoryGraphOptimizedSelfLearning(
data:any
){

return optimizeSelfLearningKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphOptimizedSelfLearning(
agentId:string
){

return evaluateOptimizedSelfLearning(agentId);

}


export function resetKnowledgeGraphMemoryGraphOptimizedSelfLearning(){

return true;

}
