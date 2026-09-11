export interface SearchHistoryRecord {

id:string;

userId:string;

query:string;

createdAt:string;

}


export interface SavedQueryRecord {

id:string;

userId:string;

query:string;

filters:string[];

createdAt:string;

}


export interface InterestProfile {

userId:string;

interests:string[];

}

