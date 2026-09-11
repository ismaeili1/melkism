import {
recallKnowledgePriorityKnowledgeGraphMemory,
evaluateKnowledgeGraphMemoryRecall,
generateKnowledgeGraphMemoryRecallReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.recall.engine";


export function runKnowledgeGraphMemoryRecall(
data:any
){

return recallKnowledgePriorityKnowledgeGraphMemory(data);

}



export function reviewKnowledgeGraphMemoryRecall(
agentId:string
){

return evaluateKnowledgeGraphMemoryRecall(agentId);

}



export function resetKnowledgeGraphMemoryRecall(){

return true;

}



export {
generateKnowledgeGraphMemoryRecallReport
};

