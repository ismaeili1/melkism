import {

initializeGeneralIntelligenceCognitiveCore,

inspectGeneralIntelligenceCognitiveCore

}
from "./general.intelligence.cognitive.core.engine";


export function runKnowledgeGraphMemoryGraphGeneralIntelligenceCognitiveCore(
data:any
){

return initializeGeneralIntelligenceCognitiveCore(data);

}


export function reviewKnowledgeGraphMemoryGraphGeneralIntelligenceCognitiveCore(
agentId:string
){

return inspectGeneralIntelligenceCognitiveCore(agentId);

}


export function resetKnowledgeGraphMemoryGraphGeneralIntelligenceCognitiveCore(){

return true;

}
