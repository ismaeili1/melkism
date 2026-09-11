import type {
IntelligenceKnowledgePriorityKnowledgeGraphDiagnosticsRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.diagnostics.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphDiagnosticsRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphDiagnostics(
record:IntelligenceKnowledgePriorityKnowledgeGraphDiagnosticsRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphDiagnostics(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphDiagnostics(){

records.length=0;

}
