/**
 * MELKISM Intelligence Storage Composition
 *
 * v0.4.1
 *
 * Creates configured intelligence
 * storage runtime instances.
 */


import {
 IntelligenceMemoryStorageAdapter,
} from "../adapters";


import {
 IntelligenceStorageRuntime,
} from "../runtime";



export function createIntelligenceStorageRuntime(){

 const adapter =
 new IntelligenceMemoryStorageAdapter();



 return new IntelligenceStorageRuntime(
  adapter
 );

}
