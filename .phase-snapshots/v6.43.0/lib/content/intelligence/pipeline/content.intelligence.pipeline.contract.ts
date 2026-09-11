/**
 * MELKISM Content Intelligence Pipeline Contract
 *
 * v0.4.0
 */


import type {
 EntityExtractionRequest,
 EntityExtractionResult,
} from "../extraction";



export interface ContentIntelligencePipeline {


 execute(
  request:
  EntityExtractionRequest
 ):
 Promise<EntityExtractionResult>;


}
