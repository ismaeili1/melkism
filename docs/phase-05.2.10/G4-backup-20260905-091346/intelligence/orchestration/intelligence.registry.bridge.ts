
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


 const module =
 intelligenceRegistry.get(moduleId);



 if(!module){

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

   module

 };


}



