export function createRetrievalContext(
data:unknown
){

return {

source:
"semantic-search",

data,

createdAt:
new Date().toISOString()

};

}

