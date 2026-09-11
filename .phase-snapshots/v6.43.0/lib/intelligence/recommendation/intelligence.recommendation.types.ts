
export interface RecommendationRequest {


context?:unknown;


target?:string;


limit?:number;


criteria?:unknown;


}



export interface RecommendationItem {


id:string;


title:string;


reason:string;


score:number;


metadata?:unknown;


}



