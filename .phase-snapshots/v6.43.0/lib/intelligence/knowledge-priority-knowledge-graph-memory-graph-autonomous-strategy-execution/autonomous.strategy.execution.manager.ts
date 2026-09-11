import {

executeAutonomousStrategyKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousStrategyExecution

}
from "./autonomous.strategy.execution.core";



export function runKnowledgeGraphMemoryGraphAutonomousStrategyExecution(
data:any
){

return executeAutonomousStrategyKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousStrategyExecution(
agentId:string
){

return evaluateAutonomousStrategyExecution(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousStrategyExecution(){

return true;

}
