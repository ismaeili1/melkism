export function recordProfileActivity(
action:string
){

return {

action,

timestamp:
new Date().toISOString()

};

}

