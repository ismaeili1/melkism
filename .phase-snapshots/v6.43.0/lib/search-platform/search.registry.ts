import type {
SearchSource
} from "./search.types";


const sources:SearchSource[]=[];



export function registerSearchSource(
source:SearchSource
){

if(!sources.includes(source)){

sources.push(source);

}

}



export function getSearchSources(){

return [...sources];

}

