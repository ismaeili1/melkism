import {
operateAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphAutonomousOperation
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.operation.engine";


export function runKnowledgeGraphMemoryGraphAutonomousOperation(
data:any
){

return operateAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphAutonomousOperation(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphAutonomousOperation(agentId);

}


export function resetKnowledgeGraphMemoryGraphAutonomousOperation(){

return true;

}
