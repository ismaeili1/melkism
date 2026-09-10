import {
saveKnowledgePriorityKnowledgeGraphDiagnostics,
getAgentKnowledgePriorityKnowledgeGraphDiagnostics
}
from "./intelligence.knowledge.priority.knowledge.graph.diagnostics.store";


export function diagnoseKnowledgePriorityKnowledgeGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphDiagnostics({

id:crypto.randomUUID(),

createdAt:new Date(),

diagnosticsStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphDiagnostics(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphDiagnostics(agentId);

}


export function generateKnowledgeGraphDiagnosticsReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
