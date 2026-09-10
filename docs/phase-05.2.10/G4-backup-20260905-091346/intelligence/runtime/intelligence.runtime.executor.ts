
import {
 intelligenceRuntimeRegistry
}
from "./intelligence.runtime.registry";



export async function executeIntelligenceRuntime(
moduleId:string,
input:unknown
){


const module =
intelligenceRuntimeRegistry.get(moduleId);



if(!module){

throw new Error(
`Runtime module not found: ${moduleId}`
);

}



return module.execute(input);



}


