
import {

saveKnowledgeReasoning,
getAgentKnowledgeReasoning

}
from "./intelligence.knowledge.reasoning.store";


export function reasonKnowledge(
data:any
){

return saveKnowledgeReasoning({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"reasoned",

metadata:null,

...data

});

}



export function analyzeKnowledgeRelation(
agentId:string
){

return getAgentKnowledgeReasoning(agentId);

}



export function generateKnowledgeReasoningReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

