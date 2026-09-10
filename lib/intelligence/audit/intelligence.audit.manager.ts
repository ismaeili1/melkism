
import {

recordAudit,
analyzeAudit,
generateAuditReport

}
from "./intelligence.audit.engine";



export function runAudit(
data:any
){

return recordAudit(data);

}



export function reviewAudit(
agentId:string
){

return analyzeAudit(agentId);

}



export function resetAudit(){

return true;

}



export {

generateAuditReport

};

