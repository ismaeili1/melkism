import {
createKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraph,
generateKnowledgeGraphMemoryGraphReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.engine";


export function runKnowledgeGraphMemoryGraph(
data:any
){

return createKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}



export function reviewKnowledgeGraphMemoryGraph(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraph(agentId);

}



export function resetKnowledgeGraphMemoryGraph(){

return true;

}



export {
generateKnowledgeGraphMemoryGraphReport
};

