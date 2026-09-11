import {
synthesizeKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphSynthesis,
generateKnowledgeGraphSynthesisReport
}
from "./intelligence.knowledge.priority.knowledge.graph.synthesis.engine";


export function runKnowledgeGraphSynthesis(
data:any
){

return synthesizeKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphSynthesis(
agentId:string
){

return evaluateKnowledgeGraphSynthesis(agentId);

}


export function resetKnowledgeGraphSynthesis(){

return true;

}


export {
generateKnowledgeGraphSynthesisReport
};

