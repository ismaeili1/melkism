
import {

saveKnowledgeInference,
getAgentKnowledgeInference

}
from "./intelligence.knowledge.inference.store";


export function inferKnowledge(
data:any
){

return saveKnowledgeInference({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"inferred",

metadata:null,

...data

});

}



export function deriveKnowledge(
agentId:string
){

return getAgentKnowledgeInference(agentId);

}



export function generateKnowledgeInferenceReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

