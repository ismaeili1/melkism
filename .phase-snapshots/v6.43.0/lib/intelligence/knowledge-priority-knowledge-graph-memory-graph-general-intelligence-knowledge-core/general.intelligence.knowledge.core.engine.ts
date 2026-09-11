import {

saveGeneralIntelligenceKnowledgeCore,

getAgentGeneralIntelligenceKnowledgeCore

}
from "./general.intelligence.knowledge.core.store";


export function buildGeneralIntelligenceKnowledgeCore(
data:any
){

return saveGeneralIntelligenceKnowledgeCore({

id:crypto.randomUUID(),

createdAt:new Date(),

knowledgeConfidence:0,

...data

});

}



export function queryGeneralIntelligenceKnowledgeCore(
agentId:string
){

return getAgentGeneralIntelligenceKnowledgeCore(agentId);

}
