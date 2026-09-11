import {
generateKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphGeneration,
generateKnowledgeGraphMemoryGraphGenerationReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.generation.engine";


export function runKnowledgeGraphMemoryGraphGeneration(
data:any
){

return generateKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphGeneration(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphGeneration(agentId);

}


export function resetKnowledgeGraphMemoryGraphGeneration(){

return true;

}


export {
generateKnowledgeGraphMemoryGraphGenerationReport
};
