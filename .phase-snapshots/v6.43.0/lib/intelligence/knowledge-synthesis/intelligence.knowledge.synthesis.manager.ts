
import {

synthesizeKnowledge,
combineKnowledge,
generateKnowledgeSynthesisReport

}
from "./intelligence.knowledge.synthesis.engine";


export function runKnowledgeSynthesis(
data:any
){

return synthesizeKnowledge(data);

}



export function reviewKnowledgeSynthesis(
agentId:string
){

return combineKnowledge(agentId);

}



export function resetKnowledgeSynthesis(){

return true;

}



export {

generateKnowledgeSynthesisReport

};

