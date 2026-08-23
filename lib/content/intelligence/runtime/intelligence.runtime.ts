/**
 * MELKISM Intelligence Runtime
 *
 * v0.4.0
 */


import type {
 IntelligenceRuntime,
} from "./intelligence.runtime.contract";


import type {
 EntityExtractor,
 EntityExtractionRequest,
 EntityExtractionResult,
} from "../extraction";



export class DefaultIntelligenceRuntime
implements IntelligenceRuntime {


 constructor(
  private readonly extractor:
  EntityExtractor
 ){}



 async extractEntities(
  request:
  EntityExtractionRequest
 ):
 Promise<EntityExtractionResult>{


  return this.extractor.extract(
   request
  );


 }



}
