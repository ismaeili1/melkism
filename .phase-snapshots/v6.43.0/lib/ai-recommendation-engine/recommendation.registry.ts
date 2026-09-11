import type {
RecommendationRequest
} from "./recommendation.types";


const requests:RecommendationRequest[]=[];


export function registerRecommendationRequest(
request:RecommendationRequest
){

requests.push(request);

}


export function getRecommendationRequests(){

return [...requests];

}

