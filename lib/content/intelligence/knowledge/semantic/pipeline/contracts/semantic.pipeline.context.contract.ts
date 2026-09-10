/**
 * MELKISM Semantic Pipeline Context Contract
 *
 * v0.8.1
 */

import type {
 SemanticContextContract
} from "../../contracts/semantic.context.contract";


export interface SemanticPipelineContext {


 id:
 string;


 semanticContext:
 SemanticContextContract;


 metadata?:
 Record<string, unknown>;

}
