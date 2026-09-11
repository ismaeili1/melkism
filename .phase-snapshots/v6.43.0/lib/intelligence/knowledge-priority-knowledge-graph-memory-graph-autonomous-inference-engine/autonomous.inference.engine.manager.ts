import {

inferAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousInferenceEngine

}
from "./autonomous.inference.engine.core";



export function runKnowledgeGraphMemoryGraphAutonomousInferenceEngine(
data:any
){

return inferAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousInferenceEngine(
agentId:string
){

return evaluateAutonomousInferenceEngine(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousInferenceEngine(){

return true;

}
