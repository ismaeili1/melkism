import {
saveKnowledgePriorityInference,
getAgentKnowledgePriorityInference
}
from "./intelligence.knowledge.priority.inference.store";


export function inferKnowledgePriority(
data:any
){

return saveKnowledgePriorityInference({

id:crypto.randomUUID(),

createdAt:new Date(),

inferenceStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePriorityInference(
agentId:string
){

return getAgentKnowledgePriorityInference(agentId);

}



export function generatePriorityInferenceReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
