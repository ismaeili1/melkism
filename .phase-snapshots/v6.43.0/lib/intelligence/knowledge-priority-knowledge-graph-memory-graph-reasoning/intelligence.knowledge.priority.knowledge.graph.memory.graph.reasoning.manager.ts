import {
reasonKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphReasoning,
generateKnowledgeGraphMemoryGraphReasoningReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.reasoning.engine";


export function runKnowledgeGraphMemoryGraphReasoning(
data:any
){

return reasonKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphReasoning(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphReasoning(agentId);

}



export function resetKnowledgeGraphMemoryGraphReasoning(){

return true;

}



export {
generateKnowledgeGraphMemoryGraphReasoningReport
};

