/**
 * MELKISM Content Storage Memory Adapter
 *
 * v0.2.7
 *
 * In-memory implementation of ContentStorageContract.
 *
 * This adapter exists for:
 * - runtime validation
 * - smoke testing
 * - development environments
 *
 * It does not use:
 * - database
 * - filesystem
 * - external services
 */


import type {
 ContentStorageContract,
 CreateStoredContentInput,
 UpdateStoredContentInput,
 StoredContent,
} from "../content.storage.contract";



export class InMemoryContentStorageAdapter
implements ContentStorageContract {



 private readonly records =
 new Map<string, StoredContent>();



 async save(
   input:
   CreateStoredContentInput,
 ):
 Promise<StoredContent> {


 const item: StoredContent = {

   id:
   crypto.randomUUID(),

   ...input,

 };


 this.records.set(
   item.id,
   item
 );


 return item;

 }



 async findById(
   id:string,
 ):
 Promise<StoredContent | undefined> {


 return this.records.get(id);

 }



 async update(
   id:string,
   input:
   UpdateStoredContentInput,
 ):
 Promise<StoredContent> {


 const existing =
 this.records.get(id);



 if(!existing){

   throw new Error(
    "Content not found."
   );

 }



 const updated: StoredContent = {

   ...existing,

   ...input,

 };



 this.records.set(
   id,
   updated
 );


 return updated;

 }



 async delete(
   id:string,
 ):
 Promise<boolean> {


 return this.records.delete(id);

 }


}
