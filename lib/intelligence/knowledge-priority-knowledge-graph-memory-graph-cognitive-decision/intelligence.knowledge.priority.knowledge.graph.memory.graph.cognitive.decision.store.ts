import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveDecisionRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.decision.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveDecisionRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveDecision(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveDecisionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveDecision(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
