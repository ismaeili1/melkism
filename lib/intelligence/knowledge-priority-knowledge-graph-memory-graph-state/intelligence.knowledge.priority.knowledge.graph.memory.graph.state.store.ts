import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphStateRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.state.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphStateRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphState(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphStateRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphState(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphState(){

records.length=0;

}
