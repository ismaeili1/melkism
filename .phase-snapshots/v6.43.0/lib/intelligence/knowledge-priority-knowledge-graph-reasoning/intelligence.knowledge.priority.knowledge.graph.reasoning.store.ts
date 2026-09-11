import type {
IntelligenceKnowledgePriorityKnowledgeGraphReasoningRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.reasoning.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphReasoningRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphReasoning(
record:IntelligenceKnowledgePriorityKnowledgeGraphReasoningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphReasoning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphReasoning(){

records.length=0;

}
