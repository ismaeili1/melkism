export function generateToken(
userId:string
){

return {

value:
crypto.randomUUID(),

userId,

createdAt:
new Date().toISOString()

};

}

