import {

adaptContinuouslyKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateContinuousAdaptation

}
from "./continuous.adaptation.core";


export function runKnowledgeGraphMemoryGraphContinuousAdaptation(
data:any
){

return adaptContinuouslyKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphContinuousAdaptation(
agentId:string
){

return evaluateContinuousAdaptation(agentId);

}


export function resetKnowledgeGraphMemoryGraphContinuousAdaptation(){

return true;

}
