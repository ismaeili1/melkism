import {
inferKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphInference,
generateKnowledgeGraphInferenceReport
}
from "./intelligence.knowledge.priority.knowledge.graph.inference.engine";


export function runKnowledgeGraphInference(
data:any
){

return inferKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphInference(
agentId:string
){

return evaluateKnowledgeGraphInference(agentId);

}


export function resetKnowledgeGraphInference(){

return true;

}


export {
generateKnowledgeGraphInferenceReport
};

