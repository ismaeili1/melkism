import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitivePlanningRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.planning.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitivePlanningRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitivePlanning(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphCognitivePlanningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitivePlanning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
