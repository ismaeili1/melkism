import {
manageKnowledgePriorityKnowledgeGraphState,
evaluateKnowledgeGraphState,
generateKnowledgeGraphStateReport
}
from "./intelligence.knowledge.priority.knowledge.graph.state.engine";


export function runKnowledgeGraphState(
data:any
){

return manageKnowledgePriorityKnowledgeGraphState(data);

}


export function reviewKnowledgeGraphState(
agentId:string
){

return evaluateKnowledgeGraphState(agentId);

}


export function resetKnowledgeGraphState(){

return true;

}


export {
generateKnowledgeGraphStateReport
};

