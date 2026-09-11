import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveInferenceRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.inference.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveInferenceRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveInference(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveInferenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveInference(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
