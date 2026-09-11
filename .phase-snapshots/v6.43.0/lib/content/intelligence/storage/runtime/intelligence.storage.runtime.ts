/**
 * MELKISM Intelligence Storage Runtime
 *
 * v0.4.1
 *
 * Runtime boundary between
 * intelligence pipeline and storage providers.
 */


import type {
 ContentEntity,
} from "../../entities";


import type {
 IntelligenceStorage,
} from "../contracts";



export class IntelligenceStorageRuntime {


 constructor(
  private readonly storage:
  IntelligenceStorage
 ){}



 async save(
  entity:
  ContentEntity
 ):
 Promise<ContentEntity>{

  return this.storage.save(
   entity
  );

 }



 async findById(
  id:
  string
 ):
 Promise<ContentEntity | null>{

  return this.storage.findById(
   id
  );

 }



 async findByType(
  type:
  ContentEntity["type"]
 ):
 Promise<readonly ContentEntity[]>{

  return this.storage.findByType(
   type
  );

 }



 async remove(
  id:
  string
 ):
 Promise<boolean>{

  return this.storage.remove(
   id
  );

 }



 async count():
 Promise<number>{

  return this.storage.count();

 }

}
