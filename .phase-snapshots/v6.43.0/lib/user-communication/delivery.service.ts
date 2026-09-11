export function deliverNotification(
channel:string,
payload:unknown
){

return {

channel,

payload,

delivered:true

};

}

