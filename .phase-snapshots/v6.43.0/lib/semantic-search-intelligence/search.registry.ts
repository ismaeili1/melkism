import type {
SearchQuery
} from "./search.types";


const queries:SearchQuery[]=[];


export function registerSearchQuery(
query:SearchQuery
){

queries.push(query);

}


export function getSearchQueries(){

return [...queries];

}

