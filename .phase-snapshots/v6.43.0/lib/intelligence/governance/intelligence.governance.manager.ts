
import {

evaluatePolicy,
checkCompliance,
generateGovernanceDecision

}
from "./intelligence.governance.engine";



export function runGovernance(
data:any
){

return evaluatePolicy(data);

}



export function reviewGovernance(
agentId:string
){

return checkCompliance(agentId);

}



export function resetGovernance(){

return true;

}



export {

generateGovernanceDecision

};

