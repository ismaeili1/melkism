import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveActionRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.action.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveActionRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAction(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveActionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveAction(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
