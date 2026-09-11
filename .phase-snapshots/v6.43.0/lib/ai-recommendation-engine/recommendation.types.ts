export type RecommendationType =
 | "property"
 | "content"
 | "investment";


export interface RecommendationRequest {

userId:string;

type:RecommendationType;

context:string[];

}


export interface RecommendationResult {

id:string;

score:number;

reason:string;

}

