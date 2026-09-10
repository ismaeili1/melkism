import {
orchestrateKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphOrchestration,
generateKnowledgeGraphOrchestrationReport
}
from "./intelligence.knowledge.priority.knowledge.graph.orchestration.engine";


export function runKnowledgeGraphOrchestration(
data:any
){

return orchestrateKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphOrchestration(
agentId:string
){

return evaluateKnowledgeGraphOrchestration(agentId);

}


export function resetKnowledgeGraphOrchestration(){

return true;

}


export {
generateKnowledgeGraphOrchestrationReport
};

