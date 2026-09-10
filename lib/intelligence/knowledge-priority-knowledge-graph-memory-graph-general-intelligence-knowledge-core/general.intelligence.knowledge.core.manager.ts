import {

buildGeneralIntelligenceKnowledgeCore,

queryGeneralIntelligenceKnowledgeCore

}
from "./general.intelligence.knowledge.core.engine";


export function runGeneralIntelligenceKnowledgeCore(
data:any
){

return buildGeneralIntelligenceKnowledgeCore(data);

}



export function getGeneralIntelligenceKnowledgeCoreState(
agentId:string
){

return queryGeneralIntelligenceKnowledgeCore(agentId);

}


export function resetGeneralIntelligenceKnowledgeCore(){

return true;

}
