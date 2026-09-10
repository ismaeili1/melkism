import {
createAutonomousKnowledgePriorityKnowledgeGraphMemoryGraphRule,
evaluateKnowledgeGraphMemoryGraphAutonomousRules
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.rules.engine";


export function runKnowledgeGraphMemoryGraphAutonomousRules(
data:any
){

return createAutonomousKnowledgePriorityKnowledgeGraphMemoryGraphRule(data);

}


export function reviewKnowledgeGraphMemoryGraphAutonomousRules(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphAutonomousRules(agentId);

}


export function resetKnowledgeGraphMemoryGraphAutonomousRules(){

return true;

}
