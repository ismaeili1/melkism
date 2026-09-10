import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryRetentionRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.retention.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryRetentionRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryRetention(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryRetentionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryRetention(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryRetention(){

records.length=0;

}
