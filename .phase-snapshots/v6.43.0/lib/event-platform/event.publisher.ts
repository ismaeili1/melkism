import {
publishEvent
} from "./event.bus";


export function createEvent(
type:string,
payload:unknown
){


publishEvent({

id:
crypto.randomUUID(),

type,

version:"1.0",

payload,

createdAt:
new Date().toISOString()

});


}

