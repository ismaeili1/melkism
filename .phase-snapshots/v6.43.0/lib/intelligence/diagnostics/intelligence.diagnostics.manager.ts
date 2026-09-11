
import {

runDiagnostics,
analyzeIssue,
generateDiagnosticReport

}
from "./intelligence.diagnostics.engine";



export function executeDiagnostics(
data:any
){

return runDiagnostics(data);

}



export function reviewDiagnostics(
agentId:string
){

return analyzeIssue(agentId);

}



export function resetDiagnostics(){

return true;

}



export {

generateDiagnosticReport

};

