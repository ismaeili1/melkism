import type {
EventSubscriber
} from "./event.types";


const subscribers:EventSubscriber[]=[];



export function registerSubscriber(
subscriber:EventSubscriber
){

subscribers.push(subscriber);

}



export function getSubscribers(){

return [...subscribers];

}

