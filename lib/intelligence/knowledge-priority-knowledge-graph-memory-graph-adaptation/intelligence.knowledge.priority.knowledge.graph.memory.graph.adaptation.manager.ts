import {
adaptKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphAdaptation,
generateKnowledgeGraphMemoryGraphAdaptationReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.adaptation.engine";


export function runKnowledgeGraphMemoryGraphAdaptation(
data:any
){

return adaptKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphAdaptation(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphAdaptation(agentId);

}


export function resetKnowledgeGraphMemoryGraphAdaptation(){

return true;

}


export {
generateKnowledgeGraphMemoryGraphAdaptationReport
};
