import {

optimizeEvolutionKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateOptimizedEvolution

}
from "./optimized.evolution.core";


export function runKnowledgeGraphMemoryGraphOptimizedEvolution(
data:any
){

return optimizeEvolutionKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphOptimizedEvolution(
agentId:string
){

return evaluateOptimizedEvolution(agentId);

}


export function resetKnowledgeGraphMemoryGraphOptimizedEvolution(){

return true;

}
