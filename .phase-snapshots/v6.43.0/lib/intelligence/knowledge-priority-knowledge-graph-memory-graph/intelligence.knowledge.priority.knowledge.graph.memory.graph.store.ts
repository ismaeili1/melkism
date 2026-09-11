import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraph(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraph(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraph(){

records.length=0;

}
