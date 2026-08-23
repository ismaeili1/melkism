/**
 * MELKISM Content Intelligence Pipeline
 *
 * v0.4.0
 */


import type {
 ContentIntelligencePipeline,
} from "./content.intelligence.pipeline.contract";


import type {
 EntityExtractionRequest,
 EntityExtractionResult,
} from "../extraction";


import type {
 IntelligenceComposition,
} from "../composition";



export class DefaultContentIntelligencePipeline
implements ContentIntelligencePipeline {



 constructor(
  private readonly composition:
  IntelligenceComposition
 ){}



 async execute(
  request:
  EntityExtractionRequest
 ):
 Promise<EntityExtractionResult>{


  return this.composition.process(
   request
  );


 }


}
