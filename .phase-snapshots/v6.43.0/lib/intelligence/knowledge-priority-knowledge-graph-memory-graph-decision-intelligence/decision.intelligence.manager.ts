import {
decideKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateDecisionIntelligence
}
from "./decision.intelligence.core";


export function runKnowledgeGraphMemoryGraphDecisionIntelligence(
data:any
){

return decideKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphDecisionIntelligence(
agentId:string
){

return evaluateDecisionIntelligence(agentId);

}


export function resetKnowledgeGraphMemoryGraphDecisionIntelligence(){

return true;

}
