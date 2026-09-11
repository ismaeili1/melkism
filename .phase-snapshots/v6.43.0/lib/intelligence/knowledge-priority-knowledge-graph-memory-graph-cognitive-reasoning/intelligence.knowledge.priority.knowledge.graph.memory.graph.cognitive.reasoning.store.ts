import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveReasoningRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.reasoning.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveReasoningRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveReasoning(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveReasoningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveReasoning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
