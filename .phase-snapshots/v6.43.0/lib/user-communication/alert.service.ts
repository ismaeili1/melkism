export function createAlert(
type:string,
message:string
){

return {

type,

message,

createdAt:
new Date().toISOString()

};

}

