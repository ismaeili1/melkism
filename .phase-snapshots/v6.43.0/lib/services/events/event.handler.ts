import type {
ServiceEvent
} from "./event.types";


export interface EventHandler {


handle(
event:ServiceEvent
):Promise<void>;


}

