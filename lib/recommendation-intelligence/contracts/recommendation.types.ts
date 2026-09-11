export interface RecommendationRequest {

userId:string;

context:string;

}


export interface RecommendationResult {

itemId:string;

score:number;

confidence:number;

}


export interface RecommendationMetadata {

reason:string;

source:string;

}

