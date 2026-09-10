import {
 IntelligenceModuleContract
}
from "./intelligence.registry.types";


class IntelligenceRegistry {


 private modules:
 Map<string,IntelligenceModuleContract>
 =
 new Map();



 register(
 module:IntelligenceModuleContract
 ){

   this.modules.set(
    module.id,
    module
   );

 }



 get(
 id:string
 ){

   return this.modules.get(id);

 }



 list(){

   return Array.from(
    this.modules.values()
   );

 }


}



export const intelligenceRegistry =
new IntelligenceRegistry();

