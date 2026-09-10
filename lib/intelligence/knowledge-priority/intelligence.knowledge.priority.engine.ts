import {
saveKnowledgePriority,
getAgentKnowledgePriority
}
from "./intelligence.knowledge.priority.store";


export function prioritizeKnowledge(
data:any
){

return saveKnowledgePriority({

id:crypto.randomUUID(),

createdAt:new Date(),

priorityStatus:"completed",

metadata:null,

...data

});

}



export function evaluateKnowledgePriority(
agentId:string
){

return getAgentKnowledgePriority(agentId);

}



export function generateKnowledgePriorityReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
