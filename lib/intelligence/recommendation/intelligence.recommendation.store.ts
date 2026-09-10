
import type {

RecommendationItem

}
from "./intelligence.recommendation.types";


const recommendations:
RecommendationItem[]
=
[];



export function saveRecommendation(
item:RecommendationItem
){

recommendations.push(item);

return item;

}



export function getRecommendations(){

return recommendations;

}



export function clearRecommendations(){

recommendations.length=0;

}



