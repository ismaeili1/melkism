import {
saveKnowledgeGeneration,
getAgentKnowledgeGeneration
}
from "./intelligence.knowledge.generation.store";


export function generateKnowledge(
data:any
){

return saveKnowledgeGeneration({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"generated",

metadata:null,

...data

});

}


export function createKnowledgeArtifact(
agentId:string
){

return getAgentKnowledgeGeneration(agentId);

}


export function generateKnowledgeGenerationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
