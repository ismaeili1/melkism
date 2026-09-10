import {

operateAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousOperation

}
from "./autonomous.operation.core";



export function runKnowledgeGraphMemoryGraphAutonomousOperation(
data:any
){

return operateAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousOperation(
agentId:string
){

return evaluateAutonomousOperation(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousOperation(){

return true;

}
