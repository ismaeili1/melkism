import {
saveKnowledgePriorityKnowledgeAssociation,
getAgentKnowledgePriorityKnowledgeAssociation
}
from "./intelligence.knowledge.priority.knowledge.association.store";


export function associateKnowledgePriorityKnowledge(
data:any
){

return saveKnowledgePriorityKnowledgeAssociation({

id:crypto.randomUUID(),

createdAt:new Date(),

associationStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeAssociation(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeAssociation(agentId);

}


export function generateKnowledgeAssociationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
