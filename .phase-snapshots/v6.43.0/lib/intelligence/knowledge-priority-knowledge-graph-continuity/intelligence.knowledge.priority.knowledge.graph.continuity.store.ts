import type {
IntelligenceKnowledgePriorityKnowledgeGraphContinuityRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.continuity.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphContinuityRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphContinuity(
record:IntelligenceKnowledgePriorityKnowledgeGraphContinuityRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphContinuity(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphContinuity(){

records.length=0;

}
