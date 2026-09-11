export function createAIContext(
data:unknown
){

return {

data,

createdAt:
new Date().toISOString()

};

}

