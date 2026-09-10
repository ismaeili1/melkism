import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCognitiveCore,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCognitiveCore

}
from "./general.intelligence.cognitive.core.store";


export function initializeGeneralIntelligenceCognitiveCore(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCognitiveCore({

id:crypto.randomUUID(),

createdAt:new Date(),

cognitiveConfidence:0,

coreState:"initialized",

metadata:null,

...data

});

}


export function inspectGeneralIntelligenceCognitiveCore(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCognitiveCore(agentId);

}
