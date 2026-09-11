import type {
ServiceEvent
} from "./event.types";


import type {
EventHandler
} from "./event.handler";


export class EventProcessor {


constructor(
private handler:EventHandler
){}



async process(
event:ServiceEvent
){

await this.handler.handle(event);

}


}

