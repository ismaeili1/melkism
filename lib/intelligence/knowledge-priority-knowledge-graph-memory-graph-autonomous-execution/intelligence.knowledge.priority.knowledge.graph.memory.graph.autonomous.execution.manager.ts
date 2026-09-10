import {
executeAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphAutonomousExecution
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.execution.engine";


export function runKnowledgeGraphMemoryGraphAutonomousExecution(
data:any
){

return executeAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphAutonomousExecution(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphAutonomousExecution(agentId);

}


export function resetKnowledgeGraphMemoryGraphAutonomousExecution(){

return true;

}
