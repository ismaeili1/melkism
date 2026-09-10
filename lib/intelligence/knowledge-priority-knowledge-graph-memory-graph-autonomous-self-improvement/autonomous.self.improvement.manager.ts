import {

improveAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousSelfImprovement

}
from "./autonomous.self.improvement.core";



export function runKnowledgeGraphMemoryGraphAutonomousSelfImprovement(
data:any
){

return improveAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousSelfImprovement(
agentId:string
){

return evaluateAutonomousSelfImprovement(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousSelfImprovement(){

return true;

}
