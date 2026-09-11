import {
reasonKnowledgePriorityKnowledgeGraphMemoryGraphContext,
evaluateContextReasoning
}
from "./context.reasoning.core";


export function runKnowledgeGraphMemoryGraphContextReasoning(
data:any
){

return reasonKnowledgePriorityKnowledgeGraphMemoryGraphContext(data);

}


export function reviewKnowledgeGraphMemoryGraphContextReasoning(
agentId:string
){

return evaluateContextReasoning(agentId);

}


export function resetKnowledgeGraphMemoryGraphContextReasoning(){

return true;

}
