
import {

saveGovernance,
getAgentGovernance

}
from "./intelligence.governance.store";



export function evaluatePolicy(
data:any
){

return saveGovernance({

id:crypto.randomUUID(),

createdAt:new Date(),

compliance:true,

risk:null,

...data

});

}



export function checkCompliance(
agentId:string
){

return getAgentGovernance(agentId);

}



export function generateGovernanceDecision(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

