
import {

saveDiagnosticsRecord,
getAgentDiagnostics

}
from "./intelligence.diagnostics.store";



export function runDiagnostics(
data:any
){

return saveDiagnosticsRecord({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"detected",

severity:"normal",

metadata:null,

...data

});

}



export function analyzeIssue(
agentId:string
){

return getAgentDiagnostics(agentId);

}



export function generateDiagnosticReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

