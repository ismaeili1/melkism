import {
retainKnowledgePriorityKnowledge,
evaluateKnowledgeRetention,
generateKnowledgeRetentionReport
}
from "./intelligence.knowledge.priority.knowledge.retention.engine";


export function runKnowledgeRetention(
data:any
){

return retainKnowledgePriorityKnowledge(data);

}


export function reviewKnowledgeRetention(
agentId:string
){

return evaluateKnowledgeRetention(agentId);

}


export function resetKnowledgeRetention(){

return true;

}


export {
generateKnowledgeRetentionReport
};

