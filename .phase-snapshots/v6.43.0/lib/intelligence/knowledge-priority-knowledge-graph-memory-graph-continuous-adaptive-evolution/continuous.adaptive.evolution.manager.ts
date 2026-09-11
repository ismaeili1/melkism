import {

runContinuousAdaptiveEvolutionCycle,

evaluateContinuousAdaptiveEvolution

}
from "./continuous.adaptive.evolution.core";


export function runKnowledgeGraphMemoryGraphContinuousAdaptiveEvolution(
data:any
){

return runContinuousAdaptiveEvolutionCycle(data);

}


export function reviewKnowledgeGraphMemoryGraphContinuousAdaptiveEvolution(
agentId:string
){

return evaluateContinuousAdaptiveEvolution(agentId);

}


export function resetKnowledgeGraphMemoryGraphContinuousAdaptiveEvolution(){

return true;

}
