import {
saveKnowledgePriorityGovernance,
getAgentKnowledgePriorityGovernance
}
from "./intelligence.knowledge.priority.governance.store";


export function governKnowledgePriority(
data:any
){

return saveKnowledgePriorityGovernance({

id:crypto.randomUUID(),

createdAt:new Date(),

governanceStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePriorityGovernance(
agentId:string
){

return getAgentKnowledgePriorityGovernance(agentId);

}



export function generatePriorityGovernanceReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
