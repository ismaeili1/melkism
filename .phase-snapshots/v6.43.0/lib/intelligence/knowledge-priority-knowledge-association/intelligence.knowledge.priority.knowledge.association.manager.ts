import {
associateKnowledgePriorityKnowledge,
evaluateKnowledgeAssociation,
generateKnowledgeAssociationReport
}
from "./intelligence.knowledge.priority.knowledge.association.engine";


export function runKnowledgeAssociation(
data:any
){

return associateKnowledgePriorityKnowledge(data);

}


export function reviewKnowledgeAssociation(
agentId:string
){

return evaluateKnowledgeAssociation(agentId);

}


export function resetKnowledgeAssociation(){

return true;

}


export {
generateKnowledgeAssociationReport
};

