import {
diagnoseKnowledge,
detectKnowledgeIssue,
generateKnowledgeDiagnosticsReport
}
from "./intelligence.knowledge.diagnostics.engine";


export function runKnowledgeDiagnostics(
data:any
){

return diagnoseKnowledge(data);

}


export function reviewKnowledgeDiagnostics(
agentId:string
){

return detectKnowledgeIssue(agentId);

}


export function resetKnowledgeDiagnostics(){

return true;

}


export {
generateKnowledgeDiagnosticsReport
};

