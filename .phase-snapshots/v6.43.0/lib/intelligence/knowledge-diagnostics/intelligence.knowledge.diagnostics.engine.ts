import {
saveKnowledgeDiagnostics,
getAgentKnowledgeDiagnostics
}
from "./intelligence.knowledge.diagnostics.store";


export function diagnoseKnowledge(
data:any
){

return saveKnowledgeDiagnostics({

id:crypto.randomUUID(),

createdAt:new Date(),

diagnosticStatus:"completed",

metadata:null,

...data

});

}



export function detectKnowledgeIssue(
agentId:string
){

return getAgentKnowledgeDiagnostics(agentId);

}



export function generateKnowledgeDiagnosticsReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
