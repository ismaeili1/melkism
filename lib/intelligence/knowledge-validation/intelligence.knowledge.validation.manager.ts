import {
validateKnowledge,
evaluateKnowledgeQuality,
generateKnowledgeValidationReport
}
from "./intelligence.knowledge.validation.engine";


export function runKnowledgeValidation(
data:any
){

return validateKnowledge(data);

}


export function reviewKnowledgeValidation(
agentId:string
){

return evaluateKnowledgeQuality(agentId);

}


export function resetKnowledgeValidation(){

return true;

}


export {
generateKnowledgeValidationReport
};
