import {
synthesizeKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphSynthesis,
generateKnowledgeGraphMemoryGraphSynthesisReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.synthesis.engine";


export function runKnowledgeGraphMemoryGraphSynthesis(
data:any
){

return synthesizeKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraphSynthesis(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphSynthesis(agentId);

}



export function resetKnowledgeGraphMemoryGraphSynthesis(){

return true;

}



export {
generateKnowledgeGraphMemoryGraphSynthesisReport
};

