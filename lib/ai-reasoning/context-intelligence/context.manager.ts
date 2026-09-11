import type {
 ReasoningContextWindow,
 ContextSignal
}
from "./context.types";


export function createContextWindow(
 signals:ContextSignal[]
):ReasoningContextWindow {


return {

 signals,

 timestamp:
 new Date().toISOString()

};


}


