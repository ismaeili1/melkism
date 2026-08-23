/**
 * MELKISM Intelligence Runtime Contract
 *
 * v0.4.0
 */


import type {
 EntityExtractionResult,
 EntityExtractionRequest,
} from "../extraction";



export interface IntelligenceRuntime {


 extractEntities(
  request:
  EntityExtractionRequest
 ):
 Promise<EntityExtractionResult>;


}
