import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSynthesisRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.synthesis.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSynthesisRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSynthesis(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSynthesisRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSynthesis(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
