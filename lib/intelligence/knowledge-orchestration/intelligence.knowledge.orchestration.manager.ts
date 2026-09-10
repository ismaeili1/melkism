import {
orchestrateKnowledge,
coordinateKnowledgeFlow,
generateKnowledgeOrchestrationReport
}
from "./intelligence.knowledge.orchestration.engine";


export function runKnowledgeOrchestration(
data:any
){

return orchestrateKnowledge(data);

}


export function reviewKnowledgeOrchestration(
agentId:string
){

return coordinateKnowledgeFlow(agentId);

}


export function resetKnowledgeOrchestration(){

return true;

}


export {
generateKnowledgeOrchestrationReport
};

