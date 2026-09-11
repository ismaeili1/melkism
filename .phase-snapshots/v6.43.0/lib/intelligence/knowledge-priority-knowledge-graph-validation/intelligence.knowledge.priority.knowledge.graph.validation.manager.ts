import {
validateKnowledgePriorityKnowledgeGraph,
evaluateKnowledgeGraphValidation,
generateKnowledgeGraphValidationReport
}
from "./intelligence.knowledge.priority.knowledge.graph.validation.engine";


export function runKnowledgeGraphValidation(
data:any
){

return validateKnowledgePriorityKnowledgeGraph(data);

}


export function reviewKnowledgeGraphValidation(
agentId:string
){

return evaluateKnowledgeGraphValidation(agentId);

}


export function resetKnowledgeGraphValidation(){

return true;

}


export {
generateKnowledgeGraphValidationReport
};

