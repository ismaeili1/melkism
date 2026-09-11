export function saveSearchHistory(
userId:string,
query:string
){

return {

userId,

query,

createdAt:
new Date().toISOString()

};

}

