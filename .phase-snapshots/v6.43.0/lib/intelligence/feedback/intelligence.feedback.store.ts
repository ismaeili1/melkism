
import type {

IntelligenceFeedbackRecord

}
from "./intelligence.feedback.types";


const feedbackRecords:
IntelligenceFeedbackRecord[]
=
[];



export function saveFeedback(
record:IntelligenceFeedbackRecord
){

feedbackRecords.push(record);

return record;

}



export function getAgentFeedback(
agentId:string
){

return feedbackRecords.filter(
item=>item.agentId===agentId
);

}



export function clearFeedback(){

feedbackRecords.length=0;

}

