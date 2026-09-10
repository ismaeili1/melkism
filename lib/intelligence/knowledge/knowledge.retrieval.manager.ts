
import {
retrieveKnowledge
}
from "./knowledge.retrieval.engine";



export function queryKnowledge(
request:any
){

return retrieveKnowledge(request);

}



export function rankKnowledge(
results:any
){

return results;

}


