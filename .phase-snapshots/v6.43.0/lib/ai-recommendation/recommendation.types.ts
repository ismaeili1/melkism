export interface RecommendationRecord {

id:string;

userId:string;

type:string;

score:number;

createdAt:string;

}


export interface RankingRecord {

itemId:string;

score:number;

}


export interface IntelligenceNode {

userId:string;

signals:string[];

}

