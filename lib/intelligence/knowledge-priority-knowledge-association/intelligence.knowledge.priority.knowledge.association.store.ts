import type {
IntelligenceKnowledgePriorityKnowledgeAssociationRecord
}
from "./intelligence.knowledge.priority.knowledge.association.types";


const records:IntelligenceKnowledgePriorityKnowledgeAssociationRecord[]=[];


export function saveKnowledgePriorityKnowledgeAssociation(
record:IntelligenceKnowledgePriorityKnowledgeAssociationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeAssociation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeAssociation(){

records.length=0;

}
