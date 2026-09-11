/**
 * MELKISM Content Runtime Storage
 *
 * v0.2.8
 */


import type {
 ContentStorageContract,
 CreateStoredContentInput,
 UpdateStoredContentInput,
 StoredContent,
} from "../storage/content.storage.contract";



export class ContentRuntimeStorage {


 constructor(
  private readonly storage:
  ContentStorageContract
 ){}



 async save(
  input:CreateStoredContentInput
 ):
 Promise<StoredContent>{

 return this.storage.save(input);

 }



 async findById(
  id:string
 ):
 Promise<StoredContent | undefined>{

 return this.storage.findById(id);

 }



 async update(
  id:string,
  input:UpdateStoredContentInput
 ):
 Promise<StoredContent>{

 return this.storage.update(id,input);

 }



 async delete(
  id:string
 ):
 Promise<boolean>{

 return this.storage.delete(id);

 }



 async list():
 Promise<readonly StoredContent[]>{

 return this.storage.list();

 }


}


/**
 * Backward compatibility export
 *
 * v0.2.8
 */

export {
  ContentRuntimeStorage as ContentStorageRuntime,
};
