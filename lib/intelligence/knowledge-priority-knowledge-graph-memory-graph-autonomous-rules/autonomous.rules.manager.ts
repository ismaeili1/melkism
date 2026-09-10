import {

createAutonomousRuleKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAutonomousRules

}
from "./autonomous.rules.core";



export function runKnowledgeGraphMemoryGraphAutonomousRules(
data:any
){

return createAutonomousRuleKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphAutonomousRules(
agentId:string
){

return evaluateAutonomousRules(agentId);

}



export function resetKnowledgeGraphMemoryGraphAutonomousRules(){

return true;

}
