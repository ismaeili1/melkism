import type {
IntelligenceKnowledgePriorityStateRecord
}
from "./intelligence.knowledge.priority.state.types";


const records:IntelligenceKnowledgePriorityStateRecord[]=[];


export function saveKnowledgePriorityState(
record:IntelligenceKnowledgePriorityStateRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityState(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityState(){

records.length=0;

}
