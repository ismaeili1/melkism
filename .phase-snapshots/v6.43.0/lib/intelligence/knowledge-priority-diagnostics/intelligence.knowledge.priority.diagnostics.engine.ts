import {
saveKnowledgePriorityDiagnostics,
getAgentKnowledgePriorityDiagnostics
}
from "./intelligence.knowledge.priority.diagnostics.store";


export function diagnoseKnowledgePriority(
data:any
){

return saveKnowledgePriorityDiagnostics({

id:crypto.randomUUID(),

createdAt:new Date(),

diagnosticsStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePriorityDiagnostics(
agentId:string
){

return getAgentKnowledgePriorityDiagnostics(agentId);

}



export function generatePriorityDiagnosticsReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
