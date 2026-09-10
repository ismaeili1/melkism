export type SearchIntent =
 | "property-search"
 | "market-search"
 | "knowledge-search"
 | "investment-search";


export interface SearchQuery {

text:string;

intent:SearchIntent;

entities:string[];

}


export interface SearchResult {

id:string;

score:number;

context:string;

}

