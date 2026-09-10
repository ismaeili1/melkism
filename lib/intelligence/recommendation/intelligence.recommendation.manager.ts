
import {

generateRecommendations

}
from "./intelligence.recommendation.engine";


import {

getRecommendations,
clearRecommendations

}
from "./intelligence.recommendation.store";



export function recommend(
request:any
){

return generateRecommendations(request);

}



export function listRecommendations(){

return getRecommendations();

}



export function resetRecommendations(){

return clearRecommendations();

}



