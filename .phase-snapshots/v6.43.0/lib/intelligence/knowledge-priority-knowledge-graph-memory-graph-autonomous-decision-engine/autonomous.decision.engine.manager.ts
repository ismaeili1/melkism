import {

decideAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousDecisionEngine

}
from "./autonomous.decision.engine.core";



export function runKnowledgeGraphMemoryGraphAutonomousDecisionEngine(
data:any
){

return decideAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousDecisionEngine(
agentId:string
){

return evaluateAutonomousDecisionEngine(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousDecisionEngine(){

return true;

}
