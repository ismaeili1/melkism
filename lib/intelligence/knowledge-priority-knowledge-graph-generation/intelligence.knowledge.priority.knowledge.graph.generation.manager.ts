import {
generateKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphGeneration,
generateKnowledgeGraphGenerationReport
}
from "./intelligence.knowledge.priority.knowledge.graph.generation.engine";


export function runKnowledgeGraphGeneration(
data:any
){

return generateKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphGeneration(
agentId:string
){

return evaluateKnowledgeGraphGeneration(agentId);

}


export function resetKnowledgeGraphGeneration(){

return true;

}


export {
generateKnowledgeGraphGenerationReport
};

