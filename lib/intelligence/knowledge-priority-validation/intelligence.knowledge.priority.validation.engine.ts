import {
saveKnowledgePriorityValidation,
getAgentKnowledgePriorityValidation
}
from "./intelligence.knowledge.priority.validation.store";


export function validateKnowledgePriority(
data:any
){

return saveKnowledgePriorityValidation({

id:crypto.randomUUID(),

createdAt:new Date(),

validationStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePriorityValidation(
agentId:string
){

return getAgentKnowledgePriorityValidation(agentId);

}



export function generatePriorityValidationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
