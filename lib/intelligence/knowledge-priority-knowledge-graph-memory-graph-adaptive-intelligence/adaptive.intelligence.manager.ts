import {
adaptKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateAdaptiveIntelligence
}
from "./adaptive.intelligence.core";


export function runKnowledgeGraphMemoryGraphAdaptiveIntelligence(
data:any
){

return adaptKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphAdaptiveIntelligence(
agentId:string
){

return evaluateAdaptiveIntelligence(agentId);

}


export function resetKnowledgeGraphMemoryGraphAdaptiveIntelligence(){

return true;

}
