import {
diagnoseKnowledgePriority,
evaluatePriorityDiagnostics,
generatePriorityDiagnosticsReport
}
from "./intelligence.knowledge.priority.diagnostics.engine";


export function runPriorityDiagnostics(
data:any
){

return diagnoseKnowledgePriority(data);

}


export function reviewPriorityDiagnostics(
agentId:string
){

return evaluatePriorityDiagnostics(agentId);

}


export function resetPriorityDiagnostics(){

return true;

}


export {
generatePriorityDiagnosticsReport
};

