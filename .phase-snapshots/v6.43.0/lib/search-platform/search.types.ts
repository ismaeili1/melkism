export type SearchSource =
 | "property"
 | "content"
 | "knowledge"
 | "market"
 | "architecture";


export interface SearchQuery {

text:string;

source?:SearchSource;

limit?:number;

}


export interface SearchResult {

id:string;

title:string;

source:SearchSource;

score:number;

}


