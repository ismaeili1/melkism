import {
understandKnowledgePriorityKnowledgeGraphMemoryGraphContext,
evaluateContextAwareIntelligence
}
from "./context.aware.intelligence.core";


export function runKnowledgeGraphMemoryGraphContextAwareIntelligence(
data:any
){

return understandKnowledgePriorityKnowledgeGraphMemoryGraphContext(data);

}


export function reviewKnowledgeGraphMemoryGraphContextAwareIntelligence(
agentId:string
){

return evaluateContextAwareIntelligence(agentId);

}


export function resetKnowledgeGraphMemoryGraphContextAwareIntelligence(){

return true;

}
