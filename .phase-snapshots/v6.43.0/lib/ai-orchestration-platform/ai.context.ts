import type {
AIContext
} from "./ai.types";



export function createAIContext(
query:string
):AIContext{


return {

query,

sources:[]

};


}

