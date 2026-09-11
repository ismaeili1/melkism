/**
 * MELKISM Intelligence Composition Contract
 *
 * v0.4.0
 */


import type {
 EntityExtractionRequest,
 EntityExtractionResult,
} from "../extraction";



export interface IntelligenceComposition {


 process(
  request:
  EntityExtractionRequest
 ):
 Promise<EntityExtractionResult>;


}
