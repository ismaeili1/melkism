import {

coordinateAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousCoordination

}
from "./autonomous.coordination.core";



export function runKnowledgeGraphMemoryGraphAutonomousCoordination(
data:any
){

return coordinateAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousCoordination(
agentId:string
){

return evaluateAutonomousCoordination(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousCoordination(){

return true;

}
