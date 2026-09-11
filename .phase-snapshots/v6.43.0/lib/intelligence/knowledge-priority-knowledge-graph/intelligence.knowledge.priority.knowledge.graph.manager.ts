import {
buildKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraph,
generateKnowledgeGraphReport
}
from "./intelligence.knowledge.priority.knowledge.graph.engine";


export function runKnowledgeGraph(
data:any
){

return buildKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraph(
agentId:string
){

return evaluateKnowledgeGraph(agentId);

}


export function resetKnowledgeGraph(){

return true;

}


export {
generateKnowledgeGraphReport
};

