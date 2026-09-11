import {
saveKnowledgePrioritySynthesis,
getAgentKnowledgePrioritySynthesis
}
from "./intelligence.knowledge.priority.synthesis.store";


export function synthesizeKnowledgePriority(
data:any
){

return saveKnowledgePrioritySynthesis({

id:crypto.randomUUID(),

createdAt:new Date(),

synthesisStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePrioritySynthesis(
agentId:string
){

return getAgentKnowledgePrioritySynthesis(agentId);

}



export function generatePrioritySynthesisReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
