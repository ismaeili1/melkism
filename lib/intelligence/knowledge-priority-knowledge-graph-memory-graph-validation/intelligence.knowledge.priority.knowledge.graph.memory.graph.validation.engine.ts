import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphValidation,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphValidation
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.validation.store";


export function validateKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphValidation({

id:crypto.randomUUID(),

createdAt:new Date(),

validationStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphValidation(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphValidation(agentId);

}


export function generateKnowledgeGraphMemoryGraphValidationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
