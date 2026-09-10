import type {
IntelligenceKnowledgePriorityReasoningRecord
}
from "./intelligence.knowledge.priority.reasoning.types";


const records:IntelligenceKnowledgePriorityReasoningRecord[]=[];


export function saveKnowledgePriorityReasoning(
record:IntelligenceKnowledgePriorityReasoningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityReasoning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityReasoning(){

records.length=0;

}
