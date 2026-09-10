import {
orchestrateKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphOrchestration,
generateKnowledgeGraphMemoryGraphOrchestrationReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.orchestration.engine";


export function runKnowledgeGraphMemoryGraphOrchestration(
data:any
){

return orchestrateKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphOrchestration(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphOrchestration(agentId);

}


export function resetKnowledgeGraphMemoryGraphOrchestration(){

return true;

}


export {
generateKnowledgeGraphMemoryGraphOrchestrationReport
};
