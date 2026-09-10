export function createGraphContext(
data:unknown
){

return {

source:"ai-knowledge-graph",

data,

createdAt:
new Date().toISOString()

};

}

