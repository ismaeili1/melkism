import {

governAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousGovernance

}
from "./autonomous.governance.core";



export function runKnowledgeGraphMemoryGraphAutonomousGovernance(
data:any
){

return governAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousGovernance(
agentId:string
){

return evaluateAutonomousGovernance(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousGovernance(){

return true;

}
