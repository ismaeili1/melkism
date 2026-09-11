export function recordActivity(
userId:string,
action:string
){

return {

userId,

action,

timestamp:
new Date().toISOString()

};

}

