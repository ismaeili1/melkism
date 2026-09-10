import {
consolidateKnowledgePriorityKnowledgeGraphMemory,
evaluateKnowledgeGraphMemoryConsolidation,
generateKnowledgeGraphMemoryConsolidationReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.consolidation.engine";


export function runKnowledgeGraphMemoryConsolidation(
data:any
){

return consolidateKnowledgePriorityKnowledgeGraphMemory(data);

}


export function reviewKnowledgeGraphMemoryConsolidation(
agentId:string
){

return evaluateKnowledgeGraphMemoryConsolidation(agentId);

}


export function resetKnowledgeGraphMemoryConsolidation(){

return true;

}


export {
generateKnowledgeGraphMemoryConsolidationReport
};

