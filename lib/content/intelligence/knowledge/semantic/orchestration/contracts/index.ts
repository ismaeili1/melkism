/**
 * MELKISM Semantic Intelligence Orchestration Contracts
 *
 * v0.8.1
 */

export interface SemanticOrchestrationContract {

 id:
   string;


 contextId:
   string;


 operation:
   string;


 metadata?:
   Record<string, unknown>;

}
