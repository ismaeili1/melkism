import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAdaptationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.adaptation.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAdaptationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAdaptation(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAdaptationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAdaptation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
