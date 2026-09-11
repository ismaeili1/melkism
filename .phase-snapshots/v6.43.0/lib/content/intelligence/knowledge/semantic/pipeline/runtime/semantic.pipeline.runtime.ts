/**
 * MELKISM Semantic Pipeline Runtime
 *
 * v0.8.1
 */

import type {
 SemanticPipelineContext
} from "../contracts/semantic.pipeline.context.contract";


export class SemanticPipelineRuntime {


async execute(
 context:
 SemanticPipelineContext
){

 return {

   pipeline:
   "semantic",

   contextId:
   context.id,

   executed:
   true

 };

}


}

