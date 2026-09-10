import type {
IntelligenceEvent
} from "../core";


export interface EventListener {

onEvent(
event:IntelligenceEvent
):Promise<void>;

}

