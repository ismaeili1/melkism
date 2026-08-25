/**
 * MELKISM Intelligence Memory Storage Adapter
 *
 * v0.4.1
 *
 * In-memory implementation of
 * IntelligenceStorage contract.
 */


import type {
 ContentEntity,
} from "../../entities";


import type {
 IntelligenceStorage,
} from "../contracts";



export class IntelligenceMemoryStorageAdapter
implements IntelligenceStorage {


 private store:
 Map<string, ContentEntity>;



 constructor(){

  this.store =
  new Map<string, ContentEntity>();

 }



 async save(
  entity:
  ContentEntity
 ):
 Promise<ContentEntity>{

  this.store.set(
   entity.id,
   entity
  );


  return entity;

 }



 async findById(
  id:
  string
 ):
 Promise<ContentEntity | null>{

  return (
   this.store.get(id)
   ??
   null
  );

 }



 async findByType(
  type:
  ContentEntity["type"]
 ):
 Promise<readonly ContentEntity[]>{

  return Array.from(
   this.store.values()
  )
  .filter(
   entity =>
   entity.type === type
  );

 }



 async remove(
  id:
  string
 ):
 Promise<boolean>{

  return this.store.delete(id);

 }



 async count():
 Promise<number>{

  return this.store.size;

 }

}
