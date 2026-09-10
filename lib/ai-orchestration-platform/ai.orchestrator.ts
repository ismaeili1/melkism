import {
getAgents
} from "./agent.registry";


import type {
AIContext
} from "./ai.types";


export function orchestrateAI(
context:AIContext
){


return {


context,

availableAgents:
getAgents()


};


}

