export function saveMemory(
userId:string,
memory:string
){

return {

userId,

memory,

createdAt:
new Date().toISOString()

};

}

