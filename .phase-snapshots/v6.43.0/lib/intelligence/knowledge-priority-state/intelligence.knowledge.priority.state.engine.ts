import {
saveKnowledgePriorityState,
getAgentKnowledgePriorityState
}
from "./intelligence.knowledge.priority.state.store";


export function manageKnowledgePriorityState(
data:any
){

return saveKnowledgePriorityState({

id:crypto.randomUUID(),

createdAt:new Date(),

stateStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePriorityState(
agentId:string
){

return getAgentKnowledgePriorityState(agentId);

}



export function generatePriorityStateReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
