
import type {

IntelligenceEvaluationRecord

}
from "./intelligence.evaluation.types";


const evaluations:
IntelligenceEvaluationRecord[]
=
[];



export function saveEvaluation(
record:IntelligenceEvaluationRecord
){

evaluations.push(record);

return record;

}



export function getAgentEvaluations(
agentId:string
){

return evaluations.filter(
item=>item.agentId===agentId
);

}



export function clearEvaluations(){

evaluations.length=0;

}

