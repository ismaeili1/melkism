import {

adaptiveLearnKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAdaptiveSelfLearning

}
from "./adaptive.self.learning.core";



export function runKnowledgeGraphMemoryGraphAdaptiveSelfLearning(
data:any
){

return adaptiveLearnKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAdaptiveSelfLearning(
agentId:string
){

return evaluateAdaptiveSelfLearning(agentId);

}



export function resetKnowledgeGraphMemoryGraphAdaptiveSelfLearning(){

return true;

}
