/**
 * MELKISM Intelligence Persistence Integration
 *
 * v0.4.1
 *
 * Connects extracted entities
 * with knowledge storage.
 */


import type {
 EntityExtractionResult,
} from "../extraction";


import type {
 ContentEntity,
} from "../entities";


import {
 IntelligenceStorageRuntime,
} from "../storage/runtime";



export class IntelligencePersistenceIntegration {


 constructor(
  private readonly storage:
  IntelligenceStorageRuntime
 ){}



 async persistExtraction(
  result:
  EntityExtractionResult
 ):
 Promise<readonly ContentEntity[]>{


  const saved:
  ContentEntity[] = [];



  for(
   const entity
   of result.entities
  ){

   const persisted =
   await this.storage.save(
    entity
   );


   saved.push(
    persisted
   );

  }



  return saved;

 }

}
