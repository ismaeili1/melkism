/**
 * MELKISM Semantic Query Intelligence Contract
 *
 * v0.8.1
 */


import type {
 SemanticContextContract
} from "../contracts/semantic.context.contract";



export interface SemanticQueryIntelligenceContract {


 query:
   string;


 analyze():
   SemanticContextContract | undefined;


}

