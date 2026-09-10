import {

createAutonomousEvolutionPolicy,

evaluateAutonomousEvolutionPolicy

}
from "./autonomous.evolution.policy.core";


export function runKnowledgeGraphMemoryGraphAutonomousEvolutionPolicy(
data:any
){

return createAutonomousEvolutionPolicy(data);

}


export function reviewKnowledgeGraphMemoryGraphAutonomousEvolutionPolicy(
agentId:string
){

return evaluateAutonomousEvolutionPolicy(agentId);

}


export function resetKnowledgeGraphMemoryGraphAutonomousEvolutionPolicy(){

return true;

}
