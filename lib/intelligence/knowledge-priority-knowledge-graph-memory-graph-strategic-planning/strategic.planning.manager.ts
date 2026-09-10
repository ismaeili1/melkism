import {
planKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateStrategicPlanning
}
from "./strategic.planning.core";


export function runKnowledgeGraphMemoryGraphStrategicPlanning(
data:any
){

return planKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphStrategicPlanning(
agentId:string
){

return evaluateStrategicPlanning(agentId);

}


export function resetKnowledgeGraphMemoryGraphStrategicPlanning(){

return true;

}
