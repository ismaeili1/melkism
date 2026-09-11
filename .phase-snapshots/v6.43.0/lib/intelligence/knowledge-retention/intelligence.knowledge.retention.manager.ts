
import {

retainKnowledge,
evaluateKnowledgeValue,
generateKnowledgeRetentionReport

}
from "./intelligence.knowledge.retention.engine";


export function runKnowledgeRetention(
data:any
){

return retainKnowledge(data);

}



export function reviewKnowledgeRetention(
agentId:string
){

return evaluateKnowledgeValue(agentId);

}



export function resetKnowledgeRetention(){

return true;

}



export {

generateKnowledgeRetentionReport

};

