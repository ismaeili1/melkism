import {
reasonKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphReasoning,
generateKnowledgeGraphReasoningReport
}
from "./intelligence.knowledge.priority.knowledge.graph.reasoning.engine";


export function runKnowledgeGraphReasoning(
data:any
){

return reasonKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphReasoning(
agentId:string
){

return evaluateKnowledgeGraphReasoning(agentId);

}


export function resetKnowledgeGraphReasoning(){

return true;

}


export {
generateKnowledgeGraphReasoningReport
};

