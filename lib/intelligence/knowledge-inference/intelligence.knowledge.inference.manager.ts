
import {

inferKnowledge,
deriveKnowledge,
generateKnowledgeInferenceReport

}
from "./intelligence.knowledge.inference.engine";


export function runKnowledgeInference(
data:any
){

return inferKnowledge(data);

}



export function reviewKnowledgeInference(
agentId:string
){

return deriveKnowledge(agentId);

}



export function resetKnowledgeInference(){

return true;

}



export {

generateKnowledgeInferenceReport

};

