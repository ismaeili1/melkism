export interface SearchQuery {

text:string;

context:string;

}


export interface SearchResult {

id:string;

score:number;

source:string;

}


export interface RankingMetadata {

relevance:number;

confidence:number;

}

