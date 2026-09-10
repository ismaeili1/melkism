import type {
SearchResult
} from "./search.types";


export function discoverRelated(
result:SearchResult
){

return {

source:
result.source,

related:[]

};

}

