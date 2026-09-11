import {
diagnoseKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphDiagnostics,
generateKnowledgeGraphDiagnosticsReport
}
from "./intelligence.knowledge.priority.knowledge.graph.diagnostics.engine";


export function runKnowledgeGraphDiagnostics(
data:any
){

return diagnoseKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphDiagnostics(
agentId:string
){

return evaluateKnowledgeGraphDiagnostics(agentId);

}


export function resetKnowledgeGraphDiagnostics(){

return true;

}


export {
generateKnowledgeGraphDiagnosticsReport
};

