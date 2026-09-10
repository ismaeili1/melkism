import {
recallKnowledgePriorityKnowledge,
evaluateKnowledgeRecall,
generateKnowledgeRecallReport
}
from "./intelligence.knowledge.priority.knowledge.recall.engine";


export function runKnowledgeRecall(
data:any
){

return recallKnowledgePriorityKnowledge(data);

}


export function reviewKnowledgeRecall(
agentId:string
){

return evaluateKnowledgeRecall(agentId);

}


export function resetKnowledgeRecall(){

return true;

}


export {
generateKnowledgeRecallReport
};

