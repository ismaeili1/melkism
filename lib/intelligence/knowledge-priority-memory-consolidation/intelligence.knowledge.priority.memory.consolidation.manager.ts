import {
consolidateKnowledgePriorityMemory,
evaluateMemoryConsolidation,
generateMemoryConsolidationReport
}
from "./intelligence.knowledge.priority.memory.consolidation.engine";


export function runMemoryConsolidation(
data:any
){

return consolidateKnowledgePriorityMemory(data);

}


export function reviewMemoryConsolidation(
agentId:string
){

return evaluateMemoryConsolidation(agentId);

}


export function resetMemoryConsolidation(){

return true;

}


export {
generateMemoryConsolidationReport
};

