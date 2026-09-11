import type {

DecisionCandidate,

ConflictResolutionResult

} from "./conflict.types";



export class AgentConflictResolver {



resolve(

conflictId:string,

candidates:DecisionCandidate[]

):ConflictResolutionResult {



const selected=

candidates.sort(

(a,b)=>

(b.confidence*b.priority)

-

(a.confidence*a.priority)

)[0];



return {


conflictId,


selectedDecision:selected.decision,


selectedAgent:selected.agentId,


confidence:selected.confidence,


resolvedAt:new Date()


};



}



}

