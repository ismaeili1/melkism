import {
optimizeKnowledge,
evaluateKnowledgeValue,
generateKnowledgeOptimizationReport
}
from "./intelligence.knowledge.optimization.engine";


export function runKnowledgeOptimization(
data:any
){

return optimizeKnowledge(data);

}


export function reviewKnowledgeOptimization(
agentId:string
){

return evaluateKnowledgeValue(agentId);

}


export function resetKnowledgeOptimization(){

return true;

}


export {
generateKnowledgeOptimizationReport
};

