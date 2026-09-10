import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSelfImprovementRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.self.improvement.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSelfImprovementRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSelfImprovement(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSelfImprovementRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveSelfImprovement(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
