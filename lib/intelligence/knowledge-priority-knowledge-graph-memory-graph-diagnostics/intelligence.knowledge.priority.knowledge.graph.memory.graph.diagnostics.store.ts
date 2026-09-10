import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphDiagnosticsRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.diagnostics.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphDiagnosticsRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphDiagnostics(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphDiagnosticsRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphDiagnostics(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphDiagnostics(){

records.length=0;

}
