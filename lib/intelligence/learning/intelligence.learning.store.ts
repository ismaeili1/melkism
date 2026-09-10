
import type {

IntelligenceLearningRecord

}
from "./intelligence.learning.types";


const records:
IntelligenceLearningRecord[]
=
[];



export function saveLearningRecord(
record:IntelligenceLearningRecord
){

records.push(record);

return record;

}



export function getAgentLearning(
agentId:string
){

return records.filter(
record=>record.agentId===agentId
);

}



export function clearLearning(){

records.length=0;

}

