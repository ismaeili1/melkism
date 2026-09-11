import {
manageKnowledgePriorityKnowledgeGraphMemoryGraphState,
evaluateKnowledgeGraphMemoryGraphState,
generateKnowledgeGraphMemoryGraphStateReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.state.engine";


export function runKnowledgeGraphMemoryGraphState(
data:any
){

return manageKnowledgePriorityKnowledgeGraphMemoryGraphState(data);

}


export function reviewKnowledgeGraphMemoryGraphState(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphState(agentId);

}


export function resetKnowledgeGraphMemoryGraphState(){

return true;

}


export {
generateKnowledgeGraphMemoryGraphStateReport
};
