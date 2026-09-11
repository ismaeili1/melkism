import {
generateKnowledge,
createKnowledgeArtifact,
generateKnowledgeGenerationReport
}
from "./intelligence.knowledge.generation.engine";


export function runKnowledgeGeneration(
data:any
){

return generateKnowledge(data);

}


export function reviewKnowledgeGeneration(
agentId:string
){

return createKnowledgeArtifact(agentId);

}


export function resetKnowledgeGeneration(){

return true;

}


export {
generateKnowledgeGenerationReport
};
