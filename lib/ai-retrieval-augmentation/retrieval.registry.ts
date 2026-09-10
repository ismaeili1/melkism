import type {
RetrievalRequest
} from "./retrieval.types";


const requests:RetrievalRequest[]=[];


export function registerRetrieval(
request:RetrievalRequest
){

requests.push(request);

}


export function getRetrievalRequests(){

return [...requests];

}

