
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

status:"prioritized",

metadata:null,

...data

});

}



export function calculateKnowledgeScore(
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

