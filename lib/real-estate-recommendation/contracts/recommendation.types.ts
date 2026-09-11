export interface RecommendationItem {

id:string;

title:string;

score:number;

}


export interface RecommendationResult {

items:RecommendationItem[];

confidence:number;

}


