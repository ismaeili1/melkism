import {

reasonGeneralIntelligenceKnowledgePriorityKnowledgeGraphMemoryGraph,

evaluateGeneralIntelligenceReasoning

}
from "./general.reasoning.core.engine";


export function runKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore(
data:any
){

return reasonGeneralIntelligenceKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore(
agentId:string
){

return evaluateGeneralIntelligenceReasoning(agentId);

}


export function resetKnowledgeGraphMemoryGraphGeneralIntelligenceReasoningCore(){

return true;

}
