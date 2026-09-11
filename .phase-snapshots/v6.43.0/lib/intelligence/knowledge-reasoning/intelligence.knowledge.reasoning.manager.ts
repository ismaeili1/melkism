
import {

reasonKnowledge,
analyzeKnowledgeRelation,
generateKnowledgeReasoningReport

}
from "./intelligence.knowledge.reasoning.engine";


export function runKnowledgeReasoning(
data:any
){

return reasonKnowledge(data);

}



export function reviewKnowledgeReasoning(
agentId:string
){

return analyzeKnowledgeRelation(agentId);

}



export function resetKnowledgeReasoning(){

return true;

}



export {

generateKnowledgeReasoningReport

};

