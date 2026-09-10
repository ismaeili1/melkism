import type {
RecommendationRecord
} from "./recommendation.types";


const records:RecommendationRecord[]=[];


export function registerRecommendation(
record:RecommendationRecord
){

records.push(record);

}


export function getRecommendations(){

return [...records];

}

