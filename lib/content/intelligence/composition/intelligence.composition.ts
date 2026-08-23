/**
 * MELKISM Intelligence Composition
 *
 * v0.4.0
 */


import type {
 IntelligenceComposition,
} from "./intelligence.composition.contract";


import type {
 EntityExtractionRequest,
 EntityExtractionResult,
} from "../extraction";


import type {
 IntelligenceRuntime,
} from "../runtime";



export class DefaultIntelligenceComposition
implements IntelligenceComposition {



 constructor(
  private readonly runtime:
  IntelligenceRuntime
 ){}



 async process(
  request:
  EntityExtractionRequest
 ):
 Promise<EntityExtractionResult>{


  return this.runtime.extractEntities(
   request
  );


 }



}
