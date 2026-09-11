/**
 * MELKISM Autonomous Decision Intelligence Runtime
 *
 * v0.9.7
 */


import type {
 AutonomousDecisionContract
}
from "../contracts/autonomous.decision.contract";



export class AutonomousDecisionIntelligenceRuntime {



private readonly decisions:
Map<string,AutonomousDecisionContract>;



constructor(){

this.decisions =
new Map();

}



register(
decision:AutonomousDecisionContract
){

this.decisions.set(
decision.id,
decision
);

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

