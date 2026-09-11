import {

improveAdaptiveKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateAdaptiveSelfImprovement

}
from "./adaptive.self.improvement.core";


export function runKnowledgeGraphMemoryGraphAdaptiveSelfImprovement(
data:any
){

return improveAdaptiveKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphAdaptiveSelfImprovement(
agentId:string
){

return evaluateAdaptiveSelfImprovement(agentId);

}


export function resetKnowledgeGraphMemoryGraphAdaptiveSelfImprovement(){

return true;

}
