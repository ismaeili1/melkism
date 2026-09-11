import {

controlAutonomousEvolutionKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousEvolutionControl

}
from "./autonomous.evolution.control.core";


export function runKnowledgeGraphMemoryGraphAutonomousEvolutionControl(
data:any
){

return controlAutonomousEvolutionKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphAutonomousEvolutionControl(
agentId:string
){

return evaluateAutonomousEvolutionControl(agentId);

}


export function resetKnowledgeGraphMemoryGraphAutonomousEvolutionControl(){

return true;

}
