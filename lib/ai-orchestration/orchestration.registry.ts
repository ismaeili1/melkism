import type {
AIRequest
} from "./orchestration.types";


const requests:AIRequest[]=[];


export function registerAIRequest(
request:AIRequest
){

requests.push(request);

}


export function getAIRequests(){

return [...requests];

}

