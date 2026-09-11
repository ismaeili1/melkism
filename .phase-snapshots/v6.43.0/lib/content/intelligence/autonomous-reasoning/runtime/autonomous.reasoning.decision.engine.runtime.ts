/**
 * MELKISM Autonomous Reasoning Decision Engine Runtime
 *
 * v0.9.8
 */


import type {
 AutonomousReasoningDecisionContract
}
from "../contracts/autonomous.reasoning.decision.contract";



export class AutonomousReasoningDecisionEngineRuntime {



private readonly decisions:
Map<string,AutonomousReasoningDecisionContract>;



constructor(){

this.decisions =
new Map();

}



evaluate(
decision:AutonomousReasoningDecisionContract
){

this.decisions.set(
decision.id,
decision
);


return decision;

}



resolve(
id:string
){

return this.decisions.get(id);

}



list(){

return Array.from(
this.decisions.values()
);

}



}

