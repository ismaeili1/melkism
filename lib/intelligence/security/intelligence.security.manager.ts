
import {

validateSecurity,
checkPermission,
generateSecurityDecision

}
from "./intelligence.security.engine";



export function runSecurityCheck(
data:any
){

return validateSecurity(data);

}



export function reviewSecurity(
agentId:string
){

return checkPermission(agentId);

}



export function resetSecurity(){

return true;

}



export {

generateSecurityDecision

};

