import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.optimization.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimization(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphOptimizationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimization(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphOptimization(){

records.length=0;

}
