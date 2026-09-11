import type {
SearchQuery
} from "./search.types";


export function normalizeQuery(
query:SearchQuery
){


return {

...query,

text:
query.text.trim().toLowerCase()

};


}

