import {
diagnoseKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphDiagnostics,
generateKnowledgeGraphMemoryGraphDiagnosticsReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.diagnostics.engine";


export function runKnowledgeGraphMemoryGraphDiagnostics(
data:any
){

return diagnoseKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphDiagnostics(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphDiagnostics(agentId);

}


export function resetKnowledgeGraphMemoryGraphDiagnostics(){

return true;

}


export {
generateKnowledgeGraphMemoryGraphDiagnosticsReport
};
