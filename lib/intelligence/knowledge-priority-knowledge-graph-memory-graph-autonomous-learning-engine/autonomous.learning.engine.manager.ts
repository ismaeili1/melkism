import {

learnAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousLearningEngine

}
from "./autonomous.learning.engine.core";



export function runKnowledgeGraphMemoryGraphAutonomousLearningEngine(
data:any
){

return learnAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousLearningEngine(
agentId:string
){

return evaluateAutonomousLearningEngine(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousLearningEngine(){

return true;

}
