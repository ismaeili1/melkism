
import type {
 IntelligenceRuntimeModule
}
from "./intelligence.runtime.types";



class IntelligenceRuntimeRegistry {


private modules =
new Map<string, IntelligenceRuntimeModule>();



register(
module:IntelligenceRuntimeModule
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



remove(
id:string
){

return this.modules.delete(id);

}



}



export const intelligenceRuntimeRegistry =
new IntelligenceRuntimeRegistry();
/**
 * Canonical runtime registry accessor.
 * Returns the currently registered runtime modules.
 */
export function getRuntimeRegistry() {
  return intelligenceRuntimeRegistry.list();
}