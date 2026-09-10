
import {

prioritizeKnowledge,
calculateKnowledgeScore,
generateKnowledgePriorityReport

}
from "./intelligence.knowledge.priority.engine";


export function runKnowledgePrioritization(
data:any
){

return prioritizeKnowledge(data);

}



export function reviewKnowledgePriority(
agentId:string
){

return calculateKnowledgeScore(agentId);

}



export function resetKnowledgePriority(){

return true;

}



export {

generateKnowledgePriorityReport

};

