import {
validateKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphValidation,
generateKnowledgeGraphMemoryGraphValidationReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.validation.engine";


export function runKnowledgeGraphMemoryGraphValidation(
data:any
){

return validateKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphValidation(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphValidation(agentId);

}


export function resetKnowledgeGraphMemoryGraphValidation(){

return true;

}


export {
generateKnowledgeGraphMemoryGraphValidationReport
};
