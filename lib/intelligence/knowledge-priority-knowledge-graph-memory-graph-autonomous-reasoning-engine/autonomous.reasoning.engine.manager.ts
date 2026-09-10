import {

reasonAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousReasoningEngine

}
from "./autonomous.reasoning.engine.core";



export function runKnowledgeGraphMemoryGraphAutonomousReasoningEngine(
data:any
){

return reasonAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousReasoningEngine(
agentId:string
){

return evaluateAutonomousReasoningEngine(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousReasoningEngine(){

return true;

}
