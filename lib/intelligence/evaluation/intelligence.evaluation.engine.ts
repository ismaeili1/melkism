
import {

saveEvaluation,
getAgentEvaluations

}
from "./intelligence.evaluation.store";



export function evaluateAgent(
data:any
){

return saveEvaluation({

id:crypto.randomUUID(),

createdAt:new Date(),

score:data.score ?? 0,

type:"performance",

...data

});

}



export function calculateScore(
agentId:string
){

const items=getAgentEvaluations(agentId);

if(!items.length){

return 0;

}


return items.reduce(
(sum,item)=>sum+item.score,
0
)/items.length;

}



export function generateFeedback(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

