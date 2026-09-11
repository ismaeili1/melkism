import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphDiagnostics,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphDiagnostics
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.diagnostics.store";


export function diagnoseKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphDiagnostics({

id:crypto.randomUUID(),

createdAt:new Date(),

diagnosticsStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphDiagnostics(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphDiagnostics(agentId);

}


export function generateKnowledgeGraphMemoryGraphDiagnosticsReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
