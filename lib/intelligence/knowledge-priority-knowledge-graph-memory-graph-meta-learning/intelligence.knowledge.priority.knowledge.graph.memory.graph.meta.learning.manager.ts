import {
metaLearnKnowledgePriorityKnowledgeGraphMemoryGraph,
evaluateKnowledgeGraphMemoryGraphMetaLearning,
generateKnowledgeGraphMemoryGraphMetaLearningReport
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.meta.learning.engine";


export function runKnowledgeGraphMemoryGraphMetaLearning(
data:any
){

return metaLearnKnowledgePriorityKnowledgeGraphMemoryGraph(data);

}


export function reviewKnowledgeGraphMemoryGraphMetaLearning(
agentId:string
){

return evaluateKnowledgeGraphMemoryGraphMetaLearning(agentId);

}


export function resetKnowledgeGraphMemoryGraphMetaLearning(){

return true;

}


export {
generateKnowledgeGraphMemoryGraphMetaLearningReport
};
