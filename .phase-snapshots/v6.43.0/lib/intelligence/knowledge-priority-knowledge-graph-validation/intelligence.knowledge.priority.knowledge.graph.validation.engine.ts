import {
saveKnowledgePriorityKnowledgeGraphValidation,
getAgentKnowledgePriorityKnowledgeGraphValidation
}
from "./intelligence.knowledge.priority.knowledge.graph.validation.store";


export function validateKnowledgePriorityKnowledgeGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphValidation({

id:crypto.randomUUID(),

createdAt:new Date(),

validationStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphValidation(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphValidation(agentId);

}


export function generateKnowledgeGraphValidationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
