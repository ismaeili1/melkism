import {
inferKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphInference,
generateKnowledgeGraphMemoryGraphInferenceReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.inference.engine";


export function runKnowledgeGraphMemoryGraphInference(
data:any
){

return inferKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphInference(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphInference(agentId);

}


export function resetKnowledgeGraphMemoryGraphInference(){

return true;

}


export {
generateKnowledgeGraphMemoryGraphInferenceReport
};
