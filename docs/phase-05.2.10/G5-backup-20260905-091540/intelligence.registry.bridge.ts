
import {
 intelligenceRegistry
}
from "../registry";


import type {
 IntelligenceResolutionResult
}
from "./intelligence.resolver.types";



export function resolveIntelligenceModule(
 moduleId:string
):IntelligenceResolutionResult {


 const runtimeModule =
 intelligenceRegistry.get(moduleId);



 if(!runtimeModule){

   return {

    success:false,

    moduleId,

    error:
    "INTELLIGENCE_MODULE_NOT_FOUND"

   };

 }



 return {

   success:true,

   moduleId,

   runtimeModule

 };


}




