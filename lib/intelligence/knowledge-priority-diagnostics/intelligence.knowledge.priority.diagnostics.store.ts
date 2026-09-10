import type {
IntelligenceKnowledgePriorityDiagnosticsRecord
}
from "./intelligence.knowledge.priority.diagnostics.types";


const records:IntelligenceKnowledgePriorityDiagnosticsRecord[]=[];


export function saveKnowledgePriorityDiagnostics(
record:IntelligenceKnowledgePriorityDiagnosticsRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityDiagnostics(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityDiagnostics(){

records.length=0;

}
