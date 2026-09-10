import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveStrategyRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.strategy.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveStrategyRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveStrategy(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveStrategyRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveStrategy(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
