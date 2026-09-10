
import {
 intelligenceRuntimeRegistry
}
from "./intelligence.runtime.registry";



export async function executeIntelligenceRuntime(
moduleId:string,
input:unknown
){


const runtimeModule =
intelligenceRuntimeRegistry.get(moduleId);



if(!runtimeModule){

throw new Error(
`Runtime runtimeModule not found: ${moduleId}`
);

}



return runtimeModule.execute(input);



}



