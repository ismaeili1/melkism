import {
saveKnowledgeValidation,
getAgentKnowledgeValidation
}
from "./intelligence.knowledge.validation.store";


export function validateKnowledge(
data:any
){

return saveKnowledgeValidation({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"validated",

metadata:null,

...data

});

}



export function evaluateKnowledgeQuality(
agentId:string
){

return getAgentKnowledgeValidation(agentId);

}



export function generateKnowledgeValidationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
