import type {
IntelligenceKnowledgePriorityKnowledgeGraphStateRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.state.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphStateRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphState(
record:IntelligenceKnowledgePriorityKnowledgeGraphStateRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphState(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphState(){

records.length=0;

}
