import {

createAutonomousPolicyKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousPolicy

}
from "./autonomous.policy.core";



export function runKnowledgeGraphMemoryGraphAutonomousPolicy(
data:any
){

return createAutonomousPolicyKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousPolicy(
agentId:string
){

return evaluateAutonomousPolicy(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousPolicy(){

return true;

}
