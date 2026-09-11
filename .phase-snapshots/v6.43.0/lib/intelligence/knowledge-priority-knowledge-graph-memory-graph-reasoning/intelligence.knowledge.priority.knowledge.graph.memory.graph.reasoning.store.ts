import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphReasoningRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.reasoning.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphReasoningRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphReasoning(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphReasoningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphReasoning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphReasoning(){

records.length=0;

}
