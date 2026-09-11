import type {
PlatformEvent
} from "./event.types";


import {
getSubscribers
} from "./event.registry";



export function publishEvent(
event:PlatformEvent
){


getSubscribers()
.filter(
subscriber =>
subscriber.event===event.type
)
.forEach(
subscriber =>
subscriber.handler(event)
);


}


