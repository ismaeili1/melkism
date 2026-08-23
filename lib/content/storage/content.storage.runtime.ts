/**
 * MELKISM Content Storage Runtime
 *
 * v0.2.7
 *
 * Runtime boundary for content storage operations.
 *
 * This layer delegates storage operations only.
 *
 * It does not know:
 * - database technology
 * - ORM
 * - filesystem
 * - external providers
 */


import type {
 ContentStorageContract,
 CreateStoredContentInput,
 UpdateStoredContentInput,
 StoredContent,
} from "./content.storage.contract";



export class ContentStorageRuntime {


 constructor(
   private readonly storage:
   ContentStorageContract,
 ) {}



 save(
   input:
   CreateStoredContentInput,
 ):
 Promise<StoredContent> {

   return this.storage.save(input);

 }



 findById(
   id:string,
 ):
 Promise<StoredContent | undefined> {

   return this.storage.findById(id);

 }



 update(
   id:string,
   input:
   UpdateStoredContentInput,
 ):
 Promise<StoredContent> {

   return this.storage.update(
     id,
     input
   );

 }



 delete(
   id:string,
 ):
 Promise<boolean> {

   return this.storage.delete(id);

 }


}
