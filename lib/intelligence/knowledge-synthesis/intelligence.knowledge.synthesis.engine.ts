
import {

saveKnowledgeSynthesis,
getAgentKnowledgeSynthesis

}
from "./intelligence.knowledge.synthesis.store";


export function synthesizeKnowledge(
data:any
){

return saveKnowledgeSynthesis({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"synthesized",

metadata:null,

...data

});

}



export function combineKnowledge(
agentId:string
){

return getAgentKnowledgeSynthesis(agentId);

}



export function generateKnowledgeSynthesisReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

