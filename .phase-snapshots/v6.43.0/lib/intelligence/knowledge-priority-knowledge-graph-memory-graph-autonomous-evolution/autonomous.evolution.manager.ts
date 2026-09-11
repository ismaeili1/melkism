import {

evolveAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousEvolution

}
from "./autonomous.evolution.core";



export function runKnowledgeGraphMemoryGraphAutonomousEvolution(
data:any
){

return evolveAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousEvolution(
agentId:string
){

return evaluateAutonomousEvolution(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousEvolution(){

return true;

}
