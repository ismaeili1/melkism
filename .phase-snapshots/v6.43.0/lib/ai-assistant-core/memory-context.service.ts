export function createMemoryContext(
data:unknown
){

return {

data,

timestamp:
new Date().toISOString()

};

}

