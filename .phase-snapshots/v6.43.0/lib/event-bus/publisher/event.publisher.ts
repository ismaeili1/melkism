import type {
IntelligenceEvent
} from "../core";


export interface EventPublisher {

publish(
event:IntelligenceEvent
):Promise<void>;

}

