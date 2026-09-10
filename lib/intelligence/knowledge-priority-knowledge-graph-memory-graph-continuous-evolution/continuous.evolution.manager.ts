import {

evolveContinuousKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateContinuousEvolution

}
from "./continuous.evolution.core";


export function runKnowledgeGraphMemoryGraphContinuousEvolution(
data:any
){

return evolveContinuousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphContinuousEvolution(
agentId:string
){

return evaluateContinuousEvolution(agentId);

}


export function resetKnowledgeGraphMemoryGraphContinuousEvolution(){

return true;

}
