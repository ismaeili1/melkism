/**
 * MELKISM Intelligence Storage Contract
 *
 * v0.4.1
 *
 * Boundary for persistent knowledge storage.
 *
 * Database independent contract.
 */


import type {
 ContentEntity,
} from "../../entities";



export interface IntelligenceStorage {


 save(
  entity:
  ContentEntity
 ):
 Promise<ContentEntity>;



 findById(
  id:
  string
 ):
 Promise<ContentEntity | null>;



 findByType(
  type:
  ContentEntity["type"]
 ):
 Promise<readonly ContentEntity[]>;



 remove(
  id:
  string
 ):
 Promise<boolean>;



 count():
 Promise<number>;

}
