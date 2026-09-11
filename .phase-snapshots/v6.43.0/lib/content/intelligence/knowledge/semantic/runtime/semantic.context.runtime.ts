/**
 * MELKISM Semantic Context Runtime
 *
 * v0.8.1
 */

import type {
 SemanticContextContract
} from '../contracts/semantic.context.contract';


export class SemanticContextRuntime {


 private readonly contexts:
   Map<string, SemanticContextContract>;


 constructor(){

   this.contexts =
     new Map();

 }


 register(
   context: SemanticContextContract
 ): void {

   this.contexts.set(
     context.id,
     context
   );

 }


 resolve(
   entityId: string
 ):
 SemanticContextContract | undefined {

   return this.contexts.get(
     entityId
   );

 }


 list():
 readonly SemanticContextContract[] {

   return Array.from(
     this.contexts.values()
   );

 }

}






