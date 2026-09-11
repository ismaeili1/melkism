import {

selfLearnAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousSelfLearning

}
from "./autonomous.self.learning.core";



export function runKnowledgeGraphMemoryGraphAutonomousSelfLearning(
data:any
){

return selfLearnAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousSelfLearning(
agentId:string
){

return evaluateAutonomousSelfLearning(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousSelfLearning(){

return true;

}
