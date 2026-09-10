import type {
IntelligenceKnowledgeDiagnosticsRecord
}
from "./intelligence.knowledge.diagnostics.types";


const records:IntelligenceKnowledgeDiagnosticsRecord[]=[];


export function saveKnowledgeDiagnostics(
record:IntelligenceKnowledgeDiagnosticsRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeDiagnostics(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeDiagnostics(){

records.length=0;

}
