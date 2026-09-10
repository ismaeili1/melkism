import {
saveKnowledgePriorityOrchestration,
getAgentKnowledgePriorityOrchestration
}
from "./intelligence.knowledge.priority.orchestration.store";


export function orchestrateKnowledgePriority(
data:any
){

return saveKnowledgePriorityOrchestration({

id:crypto.randomUUID(),

createdAt:new Date(),

orchestrationStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePriorityOrchestration(
agentId:string
){

return getAgentKnowledgePriorityOrchestration(agentId);

}



export function generatePriorityOrchestrationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
