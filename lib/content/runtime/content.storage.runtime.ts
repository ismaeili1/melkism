/**
 * MELKISM Content Storage Runtime Integration
 *
 * v0.2.7
 *
 * Application runtime boundary for content storage.
 *
 * This layer receives composed dependencies.
 *
 * It does not know concrete adapters.
 */


import {
  ContentStorageRuntime,
} from "../storage";


import type {
  ContentStorageDependencies,
} from "../storage";



export class ContentRuntimeStorage {


 private readonly runtime:
 ContentStorageRuntime;



 constructor(
   dependencies:
   ContentStorageDependencies,
 ){

   this.runtime =
   new ContentStorageRuntime(
     dependencies.contentStorage,
   );

 }



 save(
   input:
   Parameters<
    ContentStorageRuntime["save"]
   >[0],
 ){

   return this.runtime.save(input);

 }



 findById(
   id:string,
 ){

   return this.runtime.findById(id);

 }



 update(
   id:string,
   input:
   Parameters<
    ContentStorageRuntime["update"]
   >[1],
 ){

   return this.runtime.update(
     id,
     input,
   );

 }



 delete(
   id:string,
 ){

   return this.runtime.delete(id);

 }


}
