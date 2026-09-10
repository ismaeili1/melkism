import {
strategizeAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateAutonomousStrategy
}
from "./autonomous.strategy.core";


export function runKnowledgeGraphMemoryGraphAutonomousStrategy(
data:any
){

return strategizeAutonomousKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphAutonomousStrategy(
agentId:string
){

return evaluateAutonomousStrategy(agentId);

}


export function resetKnowledgeGraphMemoryGraphAutonomousStrategy(){

return true;

}
