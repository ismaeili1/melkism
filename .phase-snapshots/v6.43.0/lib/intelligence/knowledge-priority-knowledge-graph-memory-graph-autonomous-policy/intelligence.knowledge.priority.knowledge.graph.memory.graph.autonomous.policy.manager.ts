import {
createAutonomousKnowledgePriorityKnowledgeGraphMemoryGraphPolicy,
evaluateKnowledgeGraphMemoryGraphAutonomousPolicy
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.policy.engine";


export function runKnowledgeGraphMemoryGraphAutonomousPolicy(
data:any
){

return createAutonomousKnowledgePriorityKnowledgeGraphMemoryGraphPolicy(data);

}


export function reviewKnowledgeGraphMemoryGraphAutonomousPolicy(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphAutonomousPolicy(agentId);

}


export function resetKnowledgeGraphMemoryGraphAutonomousPolicy(){

return true;

}
