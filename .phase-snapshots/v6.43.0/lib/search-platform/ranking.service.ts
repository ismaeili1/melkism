import type {
SearchResult
} from "./search.types";


export function rankResults(
results:SearchResult[]
){


return results.sort(
(a,b)=>
b.score-a.score
);


}

