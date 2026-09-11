import {
registerSubscriber
} from "./event.registry";


export function subscribeEvent(
event:string,
handler:(payload:any)=>void
){


registerSubscriber({

event,

handler

});


}

